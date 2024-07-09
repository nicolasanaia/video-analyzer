import { IOrderForm } from "../interfaces/orderForm";
import { IOrderFormId } from "../interfaces/carts";

export class Response {
    error: boolean;
    message: string;

    constructor(error: boolean, message: string) {
        this.error = error;
        this.message = message;
    }
}

export class CreateCartResponse extends Response {
    orderFormId?: string;

    constructor(error: boolean, message: string, orderFormId?: string) {
        super(error, message),
        this.orderFormId = orderFormId
    }
}

export class GetCartResponse extends Response {
    orderForm: IOrderForm;
    newOrderFormId?: string | null;

    constructor(error: boolean, message: string, orderForm?: IOrderForm, newOrderFormId?: string | null) {
        super(error, message),
        this.orderForm = orderForm ?? null,
        this.newOrderFormId = newOrderFormId
    }
}