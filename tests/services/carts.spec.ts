import sinon from "sinon";
import { expect } from "chai";

import Log from "../../utils/log";
import CartsDatabase from "../../database/carts";
import CartsService from "../../services/carts";
import { cart, cartExpired, createNewCartResponse, emptyParserResponse, orderFormId, parserResponse } from "./data/carts";
import VtexService from "../../services/vtex";
import CartsParser from "../../parsers/carts";

const service = new CartsService();

describe('Test Suite - Cart Service', () => {
    beforeEach(async () => {
        sinon.stub(Log.prototype, 'error').resolves();
        sinon.stub(Log.prototype, 'info').resolves();
        sinon.stub(Log.prototype, 'warn').resolves();
    });
    afterEach(async () => {
        sinon.restore();
    });

    it('1) SUCCESS: Expect to create a new Cart', async () => {
        sinon.stub(CartsDatabase.prototype, 'saveCart').resolves();
        sinon.stub(VtexService.prototype, 'getNewCart').resolves({ orderFormId });

        const response = await service.createNewCart();

        expect(response).to.be.eqls(createNewCartResponse);
    });

    it('2) ERROR: Expect to fail to create a new Cart', async () => {
        sinon.stub(CartsDatabase.prototype, 'saveCart').resolves();
        sinon.stub(VtexService.prototype, 'getNewCart').throws();

        let response;

        try {
            response = await service.createNewCart();
        } catch (error) {
            response = error;
        }

        expect(response).to.throw;
    });
    
    it('3) SUCCESS: Expect to get Cart', async () => {
        sinon.stub(CartsDatabase.prototype, 'getCartByOrderFormId').resolves([cart]);
        sinon.stub(VtexService.prototype, 'getCartByOrderFormId').resolves({ orderFormId });

        const response = await service.getCartItems(orderFormId);

        expect(response.error).to.be.false;
    });
    
    it('4) SUCCESS: Expect to create a new Cart with same items', async () => {
        sinon.stub(CartsDatabase.prototype, 'getCartByOrderFormId').resolves([cartExpired]);
        sinon.useFakeTimers(new Date(2025,11,1));
        sinon.stub(VtexService.prototype, 'getCartByOrderFormId').resolves({ orderFormId });
        sinon.stub(CartsParser.prototype, 'parseOrderFormItemsToNewOrderForm').resolves(parserResponse);
        sinon.stub(CartsService.prototype, 'createNewCart').resolves(createNewCartResponse);
        sinon.stub(VtexService.prototype, 'addCartItems').resolves();

        const response = await service.getCartItems(orderFormId);

        expect(response.error).to.be.false;
    });
    
    it('5) SUCCESS: Expect to create a new Cart without items', async () => {
        sinon.stub(CartsDatabase.prototype, 'getCartByOrderFormId').resolves([cartExpired]);
        sinon.useFakeTimers(new Date(2025,11,1));
        sinon.stub(VtexService.prototype, 'getCartByOrderFormId').resolves({ orderFormId });
        sinon.stub(CartsParser.prototype, 'parseOrderFormItemsToNewOrderForm').resolves(emptyParserResponse);
        sinon.stub(CartsService.prototype, 'createNewCart').resolves(createNewCartResponse);
        sinon.stub(VtexService.prototype, 'addCartItems').resolves();

        const response = await service.getCartItems(orderFormId);

        expect(response.error).to.be.false;
    });
       
    it('6) ERROR: Expect to not get a Cart', async () => {
        sinon.stub(CartsDatabase.prototype, 'getCartByOrderFormId').resolves([cart]);
        sinon.stub(VtexService.prototype, 'getCartByOrderFormId').throws();

        const response = await service.getCartItems(orderFormId);

        expect(response.error).to.be.true;
    });
});