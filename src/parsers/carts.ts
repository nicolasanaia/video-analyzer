import { IOrderItem, IOrderItems } from "../interfaces/carts";
import { IOrderForm } from "../interfaces/orderForm";

export default class CartsParser {
    async parseOrderFormItemsToNewOrderForm(orderForm: IOrderForm): Promise<IOrderItems> {
        const orderItems: IOrderItems = {
            orderItems: orderForm.items?.items ? orderForm.items.items.map((item, index) => {
                return {
                    quantity: item.quantity,
                    seller: item.seller,
                    id: item.id,
                    index,
                    price: item.price,
                };
            }) : []
        };
        
        return orderItems as IOrderItems;
    }
}