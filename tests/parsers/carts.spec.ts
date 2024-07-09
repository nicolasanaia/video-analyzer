import sinon from "sinon";
import { expect } from "chai";

import Log from "../../utils/log";
import CartsParser from "../../parsers/carts";
import { emptyParserResponse, orderFormStub, orderFormStubWithoutItems, orderFormStubWithoutItemsArray, parserResponse } from "./data/carts";

const service = new CartsParser();

describe('Test Suite - Carts Parser', () => {
    beforeEach(async () => {
        sinon.stub(Log.prototype, 'error').resolves();
        sinon.stub(Log.prototype, 'info').resolves();
        sinon.stub(Log.prototype, 'warn').resolves();
    });
    afterEach(async () => {
        sinon.restore();
    });

    it('1) SUCCESS: Expect to parse an OrderForm To Generate New OrderForm', async () => {
        const response = await service.parseOrderFormItemsToNewOrderForm(orderFormStub);

        expect(response).to.be.eqls(parserResponse);
    });

    it('2) SUCCESS: Expect to parse an OrderForm To Generate New OrderForm Without Items', async () => {
        const response = await service.parseOrderFormItemsToNewOrderForm(orderFormStubWithoutItems);

        expect(response).to.be.eqls(emptyParserResponse);
    });

    it('2) SUCCESS: Expect to parse an OrderForm To Generate New OrderForm Without Items Array', async () => {
        const response = await service.parseOrderFormItemsToNewOrderForm(orderFormStubWithoutItemsArray);

        expect(response).to.be.eqls(emptyParserResponse);
    });
});