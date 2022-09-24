import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeTab: '',
}

export const tabBarSlice = createSlice({
  name: 'tabBar',
  initialState,
  reducers: {
    setActiveTabAction: (state, action) => {
      state.activeTab = action.payload
    },
  },
})

export const { setActiveTabAction } = tabBarSlice.actions
export default tabBarSlice.reducer
