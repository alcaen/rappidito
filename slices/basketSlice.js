import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    items: [],
  },
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const id = state.items.findIndex(
        (element) => element.id === action.payload.id
      );
      const newItems = [...state.items];
      if (id >= 0) newItems.splice(id, 1);
      state.items = newItems;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = (state) => state.basket.items;

export const selectSigleItem = (state, id) =>
  state.basket.items.filter((item) => item.id === id);

export const selectBasketTotal = (state) =>
  state.basket.items.reduce((tot, item) => (tot += item.price), 0);

export default basketSlice.reducer;
