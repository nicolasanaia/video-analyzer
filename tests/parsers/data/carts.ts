import { IOrderForm } from "../../../interfaces/orderForm";

export const parserResponse = {
    orderItems: [{
        quantity: 2,
        seller: 'todovino',
        id: 'product1',
        index: 0,
        price: 1999
    }]
};

export const emptyParserResponse = {
    orderItems: []
};

export const items = {
    items: [{
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
        seller: "todovino",
        sellerChain: ["sellerXYZ"],
        imageUrl: "http://example.com/product1.jpg",
        detailUrl: "/product1",
        bundleItems: [],
        attachments: [],
        attachmentOfferings: [],
        offerings: [],
        priceTags: [{
            name: "DISCOUNT@MANUALPRICE",
            value: -100,
            rawValue: -1.0,
            isPercentual: false,
            identifier: null,
        }],
        availability: "available",
        measurementUnit: "unit",
        unitMultiplier: 1.0,
        manufacturerCode: null,
        priceDefinition: {
            sellingPrice: [{
                quantity: 1,
                value: 1899,
            }],
            total: 3798,
        },
    }],
};

export const orderFormStub: IOrderForm = {
    orderFormId: 'id',
    items
};

export const orderFormStubWithoutItems: IOrderForm = {
    orderFormId: 'id',
    items: {
        items: []
    },
};

export const orderFormStubWithoutItemsArray: IOrderForm = {
    orderFormId: 'id'
};
