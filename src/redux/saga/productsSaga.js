import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../actions/Constants";
import axios from "axios";

const apiUrl = "http://localhost:3001/products";

function getProducts() {
  return axios
    .get(apiUrl)
    .then((response) => {
      return {
        count: parseInt(response.headers["x-total-count"]),
        data: response.data,
      };
    })
    .catch((e) => {
      throw e;
    });
}
function getProduct(params) {
  const urlWithParams = `${apiUrl}/${params}`;
  return axios
    .get(urlWithParams)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      throw e;
    });
}

function* fetchData(action) {
  try {
    const products = yield call(getProducts);
    yield put({ type: types.GET_PRODUCTS_SUCCESS, products: products });
  } catch (e) {
    yield put({ type: types.GET_PRODUCTS_FAILED, message: e.message });
  }
}

function* fetchProduct(action) {
  try {
    const product = yield call(getProduct, action.payload);
    yield put({ type: types.GET_PRODUCT_SUCCESS, product: product });
  } catch (e) {
    yield put({ type: types.GET_PRODUCT_FAILED, message: e.message });
  }
}

function* productsSaga() {
  yield takeLatest(types.GET_PRODUCTS_REQUEST, fetchData);
  yield takeLatest(types.GET_PRODUCT_REQUEST, fetchProduct);
}

export default productsSaga;
