import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT } from "../types/AuthTypes";
import axios from 'axios';
import Cookies from 'js-cookie';

export const login = (userData) => async (dispatch) => {
  try {
    // Giriş işlemi burada yapılır (örneğin, bir API isteği)
    const response = await axios.post('https://localhost:7061/api/Auth/Login', userData);

    // Giriş başarılıysa kullanıcı verilerini Redux'a ve cookie'ye kaydet
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    Cookies.set('user', JSON.stringify(response.data), { expires: new Date(response.data.token_end_date) });

  } catch (error) {
    console.error('Login error:', error);
    dispatch({ type: LOGIN_ERROR, payload: error.message });
  }
};

export const logout = () => (dispatch) => {
  // Çıkış işlemi
  dispatch({ type: LOGOUT });
  Cookies.remove('user');
};
