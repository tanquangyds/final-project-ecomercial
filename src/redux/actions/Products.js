import * as types from './Constants';

export function getProducts() {
    return {
        type: types.GET_PRODUCTS_REQUEST,
    }
    
}

export function getProduct(id) {
  return {
  type: types.GET_PRODUCT_REQUEST,
  payload: id
}}