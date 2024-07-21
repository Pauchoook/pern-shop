import userReducer from './reducers/user/UserSlice';
import paginationReducer from './reducers/pagination/PaginationSlice';
import {configureStore} from "@reduxjs/toolkit";
import {DeviceApi} from "./services/DeviceService";

const store = configureStore({
  reducer: {
    user: userReducer,
    pagination: paginationReducer,
    [DeviceApi.reducerPath]: DeviceApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([DeviceApi.middleware])
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;