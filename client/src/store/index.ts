import userReducer from './reducers/user/UserSlice';
import deviceReducer from './reducers/device/DeviceSlice';
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    user: userReducer,
    device: deviceReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;