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

  ${({ isActive }) =>
    isActive &&
    css`
      min-height: 80px;
      margin-bottom: 10px;
    `};
`

export const StyledAccordionItem = styled.div`
  ${({ isActive }) =>
    isActive &&
    css`
      min-height: 100px;
      margin-bottom: 10px;
      background: aliceblue;
      border-bottom: none;
    `};
`
export const StyledContentContainer = styled.div`
  height: 0;
  display: flex;
  align-items: center;
  ${({ isActive }) =>
    isActive &&
    css`
      height: 50px;
      box-shadow: 0.1px 0.1px 1px #d3d3d3;
      background: #f3f9ff;
    `};
`

export const StyledContent = styled.div`
  height: 0;
  margin-left: 15px;
  display: flex;
  align-items: center;
  background: #f1f7fd;
`
export const StyledTitle = styled.div`
  margin: 0 0 5px 15px;
  display: flex;
  height: 40px;
  align-items: center;
`

export const StyledViewer = styled.div`
  margin: 13px 13px 0 0;
`
