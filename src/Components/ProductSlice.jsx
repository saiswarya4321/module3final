import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [],
  },
  reducers: {
    removeCart: (state) => {
      
      state.value = [];
    },
    
    addToCart: (state, action) => {
      state.value = [...state.value,action.payload]
    },
  },
})

// Action creators are generated for each case reducer function
export const { removeCart, addToCart } = cartSlice.actions

export default cartSlice.reducer