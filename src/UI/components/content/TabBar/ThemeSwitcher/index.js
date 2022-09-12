import React, { useContext } from 'react'
import { TabBarContext } from '../../../../../context/TabBarContext'
import { StyledSwitcherButton, StyledThemeContainer } from './views'

const ThemeSwitcher = () => {
  const { setCurrentTheme } = useContext(TabBarContext)

  return (
    <StyledThemeContainer>
      <StyledSwitcherButton onClick={setCurrentTheme}>
        SwitchTheme
      </StyledSwitcherButton>
    </StyledThemeContainer>
  )
}

export default ThemeSwitcher
