import { OrderForm } from "../../../models/orderForm";

export const orderFormLocale = {
  locale: "en_US",
  optinNewsLetter: true,
};

export const orderFormClientProfileData = {
  email: "john.doe@example.com",
  firstName: "John",
  lastName: "Doe",
  document: "123456789",
  documentType: "CPF",
  phone: "1234567890",
  corporateName: null,
  tradeName: null,
  corporateDocument: null,
  stateInscription: null,
  corporatePhone: null,
  isCorporate: false,
};

export const orderFormCommercialConditionData = {};

export const orderFormCustomData = {
  attachmentId: "customDataAttachment",
  customApps: [
    {
      fields: {
        number: "123",
        street: "Main St",
        complement: "Apt 4",
        name: "Custom App 1",
        neighborhood: "Downtown",
        city: "Cityville",
        state: "ST",
        deliveryEstimate: "2 days",
      },
      id: "customApp1",
      major: 1,
    },
  ],
};

export const orderFormGiftRegistryData = {
  giftRegistryId: "registry123",
  giftRegistryType: "birthday",
  giftRegistryTypeName: "Birthday Registry",
  addressId: "address456",
  description: "Birthday Gifts",
};

export const orderFormHooksData = {};

export const orderFormItems = {
  items: [
    {
      uniqueId: "item123",
      id: "product1",
      productId: "prod1",
      productRefId: "",
      refId: null,
      ean: "123456789",
      name: "Product 1",
      skuName: "Standard",
      modalType: null,
      parentItemIndex: null,
      parentAssemblyBinding: null,
      priceValidUntil: "2022-12-31T23:59:59Z",
      tax: 0,
      taxCode: "TAX_CODE_123",
      price: 1999,
      listPrice: 1999,
      manualPrice: 1899,
      manualPriceAppliedBy: "admin123",
      sellingPrice: 1899,
      rewardValue: 0,
      isGift: false,
      additionalInfo: {
        dimension: null,
        brandName: "BrandXYZ",
        brandId: "brand123",
        offeringInfo: null,
        offeringType: null,
        offeringTypeId: null,
      },
      preSaleDate: null,
      productCategoryIds: "/1/",
      productCategories: {
        "1": "Electronics",
      },
      quantity: 2,
      seller: "sellerXYZ",
      sellerChain: ["sellerXYZ"],
      imageUrl: "http://example.com/product1.jpg",
      detailUrl: "/product1",
      bundleItems: [],
      attachments: [],
      attachmentOfferings: [],
      offerings: [],
      priceTags: [
        {
          name: "DISCOUNT@MANUALPRICE",
          value: -100,
          rawValue: -1.0,
          isPercentual: false,
          identifier: null,
        },
      ],
      availability: "available",
      measurementUnit: "unit",
      unitMultiplier: 1.0,
      manufacturerCode: null,
      priceDefinition: {
        sellingPrice: [
          {
            quantity: 1,
            value: 1899,
          },
        ],
        total: 3798,
      },
    },
  ],
};

export const orderFormShippingData = {
  address: {
    postalCode: "12345678",
    city: "Cityville",
    state: "ST",
    country: "BRA",
    street: "Main St",
    number: "123",
    neighborhood: "Downtown",
    complement: "Apt 4",
    reference: null,
  },
  settleInvoices: [],
};

export const orderFormSort = {
  criteria: "price",
  ascending: true,
};

export const orderFormMarketingData = {
  attachmentId: "marketingDataAttachment",
  coupon: null,
  marketingTags: ["newArrival", "sale"],
  utmCampaign: "summerSale",
  utmMedium: null,
  utmSource: "email",
  utmiCampaign: "",
  utmiPart: "",
  utmipage: "",
};

export const orderFormMessages = [
  {
    code: 200,
    status: "success",
    text: "Order placed successfully",
  },
];

export const orderFormComments = {
  value: "Additional comments for the order",
};

