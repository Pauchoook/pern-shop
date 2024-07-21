import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PaginationState} from "../../../utils/types";

const initialState: PaginationState = {
  limit: 3,
  page: 0,
  totalCount: 0
}

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setLimit(state, action: PayloadAction<number>) {
      state.limit = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setTotalCount(state, action: PayloadAction<number>) {
      state.totalCount = action.payload;
    }
  },
});

export default paginationSlice.reducer