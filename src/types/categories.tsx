

export interface CategoryInterface {
    id: number;
    avgRating: number;
    backgroundImage: string;
    title: string;
    banner: [];
    description: string | null;
    hasProduct: boolean;
    hierarchy_Level:number;
    icon: string;
    isRestaurant:false;
    isRestaurantOpen:false;
    parentId: null | any;
    position: number;
    productCount: number;
    ratingCount: number;
    slug: string;
    subcategories: SubCategoriesInterface[];
    userRating:any|null;
}

export interface SubCategoriesInterface {
    id: number;
    avgRating: number;
    backgroundImage: string;
    banner: [];
    description: string | null;
    hasProduct: boolean;
    hierarchy_level:number;
    parentId: number | null;
    icon: string;
    isRestaurant:boolean;
    isRestaurantOpen:boolean;
    position: number;
    title: string;
    products:[];
    slug: string;
    ratingCount: number;
    productCount: number;
    userRating: null | number;
    subcategories: [];
}

export interface CategoryResponse {
    meta: MetaLong;
    data: CategoryInterface[];
    code: number;
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