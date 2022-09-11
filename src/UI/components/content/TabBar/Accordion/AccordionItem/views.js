import styled, { css } from 'styled-components'

export const StyledTitleContainer = styled.div`
  display: flex;
  font-size: 15px;
  width: 100%;
  height: 50px;
  cursor: pointer;
  box-shadow: 0.1px 0.1px 1px #d3d3d3;
  justify-content: space-between;
  border: 0.1px solid #d3d3d3;
  ${({ theme }) =>
    theme === 'light' &&
    css`
      color: black;
      background-color: #f6f6f6;
    `};
  ${({ theme }) =>
    theme === 'dark' &&
    css`
      color: white;
      background-color: rgb(52, 52, 52);
      border: none;
    `};
`

export const StyledAccordionItem = styled.div`
  ${({ isActive }) =>
    isActive &&
    css`
      min-height: 100px;
      margin-bottom: 13px;
    `};
`

export const StyledContent = styled.div`
  box-shadow: 0.1px 0.1px 1px #d3d3d3;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  ${({ theme }) =>
    theme === 'light' &&
    css`
      color: black;
      background-color: #f6f6f6;
    `};
  ${({ theme }) =>
    theme === 'dark' &&
    css`
      color: white;
      background-color: rgb(52, 52, 52);
    `};
`
export const StyledTitle = styled.div`
  margin: -1px 0 0 15px;
  display: flex;
  height: 50px;
  align-items: center;
`

export const StyledViewer = styled.div`
  margin: 17px 15px 0 0;

  img {
    width: 14px;
  }
  ${({ isActive }) =>
    isActive &&
    css`
      img {
        transform: rotate(180deg);
      }
    `};
`

export const StyledArrow = styled.img`
  width: 14px;
  border-radius: 5px;
  ${({ theme }) =>
    theme === 'dark' &&
    css`
      background-color: #f6f6f6;
    `};
  ${({ isActive }) =>
    isActive &&
    css`
      transform: rotate(180deg);
    `}
`
