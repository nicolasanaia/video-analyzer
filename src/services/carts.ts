import { IOrderForm } from "../interfaces/orderForm";
import CartsDatabase from "../database/carts";
import { CreateCartResponse, GetCartResponse } from "../models/response";
import VtexService from "./vtex";
import { IOrderItems } from "../interfaces/carts";
import CartsParser from "../parsers/carts";
import Log from "../utils/log";

export default class CartsService {
    database: CartsDatabase;
    vtex: VtexService;
    parser: CartsParser
    log: Log;

    constructor() {
        this.database = new CartsDatabase();
        this.vtex = new VtexService();
        this.parser = new CartsParser();
        this.log = new Log(this.constructor.name);
    }

    async createNewCart(): Promise<CreateCartResponse> {
        try {
            const { orderFormId } = await this.vtex.getNewCart();

            await this.database.saveCart(orderFormId);
            this.log.warn(`${this.createNewCart.name} ::: Novo carrinho gerado`, { orderFormId });

            return new CreateCartResponse(false, 'Carrinho gerado com sucesso', orderFormId);
        } catch (error) {
            this.log.error(`${this.createNewCart.name} ::: Error ao criar carrinho`, { error: error.message });

            return new CreateCartResponse(true, error.message);
        }
    }

    async getCartItems(orderFormId: string): Promise<GetCartResponse> {
        try {
            const [ cart ] = await this.database.getCartByOrderFormId(orderFormId);
            const now = new Date();

            let orderForm: IOrderForm = await this.vtex.getCartByOrderFormId(orderFormId);
            let newOrderFormId: string | null = null;

            if (cart.expirationDate < now) {
                const items: IOrderItems = await this.parser.parseOrderFormItemsToNewOrderForm(orderForm);

                ({ orderFormId: newOrderFormId } = await this.createNewCart());

                if (items.orderItems.length) {
                    await this.vtex.addCartItems(orderFormId, items);
                }
            }
            this.log.warn(`${this.getCartItems.name} ::: Carrinho encontrado`, { orderForm, newOrderFormId });

            return new GetCartResponse(false, 'Carrinho encontrado com sucesso', orderForm, newOrderFormId);
        } catch (error) {
            this.log.error(`${this.getCartItems.name} ::: Error ao encontrar carrinho`, { error: error.message });

            return new GetCartResponse(true, error.message);
        }
    }
}