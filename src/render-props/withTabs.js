import React from 'react'
import { useDispatch } from 'react-redux'
import { setActiveTabReducer } from '../store/modules/tabBarSlice'

export const WithTabs = ({ children }) => {
  const [activeTab, setActiveTab] = React.useState('id_1')
  const dispatch = useDispatch()

  const onSetActiveTab = (activeTab) => () => setActiveTab(activeTab)
  dispatch(setActiveTabReducer(activeTab))

  return children(onSetActiveTab, activeTab)
}
