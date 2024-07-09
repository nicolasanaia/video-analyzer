import sinon from "sinon";
import { expect } from "chai";

import Log from "../../utils/log";

import { orderFormClientProfileData, orderFormComments, orderFormCommercialConditionData, orderFormCustomData, orderFormGiftRegistryData, orderFormHooksData, orderFormItems, orderFormLocale, orderFormMarketingData, orderFormMessages, orderFormOpenTextField, orderFormPaymentData, orderFormRatesAndBenefitsData, orderFormSellers, orderFormShippingData, orderFormShippingDataV2, orderFormSort, orderFormStoreConfigurationData, orderFormStorePreferencesData, orderFormStub, orderFormTotalizers } from "./data/orderForm";
import { OrderForm } from "../../models/orderForm";

describe('Test Suite - OrderForm Model', () => {
    beforeEach(async () => {
        sinon.stub(Log.prototype, 'error').resolves();
        sinon.stub(Log.prototype, 'info').resolves();
        sinon.stub(Log.prototype, 'warn').resolves();
    });
    afterEach(async () => {
        sinon.restore();
    });

    it('1) SUCCESS: Expect to parse OrderForm correctly', async () => {
        
        const response = new OrderForm(
            orderFormLocale,
            orderFormClientProfileData,
            orderFormCommercialConditionData,
            orderFormCustomData,
            orderFormGiftRegistryData,
            orderFormHooksData,
            orderFormItems,
            orderFormShippingData,
            orderFormSort,
            orderFormMarketingData,
            orderFormMessages,
            orderFormComments,
            orderFormPaymentData,
            orderFormRatesAndBenefitsData,
            orderFormOpenTextField,
            orderFormSellers,
            orderFormShippingDataV2,
            orderFormStoreConfigurationData,
            orderFormStorePreferencesData,
            orderFormTotalizers
        );

        expect(response).to.be.eqls(orderFormStub);
    });
});