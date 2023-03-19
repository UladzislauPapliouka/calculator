import { createSlice } from '@reduxjs/toolkit';
import { EnterSymbol } from '@utils/utilities';

const initialState = {
  expression: '0',
  history: [],
};

const displaySlice = createSlice({
  name: 'display',
  initialState,
  reducers: {
    enterSymbol: (state, action) => {
      EnterSymbol(state, action.payload.payload.symbol);
    },
    clearHistory: (state) => {
      state.history = [];
    },
  },
});

export default displaySlice.reducer;
export const { enterSymbol, clearHistory } = displaySlice.actions;
