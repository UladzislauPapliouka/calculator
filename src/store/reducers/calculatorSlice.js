import { createSlice } from '@reduxjs/toolkit';
import { EnterSymbol } from '@utils/utilities';

const initialState = {
  expression: '',
  history: [],
  isHistoryOpen: false,
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
    toggleIsHistoryOpen: (state) => {
      state.isHistoryOpen = !state.isHistoryOpen;
    },
  },
});

export default calculatorSlice.reducer;
export const { enterSymbol, clearHistory, toggleIsHistoryOpen } =
  calculatorSlice.actions;
