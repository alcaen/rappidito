import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './slices/basketSlice';
import restaurReducer from './slices/restaurantSlice';

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurReducer,
  },
});
