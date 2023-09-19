import axios from 'axios';
import { Dispatch } from 'redux';
import { API_URL } from '../config/userConfig';
import { UserData } from '../interfaces/interface';

export const login = (credentials: { email: string; password: string }) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post<UserData>(`${API_URL}/login`, credentials);

      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'LOGIN_ERROR', error });
    }
  };
};

export const register = (userData: UserData) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post<UserData>(`${API_URL}/register`, userData);

      dispatch({ type: 'REGISTER_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'REGISTER_ERROR', error });
    }
  };
};