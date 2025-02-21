import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../ProductSlice'

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
})