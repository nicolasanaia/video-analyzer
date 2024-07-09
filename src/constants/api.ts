import { AxiosRequestConfig } from "axios";
import { SALESCHANNEL, VTEX_ACCOUNT, VTEX_APPKEY, VTEX_APPTOKEN, VTEX_ENVIRONMENT } from "../config";

const VTEX_BASE_URL = `https://${VTEX_ACCOUNT}.${VTEX_ENVIRONMENT}.com.br`;

export const VTEX_ENDPOINTS = {
    GET_CURRENT_OR_FORCE_NEW_CART: `/api/checkout/pub/orderForm?forceNewCart=true&sc=${SALESCHANNEL}`,
    GET_CART_BY_ORDER_FORM_ID: async (orderFormId: string, refreshOutdatedData?: boolean) => {
        return `/api/checkout/pub/orderForm/${orderFormId}${refreshOutdatedData ? `?refreshOutdatedData=${refreshOutdatedData}` : ''}`
    },
    ADD_CART_ITEMS: async (orderFormId: string) => {
        return `/api/checkout/pub/orderForm/${orderFormId}/items`
    }
};

export const VTEX_APIS = {
    GET_CURRENT_OR_FORCE_NEW_CART: `${VTEX_BASE_URL}${VTEX_ENDPOINTS.GET_CURRENT_OR_FORCE_NEW_CART}`,
    GET_CART_BY_ORDER_FORM_ID:  async (orderFormId: string, refreshOutdatedData?: boolean) => {
        return `${VTEX_BASE_URL}${await VTEX_ENDPOINTS.GET_CART_BY_ORDER_FORM_ID(orderFormId, refreshOutdatedData)}`
    },
    ADD_CART_ITEMS: async (orderFormId: string) => {
        return `${VTEX_BASE_URL}${await VTEX_ENDPOINTS.ADD_CART_ITEMS(orderFormId)}`
    }
};

export const VTEX_API_HEADERS: AxiosRequestConfig = {
    headers: {
        'X-VTEX-API-AppKey': VTEX_APPKEY,
        'X-VTEX-API-AppToken':
            VTEX_APPTOKEN,
        'Content-Type': 'application/json',
    }
};