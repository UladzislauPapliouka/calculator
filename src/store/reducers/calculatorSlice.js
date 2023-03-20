import { createSlice } from '@reduxjs/toolkit';
import { EnterSymbol } from '@utils/utilities';

const initialState = {
  expression: '',
  history: [],
};

const calculatorSlice = createSlice({
  name: 'display',
  initialState,
  reducers: {
    enterSymbol: (state, action) => {
      EnterSymbol(state, action.payload.symbol);
    },
    clearHistory: (state) => {
      state.history = [];
    },
  },
});

export default calculatorSlice.reducer;
export const { enterSymbol, clearHistory } = calculatorSlice.actions;
