import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FilterState} from "../../../utils/types";

const initialState: FilterState = {
  limit: 2,
  page: 1,
  brandId: null,
  typeId: null
}

export const filterSlice = createSlice({
  name: 'devices',
  initialState,
  reducers: {
    setLimit(state, action: PayloadAction<number>) {
      state.limit = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setBrand(state, action: PayloadAction<number | null>) {
      state.brandId = action.payload;
    },
    setType(state, action: PayloadAction<number | null>) {
      state.typeId = action.payload;
    }
  },
});

export const { setLimit, setPage, setType, setBrand } = filterSlice.actions

export default filterSlice.reducer