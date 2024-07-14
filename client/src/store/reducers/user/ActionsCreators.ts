import {createAsyncThunk} from "@reduxjs/toolkit";
import {IUser} from "../../../utils/types";
import axios from "axios";
import {jwtDecode} from "jwt-decode";

interface IResponseAuth {
  token: string;
}

export const registration = createAsyncThunk("user/registration", async (user: IUser, thunkAPI) => {
  try {
    const {data} = await axios.post<IResponseAuth>(`${process.env.REACT_APP_API_URL}/api/user/registration`, user);
    const resUser = jwtDecode(data.token);
    return resUser;
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.response.data.message);
  }
})

export const login = createAsyncThunk("user/login", async (user: IUser, thunkAPI) => {
  try {
    const response = await axios.post<IResponseAuth>(`${process.env.REACT_APP_API_URL}/api/user/login`, user);
    console.log(response)
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.response.data.message);
  }
})