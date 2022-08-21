import React from 'react'
import styled from 'styled-components'
import { ACCORDION_DATA } from '../../../../../constants/TabBar'
import AccordionItem from './AccordionItem/AccordionItem'

const StyledAccordionContainer = styled.div`
  display: flex;
  min-height: 300px;
`

const StyledAccordionItem = styled.div`
  display: inline-flex;
  opacity: 86%;
  flex-flow: column;
`

const Accordion = () => {
  const [activeAccordion, setActiveAccordion] = React.useState('')

  const onSetActiveAccordion = (activeAccordion) => () =>
    setActiveAccordion(activeAccordion)

  return (
    <StyledAccordionContainer>
      <StyledAccordionItem>
        {ACCORDION_DATA.map((acrd) => (
          <AccordionItem
            key={acrd.id}
            name={acrd.name}
            onSetActiveAccordion={onSetActiveAccordion(acrd.id)}
            isActive={activeAccordion === acrd.id}
            activeAccordion={activeAccordion}
          />
        ))}
      </StyledAccordionItem>
    </StyledAccordionContainer>
  )
}

export default Accordion
