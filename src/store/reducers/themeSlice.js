import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  themeName: 'dark',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    chooseTheme: (state, action) => {
      state.themeName = action.payload.theme;
    },
  },
});

const persistConfig = {
  key: 'theme',
  storage,
};

export default persistReducer(persistConfig, themeSlice.reducer);
export const { chooseTheme } = themeSlice.actions;