export const orderFormPaymentData = {
  giftCards: [
    {
      redemptionCode: "GIFT-123",
      value: 50,
      balance: 50,
      name: null,
      id: "giftCard1",
      inUse: true,
      isSpecialCard: false,
    },
    {
      redemptionCode: "SPECIAL-GIFT",
      value: 0,
      balance: 100,
      name: "Special Gift Card",
      id: "specialGiftCard",
      inUse: false,
      isSpecialCard: true,
    },
  ],
  giftCardMessages: [],
  availableAccounts: [
    {
      accountId: "account1",
      paymentSystem: "creditCard",
      paymentSystemName: "MasterCard",
      cardNumber: "************1234",
      availableAddresses: ["address123", "address456"],
    },
  ],
  availableTokens: [],
  installmentOptions: [
    {
      paymentSystem: "creditCard",
      value: 1000,
      installments: [
        {
          count: 1,
          hasInterestRate: false,
          interestRate: 0,
          value: 1000,
          total: 1000,
        },
        {
          count: 2,
          hasInterestRate: false,
          interestRate: 0,
          value: 500,
          total: 1000,
        },
      ],
    },
  ],
  paymentSystems: [
    {
      id: 1,
      name: "Credit Card",
      groupName: "creditCardPaymentGroup",
      validator: {
        regex: "^5",
        mask: "9999 9999 9999 9999",
        cardCodeRegex: "[^0-9]",
        cardCodeMask: "999",
        weights: [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
      },
      stringId: null,
      template: "creditCardPaymentGroup-template",
      requiresDocument: false,
      selected: false,
      isCustom: false,
      description: null,
    },
  ],
  payments: [
    {
      accountId: null,
      bin: null,
      installments: 2,
      paymentSystem: "creditCard",
      referenceValue: 1000,
      value: 1000,
    },
  ],
};

export const orderFormRatesAndBenefitsData = {
  rateAndBenefitsIdentifiers: [
    {
      items: {},
    },
  ],
  teaser: [
    {
      items: {},
    },
  ],
};

export const orderFormOpenTextField = [];

export const orderFormSellers = {
  id: "id",
  name: "Uzi",
  logo: "logo",
};

export const orderFormShippingDataV2 = {
  attachmentId: "shippingDataAttachment",
  address: {
    addressType: "residential",
    receiverName: "John Doe",
    addressId: "address456",
    postalCode: "12345",
    city: "Cityville",
    state: "ST",
    country: "USA",
    street: "Main St",
    number: "123",
    neighborhood: "Downtown",
    complement: "Apt 4",
    reference: null,
  },
  availableAddresses: [
    {
      addressType: "residential",
      receiverName: "John Doe",
      addressId: "address456",
      postalCode: "12345",
      city: "Cityville",
      state: "ST",
      country: "USA",
      street: "Main St",
      number: "123",
      neighborhood: "Downtown",
      complement: "Apt 4",
      reference: null,
    },
  ],
  logisticsInfo: [
    {
      itemIndex: 0,
      selectedSla: "sla123",
      selectedDeliveryChannel: "standard",
      addressId: "address456",
      slas: [
        {
          id: "sla123",
          deliveryChannel: "standard",
          name: "Standard Shipping",
          deliveryIds: [
            {
              courierId: "courier123",
              warehouseId: "warehouse456",
              dockId: "dock789",
              courierName: "Express Shipping",
              quantity: 1,
            },
          ],
          shippingEstimate: "3 days",
          shippingEstimateDate: "2023-01-04T00:00:00Z",
          lockTTL: "2023-01-03T00:00:00Z",
          availableDeliveryWindows: [
            {
              startDateUtc: "2023-01-01T00:00:00Z",
              endDateUtc: "2023-01-02T00:00:00Z",
              listprice: 100,
              tax: 10,
            },
          ],
          deliveryWindow: [
            {
              startDateUtc: "2023-01-01T00:00:00Z",
              endDateUtc: "2023-01-02T00:00:00Z",
              listprice: 100,
              tax: 10,
            },
          ],
          price: 120,
          tax: 15,
          pickupStoreInfo: {
            isPickupStore: false,
            friendlyName: null,
            address: null,
            additionalInfo: null,
            dockId: null,
          },
          pickupPointId: null,
          pickupDistance: 0,
          polygonName: null,
          transitTime: "3 days",
        },
      ],
    },
  ],
  selectedAddresses: ["address456"],
};

export const orderFormStoreConfigurationData = {
  storeId: "yourStoreIdHere",
};

export const orderFormStorePreferencesData = {
  countryCode: "BRA",
  saveUserData: true,
  templateOptions: {
    toggleCorporate: false,
  },
  timeZone: "E. South America Standard Time",
  currencyCode: "BRL",
  currencyLocale: 0,
  currencySymbol: "R$",
  currencyFormatInfo: {
    currencyDecimalDigits: 2,
    currencyDecimalSeparator: ",",
    currencyGroupSeparator: ".",
    currencyGroupSize: 3,
    startsWithCurrencySymbol: true,
  },
};

export const orderFormTotalizers = [
  {
    id: "yourTotalizerIdHere",
    name: "yourTotalizerNameHere",
    value: 123,
  },
];

export const orderFormStub = new OrderForm(
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
