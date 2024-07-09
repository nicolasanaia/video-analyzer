import { IOrderItem, IOrderItems } from "../../../src/interfaces/carts";

export const vtexResponse = {
    data: {
        orderFormId: 'id'
    },
    status: 200
};

export const vtexResponseError = {
    data: {},
    status: 400
};

export const orderFormId = 'id';

export const items: IOrderItem = {
    quantity: 1,
    seller: 'todovino',
    id: 'id1',
    index: 0,
    price: 10
};

export const orderItemsParsed: IOrderItems = {
    orderItems: [items]
};