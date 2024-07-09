import { 
    IClientPreferencesData,
    IClientProfileData,
    ICommercialConditionData,
    ICustomData,
    IGiftRegistryData,
    IHooksData,
    IInvoiceData,
    IItems,
    IItemsOrdination,
    IMarketingData,
    IMessages,
    IOpenTextField,
    IOrderForm,
    IPaymentData,
    IRatesAndBenefitsData,
    ISelectableGifts,
    ISellers,
    IShippingData,
    IStoreId,
    IStorePreferencesData,
    ITotalizers
} from "../interfaces/orderForm";

export class OrderForm implements IOrderForm {
    clientPreferencesData?: IClientPreferencesData;
    clientProfileData?: IClientProfileData;
    commercialConditionData?: ICommercialConditionData;
    customData?: ICustomData;
    giftRegistryData?: IGiftRegistryData;
    hooksData?: IHooksData;
    items?: IItems;
    invoiceData?: IInvoiceData;
    itemsOrdination?: IItemsOrdination;
    marketingData?: IMarketingData;
    messages?: IMessages;
    openTextField?: IOpenTextField;
    paymentData?: IPaymentData;
    ratesAndBenefitsData?: IRatesAndBenefitsData;
    selectableGifts?: ISelectableGifts;
    sellers?: ISellers;
    shippingData?: IShippingData;
    storeId?: IStoreId;
    storePreferencesData?: IStorePreferencesData;
    totalizers?: ITotalizers;

    constructor(
        clientPreferencesData?: IClientPreferencesData,
        clientProfileData?: IClientProfileData,
        commercialConditionData?: ICommercialConditionData,
        customData?: ICustomData,
        giftRegistryData?: IGiftRegistryData,
        hooksData?: IHooksData,
        items?: IItems,
        invoiceData?: IInvoiceData,
        itemsOrdination?: IItemsOrdination,
        marketingData?: IMarketingData,
        messages?: IMessages,
        openTextField?: IOpenTextField,
        paymentData?: IPaymentData,
        ratesAndBenefitsData?: IRatesAndBenefitsData,
        selectableGifts?: ISelectableGifts,
        sellers?: ISellers,
        shippingData?: IShippingData,
        storeId?: IStoreId,
        storePreferencesData?: IStorePreferencesData,
        totalizers?: ITotalizers,
    ) {
        this.clientPreferencesData = clientPreferencesData;
        this.clientProfileData = clientProfileData;
        this.commercialConditionData = commercialConditionData;
        this.customData = customData;
        this.giftRegistryData = giftRegistryData;
        this.hooksData = hooksData;
        this.items = items;
        this.invoiceData = invoiceData;
        this.itemsOrdination = itemsOrdination;
        this.marketingData = marketingData;
        this.messages = messages;
        this.openTextField = openTextField;
        this.paymentData = paymentData;
        this.ratesAndBenefitsData = ratesAndBenefitsData;
        this.selectableGifts = selectableGifts;
        this.sellers = sellers;
        this.shippingData = shippingData;
        this.storeId = storeId;
        this.storePreferencesData = storePreferencesData;
        this.totalizers = totalizers;
    }
}