import React from 'react'
import { ACCORDION_DATA } from '../../../../../../constants/TabBar'
import { StyledAccordionItem, StyledContent, StyledName } from './views'

const AccordionItem = ({
  name,
  onSetActiveAccordion,
  isActive,
  activeAccordion,
}) => (
  <StyledAccordionItem onClick={onSetActiveAccordion} isActive={isActive}>
    <StyledName>{name}</StyledName>
    <StyledContent>
      {isActive ? activeAccordion === 'id_1' && ACCORDION_DATA[0].content : ''}
      {isActive ? activeAccordion === 'id_2' && ACCORDION_DATA[1].content : ''}
      {isActive ? activeAccordion === 'id_3' && ACCORDION_DATA[2].content : ''}
    </StyledContent>
  </StyledAccordionItem>
)

export default AccordionItem
