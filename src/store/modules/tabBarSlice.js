import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeTab: 'id_1',
  activeAccordion: [],
}

export const tabBarSlice = createSlice({
  name: 'tabBar',
  initialState,
  reducers: {
    setActiveTabAction: (state, action) => {
      state.activeTab = action.payload
    },
    setActiveAccordionAction: (state, action) => {
      if (state.activeAccordion.includes(action.payload)) {
        state.activeAccordion = state.activeAccordion.filter(
          (item) => item !== action.payload
        )
      } else {
        state.activeAccordion.push(action.payload)
      }
    },
  },
})

export const { setActiveTabAction, setActiveAccordionAction } =
  tabBarSlice.actions
export default tabBarSlice.reducer
