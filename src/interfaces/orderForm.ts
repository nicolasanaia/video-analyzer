export type IClientPreferencesData = {
    locale: string;
    optinNewsLetter: boolean;
};

export type IClientProfileData = {
    email: string;
    firstName: string;
    lastName: string;
    document: string;
    documentType: string;
    phone: string;
    corporateName: null | string;
    tradeName: null | string;
    corporateDocument: null | string;
    stateInscription: null | string;
    corporatePhone: null | string;
    isCorporate: boolean;
};

export type ICommercialConditionData = any;

type ICustomAppsField = {
    number?: string;
    street?: string;
    complement?: string;
    name?: string;
    neighborhood?: string;
    city?: string;
    state?: string;
    deliveryEstimate?: string;
};

type ICustomApps = {
    fields: ICustomAppsField;
    id: string;
    major: number;
};

export type ICustomData = {
    attachmentId: string;
    customApps: ICustomApps[];
};

export type IGiftRegistryData = {
    giftRegistryId: string;
    giftRegistryType: null | string;
    giftRegistryTypeName: null | string;
    addressId: null | string;
    description: string;
};

export type IHooksData = any;

type IAdditionalInfo = {
    dimension: null;
    brandName: string;
    brandId: string;
    offeringInfo: null;
    offeringType: null;
    offeringTypeId: null;
};

type IProductCategories = {
    [categoryId: string]: string;
};

type IPriceTags = {
    name: string;
    value: number;
    rawValue: number;
    isPercentual: boolean;
    identifier: string | null;
};

type IPriceDefinitionSellingPrice = {
    quantity: number;
    value: number;
};

type IPriceDefinition = {
    sellingPrice: IPriceDefinitionSellingPrice[];
    total: number;
    calculatedSellingPrice?: number;
};

type IProduct = {
    uniqueId: string;
    id: string;
    productId: string;
    productRefId: string;
    refId: string | null;
    ean: string;
    name: string;
    skuName: string;
    modalType: string | null;
    parentItemIndex: number | null;
    parentAssemblyBinding: string | null;
    priceValidUntil: string;
    tax: number;
    taxCode: string;
    price: number;
    listPrice: number;
    manualPrice: number;
    manualPriceAppliedBy: string;
    sellingPrice: number;
    rewardValue: number;
    isGift: boolean;
    additionalInfo: IAdditionalInfo;
    preSaleDate: null;
    productCategoryIds: string;
    productCategories: IProductCategories;
    quantity: number;
    seller: string;
    sellerChain: string[];
    imageUrl: string;
    detailUrl: string;
    bundleItems: any[];
    attachments: any[];
    attachmentOfferings: any[];
    offerings: any[];
    priceTags: IPriceTags[];
    availability: string;
    measurementUnit: string;
    unitMultiplier: number;
    manufacturerCode: string | null;
    priceDefinition: IPriceDefinition;
};

export type IItems = {
    items: IProduct[] | [];
};

type IInvoiceDataAddress = {
    postalCode: string;
    city: string;
    state: string;
    country: string;
    street: string;
    number: string;
    neighborhood: string;
    complement: string;
    reference: string | null;
  };

export type IInvoiceData = {
    address: IInvoiceDataAddress;
    settleInvoices: any[];
};

export type IItemsOrdination = {
    criteria: string;
    ascending: boolean;
};

export type IMarketingData = {
    attachmentId: string;
    coupon: null | string;
    marketingTags: string[];
    utmCampaign: string;
    utmMedium: null | string;
    utmSource: string;
    utmiCampaign: string;
    utmiPart: string;
    utmipage: string;
};

export type IMessages = {
    code: null | number;
    status: string;
    text: string;
}[];

export type IOpenTextField = {
    value: string;
};

type IPaymentDataGiftCard = {
    redemptionCode: string;
    value: number;
    balance: number;
    name: string | null;
    id: string;
    inUse: boolean;
    isSpecialCard: boolean;
};
  
type IPaymentDataAccount = {
    accountId: string;
    paymentSystem: string;
    paymentSystemName: string;
    cardNumber: string;
    availableAddresses: string[];
};
  
type IPaymentDataInstallment = {
    count: number;
    hasInterestRate: boolean;
    interestRate: number;
    value: number;
    total: number;
};
  
type IPaymentDataInstallmentOption = {
    paymentSystem: string;
    value: number;
    installments: IPaymentDataInstallment[];
};
  
