import {ProductInterface} from './products'

export interface GetCartData {
    id: number;
    cartNumber: string;
    categoryId: null;
    warehouseId: number;
    orderAmount: number;
    discount: number;
    scheme: number;
    subTotal: number;
    deliveryCharge: number;
    extra: any;
    message: string;
    campaign_message: string;
    total: number;
    pickupTotal: number;
    cartProducts: [
        {
            id: number;
            price: number;
            quantity: number;
            selectedUnit: {
                id: number;
                title: string;
                sellingPrice: number;
                markedPrice: number;
                newPrice: number;
                oldPrice: number;
                size: string;
                sku: string;
                barcode: string;
                stock: number;
                hasOffer: boolean;
                alwaysAvailable: boolean;
            };
            note: string;
            product: ProductInterface;
        },
    ];
}




export interface MetaLong {
    copyright: string;
    emails: string;
    api: {
        version: string;
    };
    category: any;
    tag: any;
    pagination: {
        total: number;
        count: number;
        per_page: number;
        current_page: number;
        total_pages: number;
        links: [];
    };
}

export interface Meta{
    copyright: string;
    emails: string;
    api: {
        version: string;
    };
}