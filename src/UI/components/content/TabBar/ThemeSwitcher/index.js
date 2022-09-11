import React, { useContext } from 'react'
import { TabBarContext } from '../../../../../context/TabBarContext'
import { StyledSwitcherButton, StyledThemeContainer } from './views'

const ThemeSwitcher = () => {
  const { setTheme, currentTheme } = useContext(TabBarContext)

  return (
    <StyledThemeContainer>
      <StyledSwitcherButton
        onClick={() =>
          currentTheme === 'light' ? setTheme('dark') : setTheme('light')
        }
      >
        SwitchTheme
      </StyledSwitcherButton>
    </StyledThemeContainer>
  )
}

export default ThemeSwitcher
