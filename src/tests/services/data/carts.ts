export const createNewCartResponse = {
    error: false,
    message: 'Carrinho gerado com sucesso',
    orderFormId: 'id'
};

export const orderFormId = 'id';

export const cart = {
    id: 1,
    orderFormId: 'id',
    creationDate: new Date('2023-12-08T16:51:33.000Z'),
    expirationDate: new Date('2040-12-09T16:51:33.000Z')
};

export const cartExpired = {
    id: 1,
    orderFormId: 'id',
    creationDate: new Date('2023-12-08T16:51:33.000Z'),
    expirationDate: new Date('2010-12-09T16:51:33.000Z')
};

export const parserResponse = {
    orderItems: [{
        quantity: 1,
        seller: 'todovino',
        id: 'id1',
        index: 0,
        price: 10
    }]
};

export const emptyParserResponse = {
    orderItems: []
};