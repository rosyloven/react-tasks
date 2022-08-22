import styled, { css } from 'styled-components'

export const StyledTitleContainer = styled.div`
  display: flex;
  font-size: 15px;
  width: 650px;
  height: 50px;
  cursor: pointer;
  background: aliceblue;
  box-shadow: 0.1px 0.1px 1px #d3d3d3;
  justify-content: space-between;
  border: 0.1px solid #d3d3d3;
`

export const StyledAccordionItem = styled.div`
  ${({ isActive }) =>
    isActive &&
    css`
      min-height: 100px;
      margin-bottom: 13px;
    `};
`
export const StyledContentContainer = styled.div`
  background: #f3f9ff;
  box-shadow: 0.1px 0.1px 1px #d3d3d3;
  height: 50px;
  display: flex;
  align-items: center;
`

export const StyledContent = styled.div`
  margin-left: 15px;
  display: flex;
  align-items: center;
`
export const StyledTitle = styled.div`
  margin: -1px 0 0 15px;
  display: flex;
  height: 50px;
  align-items: center;
`

export const StyledViewer = styled.div`
  margin: 17px 15px 0 0;
`
