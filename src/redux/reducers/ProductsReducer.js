import * as types from '../actions/Constants'
const initState = {
    products: [],
    product: {},
    loading: false,
    error: null,
    totalCount: 0,
}

function ProductsReducer(state = initState, action) {
    switch (action.type) {
        case types.GET_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case types.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.products.data,
                totalCount: action.products.count
            }
        case types.GET_PRODUCTS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message
            }
        case types.GET_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case types.GET_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                product: action.product,
            }
        case types.GET_PRODUCT_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message
            }
        default:
            return state
    }
}

export default ProductsReducer;