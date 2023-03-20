import { configureStore } from '@reduxjs/toolkit';

import calculatorReducer from './reducers/calculatorSlice';

const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
});
export default store;
