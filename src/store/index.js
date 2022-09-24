import { configureStore } from '@reduxjs/toolkit'
import { tabBarSlice } from './modules/tabBarSlice'

const store = configureStore({
  reducer: {
    tabBar: tabBarSlice,
  },
})

export default store
