import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: {
  searchValue: string;
  pagesCount: number;
  page: number;
  error: null | string;
} = {
  searchValue: '',
  pagesCount: 1,
  page: 1,
  error: null,
};

export const data = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>): void {
      state.searchValue = action.payload;
    },
    setPagesCount(state, action: PayloadAction<number>) {
      state.pagesCount = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const { setSearchValue, setPagesCount, setPage, setError } =
  data.actions;

export default data.reducer;
