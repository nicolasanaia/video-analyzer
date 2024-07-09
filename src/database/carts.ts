import { TABLES } from "../constants/tables";
import { ICart } from "../interfaces/carts";
import db from "./db";

export default class CartsDatabase {
    private table: string = TABLES.CARTS;

    async saveCart(orderFormId: string): Promise<void> {
        const now = new Date();
        const expiration = new Date(new Date().setHours(now.getHours() + 4));

        const cart: ICart = {
            orderFormId,
            creationDate: now,
            expirationDate: expiration
        }; 

        await db<ICart>(this.table)
            .insert(cart);
    }

    async getCartByOrderFormId(orderFormId: string): Promise<ICart[]> {
        return await db<ICart>(this.table)
            .select('*')
            .where('orderFormId', orderFormId);
    }
}