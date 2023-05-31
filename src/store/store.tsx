import { configureStore } from '@reduxjs/toolkit'
import cartReducers from "./cartProvider"
import authProvider from './authProvider'
export const store = configureStore({
  reducer: {
    cart: cartReducers,
    auth: authProvider
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch