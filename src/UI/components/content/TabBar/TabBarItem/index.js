import React from 'react'
import styled, { css } from 'styled-components'

const StyledTabBarItem = styled.div`
  display: inline-flex;
  width: 100%;
  justify-content: center;
  padding-bottom: 30px;
  height: 20px;
  font-size: 15px;
  border-bottom: solid 2px;
  color: #868686;
  cursor: pointer;

  ${({ isActive }) =>
    isActive &&
    css`
      color: dodgerblue;
      border-bottom: solid 2px cornflowerblue;
    `};
`

const TabBarItem = ({ name, onSetActiveTab, isActive }) => (
  <StyledTabBarItem onClick={onSetActiveTab} isActive={isActive}>
    {name}
  </StyledTabBarItem>
)

export default TabBarItem
