import React, { createContext } from 'react'

export const TabBarContext = createContext(null)

const TabBarProvider = ({ children }) => {
  const [currentTheme, setTheme] = React.useState('light')
  const setCurrentTheme = () =>
    currentTheme === 'light' ? setTheme('dark') : setTheme('light')

  return (
    <TabBarContext.Provider
      value={{
        currentTheme,
        setCurrentTheme,
      }}
    >
      {children}
    </TabBarContext.Provider>
  )
}

export default TabBarProvider
