import { configureStore } from '@reduxjs/toolkit'
import { tabBarSlice } from './modules/tabBarSlice'

const store = configureStore({
  reducer: {
    tabBar: tabBarSlice.reducer,
  },
})

export default store
