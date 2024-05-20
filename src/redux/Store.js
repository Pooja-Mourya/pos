import { configureStore } from '@reduxjs/toolkit'
import userReducer from './UserSlice'
import productReducer from './ProductSlice'

export const Store = configureStore({
  reducer: {
    user: userReducer,
    product : productReducer
  },
})