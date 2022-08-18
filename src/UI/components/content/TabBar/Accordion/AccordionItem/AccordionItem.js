import React from 'react'
import styled, { css } from 'styled-components'

const StyledAccordionItem = styled.div`
  display: inline-flex;
  font-size: 15px;
  border: 0.1px solid #868686;
  width: 650px;
  height: 40px;
  border-radius: 4px 4px 0px 0px;
  cursor: pointer;
  background: aliceblue;
  box-shadow: 0.1px 0.1px 1px #d3d3d3;
  align-items: center;

  ${({ isActive }) =>
    isActive &&
    css`
      height: 80px;
    `};
`
const StyledContent = styled.div`
  margin-left: 30px;
`

const AccordionItem = ({
  name,
  onSetActiveAccordion,
  isActive,
  activeAccordion,
}) => (
  <StyledAccordionItem onClick={onSetActiveAccordion} isActive={isActive}>
    {name}
    <StyledContent>
      {activeAccordion === 'id_1' && <div>Content1</div>}
    </StyledContent>
  </StyledAccordionItem>
)

export default AccordionItem
