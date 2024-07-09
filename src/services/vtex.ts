import axios from "axios";

import { VTEX_APIS, VTEX_API_HEADERS } from "../constants/api";
import { HTTP_STATUS } from "../constants/codes";
import { IOrderForm } from "../interfaces/orderForm";
import { IOrderItems } from "../interfaces/carts";
import Log from "../utils/log";

export default class VtexService {
    log: Log;

    constructor() {
        this.log = new Log(this.constructor.name);
    }

    async getNewCart(): Promise<IOrderForm> {
        try {
            const { data, status } = await axios.get<IOrderForm>(VTEX_APIS.GET_CURRENT_OR_FORCE_NEW_CART, VTEX_API_HEADERS);

            if (status >= HTTP_STATUS.MULTIPLE_CHOICES) throw new Error('Erro ao tentar obter carrinho na VTEX'); 
            this.log.warn(`${this.getNewCart.name} ::: Forçar novo carrinho na API VTEX`, data);

            return data;
        } catch (error) {
            throw new Error(error.message); 
        }
    }

    async getCartByOrderFormId(orderFormId: string): Promise<IOrderForm> {
        try {
            const url = await VTEX_APIS.GET_CART_BY_ORDER_FORM_ID(orderFormId, true);

            const { data, status } = await axios.get<IOrderForm>(url, VTEX_API_HEADERS);
    
            if (status >= HTTP_STATUS.MULTIPLE_CHOICES) throw new Error('Erro ao tentar obter carrinho na VTEX'); 
            this.log.warn(`${this.getCartByOrderFormId.name} ::: Encontrar carrinho no OrderFormId API VTEX`, data);

            return data;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async addCartItems(orderFormId: string, orderItems: IOrderItems): Promise<IOrderForm> {
        try {
            const url = await VTEX_APIS.ADD_CART_ITEMS(orderFormId);

            const { data, status } = await axios.post<IOrderForm>(url, orderItems, VTEX_API_HEADERS);

            if (status >= HTTP_STATUS.MULTIPLE_CHOICES) throw new Error('Erro ao tentar inserir itens no carrinho na VTEX'); 
            this.log.warn(`${this.addCartItems.name} ::: Adicionar items ao carrinho API VTEX`, data);

            return data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}