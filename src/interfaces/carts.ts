export type ICart = {
    id?: number,
    orderFormId: string,
    creationDate?: Date,
    expirationDate?: Date
};

export type IOrderFormId = {
    orderFormId: string,
};

export type IOrderItem = {
    quantity?: number,
    seller?: string,
    id?: string,
    index?: number,
    price?: number
};

export type IOrderItems = {
    orderItems?: IOrderItem[]
};