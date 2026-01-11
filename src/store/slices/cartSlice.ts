import { createSlice } from '@reduxjs/toolkit';

interface CartState {
  foodCart: string[];
  marketCart: string[];
}

const initialState: CartState = {
  foodCart: [],
  marketCart: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addFoodItem: (state, action) => {
      state.foodCart.push(action.payload);
    },
    addMarketItem: (state, action) => {
      state.marketCart.push(action.payload);
    },
    clearCarts: (state) => {
      state.foodCart = [];
      state.marketCart = [];
    }
  }
});

export const { addFoodItem, addMarketItem, clearCarts } = cartSlice.actions;
export default cartSlice.reducer;
