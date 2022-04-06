

export interface ProductInterface {
    id: number;
    title: string;
    slug: string;
    link: any;
    moreInfo: string;
    description: string;
    taxable: boolean;
    taxableAmount: number;
    decimal: boolean;
    hasOffer: boolean;
    categoryId: number;
    categoryTitle: string;
    categorySlug: string;
    categoryIcon: string;
    categoryBackgroundImage: string;
    unitPrice: [
        {
            id: number;
            title: string;
            sellingPrice: number;
            markedPrice: number;
            newPrice: number;
            oldPrice: number;
            size: any;
            sku: string;
            description: any;
            barcode: any;
            stock: number;
            hasOffer: boolean;
            alwaysAvailable: boolean;
        },
    ];
    images: [
        {
            id: number;
            imageName: string;
            unit_price_id: any;
        },
    ];
    warehouses: [
        {
            id: number;
            title: string;
        },
    ];
    tags: [];
    brand: null;
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

interface Error {
    title: string;
    message: string;
}

export interface ErrorResponse {
    data: {
        meta: {
            version: string;
            error_type: string;
        };
        errors: Error[];
        code: number;
    };
}