type IPaymentSystem = {
    id: number;
    name: string;
    groupName: string;
    validator: {
        regex: string;
        mask: string;
        cardCodeRegex: string;
        cardCodeMask: string;
        weights: number[];
    };
    stringId: string | null;
    template: string;
    requiresDocument: boolean;
    selected: boolean;
    isCustom: boolean;
    description: string | null;
};
  
type IPayment = {
    accountId: string | null;
    bin: string | null;
    installments: number;
    paymentSystem: string;
    referenceValue: number;
    value: number;
};

export type IPaymentData = {
    giftCards: IPaymentDataGiftCard[];
    giftCardMessages: any[];
    availableAccounts: IPaymentDataAccount[];
    availableTokens: any[];
    installmentOptions: IPaymentDataInstallmentOption[];
    paymentSystems: IPaymentSystem[];
    payments: IPayment[];
};

type IRateAndBenefitsItem = {
    items: Record<string, unknown>;
  };
  
  type ITeaserItem = {
    items: Record<string, unknown>;
  };

export type IRatesAndBenefitsData = {
    rateAndBenefitsIdentifiers: IRateAndBenefitsItem[];
    teaser: ITeaserItem[];
};

type IAvailableGift = {
    isSelected: boolean;
};

export type ISelectableGifts = {
    id: null;
    availableQuantity: string;
    availableGifts: {
      items: (Record<string, unknown> | IAvailableGift)[];
    };
}[];

export type ISellers = {
    id: string;
    name: string;
    logo: string;
};

type IDeliveryWindow = {
    startDateUtc: string;
    endDateUtc: string;
    listprice: number;
    tax: number;
};
    
type IDeliveryId = {
    courierId: string;
    warehouseId: string;
    dockId: string;
    courierName: string;
    quantity: number;
};
  
type IShippingDataSLA = {
    id: string;
    deliveryChannel: string;
    name: string;
    deliveryIds: IDeliveryId[];
    shippingEstimate: string;
    shippingEstimateDate: string | null;
    lockTTL: string | null;
    availableDeliveryWindows: IDeliveryWindow[];
    deliveryWindow: IDeliveryWindow[] | null;
    price: number;
    tax: number;
    pickupStoreInfo: {
        isPickupStore: boolean;
        friendlyName: string | null;
        address: string | null;
        additionalInfo: string | null;
        dockId: string | null;
    };
    pickupPointId: string | null;
    pickupDistance: number;
    polygonName: string | null;
    transitTime: string;
};
  
type IShippingDataLogisticsInfo = {
    itemIndex: number;
    selectedSla: string;
    selectedDeliveryChannel: string;
    addressId: string;
    slas: IShippingDataSLA[];
};
  
type IShippingDataAddress = {
    addressType: string;
    receiverName: string;
    addressId: string;
    postalCode: string;
    city: string;
    state: string;
    country: string;
    street: string;
    number: string;
    neighborhood: string;
    complement: string;
    reference: string | null;
};

export type IShippingData = {
    attachmentId: string;
    address: IShippingDataAddress;
    availableAddresses: IShippingDataAddress[];
    logisticsInfo: IShippingDataLogisticsInfo[];
    selectedAddresses: string[];
};

export type IStoreId = {
    storeId: string;
};

type ICurrencyFormatInfo = {
    currencyDecimalDigits: number;
    currencyDecimalSeparator: string;
    currencyGroupSeparator: string;
    currencyGroupSize: number;
    startsWithCurrencySymbol: boolean;
};

type IStorePreferencesDataTemplateOptions = {
    toggleCorporate: boolean;
};

export type IStorePreferencesData = {
    countryCode: string;
    saveUserData: boolean;
    templateOptions: IStorePreferencesDataTemplateOptions;
    timeZone: string;
    currencyCode: string;
    currencyLocale: number;
    currencySymbol: string;
    currencyFormatInfo: ICurrencyFormatInfo;
};

export type ITotalizers = {
    id: string;
    name: string;
    value: number;
}[];

export type IOrderForm = {
    orderFormId?: string;
    salesChannel?: string;
    loggedIn?: boolean;
    isCheckedIn?: boolean;
    checkedInPickupPointId?: string | null;
    allowManualPrice?: boolean;
    canEditData?: boolean;
    userProfileId?: string | null;
    userType?: string | null;
    ignoreProfileData?: boolean;
    value?: number;
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
};