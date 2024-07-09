import sinon from "sinon";
import { expect } from "chai";

import Log from "../../utils/log";
import CartsController from '../../controllers/carts';
import CartsService from "../../services/carts";
import { createNewCartResponse, getCartItemsResponse, orderFormId } from "./data/carts";

const controller = new CartsController();

describe('Test Suite - Cart Controller', () => {
    beforeEach(async () => {
        sinon.stub(Log.prototype, 'error').resolves();
        sinon.stub(Log.prototype, 'info').resolves();
        sinon.stub(Log.prototype, 'warn').resolves();
    });
    afterEach(async () => {
        sinon.restore();
    });

    it('1) SUCCESS: Expect to receive a Request to create new Cart', async () => {
        sinon.stub(CartsService.prototype, 'createNewCart').resolves(createNewCartResponse.data);

        const response = await controller.createNewCart();

        expect(response).to.be.eqls(createNewCartResponse);
    });

    it('2) SUCCESS: Expect to receive a Request to get a Cart', async () => {
        sinon.stub(CartsService.prototype, 'getCartItems').resolves(getCartItemsResponse.data);

        const response = await controller.getCartItems(orderFormId);

        expect(response).to.be.eqls(getCartItemsResponse);
    });
});