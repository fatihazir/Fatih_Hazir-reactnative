// These interfaces could have been filed separately but 
// I would like to show all of them in same file for this demo.
// Easier to have a look at them

interface BaseRequestModel {
    url: string,
    successFunction: Function,
    errorFunction: Function,
    exceptionFunction: (e: any) => void
}

export interface GetRequestModel extends BaseRequestModel { }

export interface PostRequestModel extends BaseRequestModel {
    body: object,
}

//////////////////////////////////////////////////////////////////

interface BaseResponseModel {
    message: string
}

export interface CategoriesResponseModel extends BaseResponseModel {
    categories: Array<CategoryModel>
}

export interface ProductsResponseModelPost extends BaseResponseModel {
}

export interface ProductsResponseModelGet extends BaseResponseModel {
    products: Array<ProductModel>
}

export interface ErrorResponseModel extends BaseResponseModel { }

export interface ExceptionResponseModel {
    err: string
}

//////////////////////////////////////////////////////////////////

export interface CategoryModel {
    _id: string,
    name: string
}

export interface ProductModel {
    _id: string,
    name: string,
    avatar: string,
    price: number,
    description: string,
    category: string
}

/////////////////////////////////////////////////////////////////

export interface RenderItemModel {
    index: number,
    item: any
}

/////////////////////////////////////////////////////////////////

export interface SharedContextModel {
    showAddProductButton: boolean;
    setShowAddProductButton: (arg: boolean) => Function;
    showOverlay: boolean;
    setShowOverlay: (arg: boolean) => Function;
    showGlobalLoading: boolean;
    setShowGlobalLoading: (arg: boolean) => Function;
    forceProductsToRefresh: boolean;
    setForceProductsToRefresh: (arg: boolean) => Function;
    selectedCategory: string;
    setselectedCategory: (arg: string) => Function;
}



