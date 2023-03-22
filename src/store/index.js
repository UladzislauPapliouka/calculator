import { persistStore } from 'redux-persist';

import { configureStore } from '@reduxjs/toolkit';

import calculatorReducer from './reducers/calculatorSlice';
import themeReducer from './reducers/themeSlice';

const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
    theme: themeReducer,
  },
});

export const persistor = persistStore(store);
export default store;
