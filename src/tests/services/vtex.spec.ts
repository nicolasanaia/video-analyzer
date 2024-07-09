import sinon from "sinon";
import { expect } from "chai";

import Log from "../../utils/log";
import VtexService from "../../services/vtex";
import axios from "axios";
import { orderFormId, orderItemsParsed, vtexResponse, vtexResponseError } from "./data/vtex";

const service = new VtexService();

describe('Test Suite - Vtex Service', () => {
    beforeEach(async () => {
        sinon.stub(Log.prototype, 'error').resolves();
        sinon.stub(Log.prototype, 'info').resolves();
        sinon.stub(Log.prototype, 'warn').resolves();
    });
    afterEach(async () => {
        sinon.restore();
    });

    it('1) SUCCESS: Expect to get a Cart', async () => {
        sinon.stub(axios, 'get').resolves(vtexResponse);

        const response = await service.getNewCart();

        expect(response).to.be.eqls(vtexResponse.data);
    });

    it('2) ERROR: Expect to not get a Cart', async () => {
        sinon.stub(axios, 'get').resolves(vtexResponseError);

        let response;

        try {
            response = await service.getNewCart();
        } catch (error) {
            response = error;
        }

        expect(response).to.throw;
    });

    it('3) SUCCESS: Expect to get a Cart by orderFormId', async () => {
        sinon.stub(axios, 'get').resolves(vtexResponse);

        const response = await service.getCartByOrderFormId(orderFormId);

        expect(response).to.be.eqls(vtexResponse.data);
    });

    it('4) ERROR: Expect to not get a Cart by orderFormId', async () => {
        sinon.stub(axios, 'get').resolves(vtexResponseError);

        let response;

        try {
            response = await service.getCartByOrderFormId(orderFormId);
        } catch (error) {
            response = error;
        }

        expect(response).to.throw;
    });

    it('5) SUCCESS: Expect add items to a Cart', async () => {
        sinon.stub(axios, 'post').resolves(vtexResponse);

        const response = await service.addCartItems(orderFormId, orderItemsParsed);

        expect(response).to.be.eqls(vtexResponse.data);
    });

    it('6) ERROR: Expect not to add items to a Cart', async () => {
        sinon.stub(axios, 'post').resolves(vtexResponseError);

        let response;

        try {
            response = await service.addCartItems(orderFormId, orderItemsParsed);
        } catch (error) {
            response = error;
        }

        expect(response).to.throw;
    });
});