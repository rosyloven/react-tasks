import { setActiveTabAction } from '../store/modules/tabBarSlice'
import { useDispatch, useSelector } from 'react-redux'

export const WithTabs = ({ children }) => {
  const dispatch = useDispatch()
  const activeTab = useSelector((state) => state.tabBar.activeTab)

  const onSetActiveTab = (activeTab) => () =>
    dispatch(setActiveTabAction(activeTab))

  return children(onSetActiveTab, activeTab)
}
