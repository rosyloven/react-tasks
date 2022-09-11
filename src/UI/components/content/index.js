import React from 'react'
import TabBar from './TabBar'
import { TabBarContext } from '../../../context/TabBarContext'

const Content = () => {
  const [currentTheme, setTheme] = React.useState('light')

  return (
    <TabBarContext.Provider
      value={{
        currentTheme,
        setTheme,
      }}
    >
      <TabBar />
    </TabBarContext.Provider>
  )
}

export default Content
