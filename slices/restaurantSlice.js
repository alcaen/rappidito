import { createSlice } from '@reduxjs/toolkit';

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: {
    restaurant: {
      id: null,
      url: null,
      name: null,
      score: null,
      category: null,
      location: null,
      description: null,
      dishes: null,
      long: null,
      lat: null,
    },
  },
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

export const { setRestaurant } = restaurantSlice.actions;

export const selectRestaurant = (state) => state.restaurant.restaurant;

export default restaurantSlice.reducer;
