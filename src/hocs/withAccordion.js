import React from 'react'
import { useContext } from 'react'
import { TabBarContext } from '../context/TabBarContext'

export const withAccordion = (Component) => {
  return (props) => {
    const { currentTheme } = useContext(TabBarContext)

    return <Component currentTheme={currentTheme} {...props} />
  }
}
