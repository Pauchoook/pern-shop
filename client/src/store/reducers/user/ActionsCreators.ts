import {createAsyncThunk} from "@reduxjs/toolkit";
import {IUser} from "../../../utils/types";
import axios from "axios";
import {jwtDecode} from "jwt-decode";
import {$privateAxios} from "../../../http/axios";

interface IResponseAuth {
  token: string;
}

function setCookie(name: string, value: string, options: any) {
  options = {
    path: "/",
    "max-age": 24 * 60 * 60,
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

export const registration = createAsyncThunk("user/registration", async (user: IUser, thunkAPI) => {
  try {
    const {data} = await axios.post<IResponseAuth>(`${process.env.REACT_APP_API_URL}/api/user/registration`, user);
    const resUser = jwtDecode(data.token);
    setCookie("token", data.token, {});
    return resUser;
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.response.data.message);
  }
})

export const login = createAsyncThunk("user/login", async (user: IUser, thunkAPI) => {
  try {
    const {data} = await axios.post<IResponseAuth>(`${process.env.REACT_APP_API_URL}/api/user/login`, user);
    const resUser = jwtDecode(data.token);
    setCookie("token", data.token, {});
    return resUser;
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.response.data.message);
  }
})

export const check = createAsyncThunk("user/check", async (_, thunkAPI) => {
  try {
    const {data} = await $privateAxios.get<IResponseAuth>(`${process.env.REACT_APP_API_URL}/api/user/auth`);
    const resUser = jwtDecode(data.token);
    setCookie("token", data.token, {});
    return resUser;
  } catch(e: any) {
    return thunkAPI.rejectWithValue(e.response.data.message);
  }
})