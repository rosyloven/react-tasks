import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeTab: '',
}

export const tabBarSlice = createSlice({
  name: 'tabBar',
  initialState,
  reducers: {
    setActiveTabReducer: (state, action) => {
      state.activeTab = action.payload
    },
  },
})

export const { setActiveTabReducer } = tabBarSlice.actions
export default tabBarSlice.reducer
