import styled from 'styled-components'

export const StyledThemeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

export const StyledSwitcherButton = styled.button`
  width: 100px;
  height: 50px;
  background-color: aliceblue;
  box-shadow: 0.1px 0.1px 1px #d3d3d3;
  border: 0.1px solid #d3d3d3;
  &:active {
    background: #ddeffc;
  }
  &:hover {
    box-shadow: 1.5px 1.5px 1px hsl(0, 0%, 90%);
  }
`
