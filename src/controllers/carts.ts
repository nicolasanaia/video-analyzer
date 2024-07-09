import { Controller, Get, HttpCode, QueryParam } from "routing-controllers";
import { OpenAPI } from "routing-controllers-openapi";

import CartsService from "../services/carts";
import { ApiResponse } from "../interfaces/response";
import { CreateCartResponse, GetCartResponse } from "../models/response";
import Log from "../utils/log";

@Controller('/cart')
export default class CartsController {
    service: CartsService;
    log: Log;

    constructor() {
        this.service = new CartsService();
        this.log = new Log(this.constructor.name);
    }

    @Get('/new')
    @HttpCode(200)
    @OpenAPI({
        summary: 'Create New Cart',
        description: 'Create and store a new Cart',
    })
    async createNewCart(): Promise<ApiResponse<CreateCartResponse>> {
        this.log.warn(`${this.createNewCart.name} ::: Chamada na API`);
        
        const response = await this.service.createNewCart();

        return { data: response };
    }

    @Get('/search')
    @HttpCode(200)
    @OpenAPI({
        summary: 'Get Cart Items',
        description: 'Get items inside a Cart',
    })
    async getCartItems(@QueryParam('orderFormId') orderFormId: string): Promise<ApiResponse<GetCartResponse>> {
        this.log.warn(`${this.getCartItems.name} ::: Chamada na API`, { orderFormId });

        const response = await this.service.getCartItems(orderFormId);

        return { data: response };
    }
}