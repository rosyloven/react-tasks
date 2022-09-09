import React from 'react'

export const WithTabs = ({ children }) => {
  const [activeTab, setActiveTab] = React.useState('id_1')

  const onSetActiveTab = (activeTab) => () => setActiveTab(activeTab)

  return children(activeTab, onSetActiveTab)
}
