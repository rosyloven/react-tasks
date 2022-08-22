import React from 'react'
import styled from 'styled-components'
import { ACCORDION_DATA } from '../../../../../constants/TabBar'
import AccordionItem from './AccordionItem/AccordionItem'

const StyledAccordionContainer = styled.div`
  display: inline-flex;
  opacity: 86%;
  flex-flow: column;
  min-height: 300px;
`

const Accordion = () => {
  return (
    <StyledAccordionContainer>
      {ACCORDION_DATA.map((acrd) => (
        <AccordionItem key={acrd.id} title={acrd.name} content={acrd.content} />
      ))}
    </StyledAccordionContainer>
  )
}

export default Accordion
