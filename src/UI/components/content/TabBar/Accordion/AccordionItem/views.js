import styled, { css } from 'styled-components'

export const StyledAccordionItem = styled.div`
  display: flex;
  font-size: 15px;
  border: 0.1px solid #868686;
  width: 650px;
  height: 40px;
  cursor: pointer;
  background: aliceblue;
  box-shadow: 0.1px 0.1px 1px #d3d3d3;
  align-items: flex-start;
  flex-flow: column;
  border-radius: ${({ radius }) => radius || '0px 0px 0px 0px'};

  ${({ isActive }) =>
    isActive &&
    css`
      min-height: 80px;
      margin-bottom: 10px;
      border-radius: 4px 4px 4px 4px;
    `};
`
export const StyledContent = styled.div`
  margin-left: 15px;
  display: flex;
  align-items: center;
  min-height: 20px;
`
export const StyledTitle = styled.div`
  margin: 0 0 5px 15px;
  display: flex;
  height: 40px;
  align-items: center;
`

export const StyledViewer = styled.div`
  display: flex;
  align-items: flex-end;
`
