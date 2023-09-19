import axios from 'axios';
import { Dispatch } from 'redux';
import { API_URL } from '../config/userConfig';
import { ProductData } from '../interfaces/interface';

export const addProduct = (productData: ProductData) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post<ProductData>(`${API_URL}/product`, productData);

      dispatch({ type: 'ADD_PRODUCT_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'ADD_PRODUCT_ERROR', error });
    }
  };
};

export const addCart = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post<ProductData>(`${API_URL}/addcart/${id}`);
      
      dispatch({ type: 'ADD_CART_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'ADD_CART_ERROR', error });
    }
  };
};