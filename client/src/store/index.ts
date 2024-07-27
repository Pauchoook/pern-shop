import userReducer from './reducers/user/UserSlice';
import filterReducer from './reducers/filter/FilterSlice';
import {configureStore} from "@reduxjs/toolkit";
import {DeviceApi} from "./services/DeviceService";

const store = configureStore({
  reducer: {
    user: userReducer,
    filter: filterReducer,
    [DeviceApi.reducerPath]: DeviceApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([DeviceApi.middleware])
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;