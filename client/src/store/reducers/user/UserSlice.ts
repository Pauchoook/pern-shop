import {IUser, UserState} from "../../../utils/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {check, registration} from "./ActionsCreators";

const initialState: UserState = {
  isAuth: false,
  user: null,
  error: ""
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registration.fulfilled.type, (state, action: PayloadAction<IUser>) => {
        state.user = action.payload;
        state.error = "";
        state.isAuth = true;
      })
      .addCase(registration.rejected.type, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
      })

      .addCase(check.fulfilled.type, (state, action: PayloadAction<IUser>) => {
        state.user = action.payload;
        state.error = "";
        state.isAuth = true;
      })
  }
})

// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default userSlice.reducer