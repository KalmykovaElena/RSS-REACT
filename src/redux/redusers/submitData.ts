import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { SubmitFormItem } from '../../components/types';

const initialState: {
  submitData: SubmitFormItem[];
} = {
  submitData: [],
};

export const submitData = createSlice({
  name: 'submitData',
  initialState,
  reducers: {
    setSubmitData(state, action: PayloadAction<SubmitFormItem>): void {
      state.submitData = [...state.submitData, action.payload];
    },
  },
});

export const { setSubmitData } = submitData.actions;

export default submitData.reducer;
