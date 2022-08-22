import React from 'react'
import {
  StyledAccordionItem,
  StyledContent,
  StyledTitle,
  StyledViewer,
} from './views'

const AccordionItem = ({ title, key, content }) => {
  const [activeAccordion, setActiveAccordion] = React.useState(true)

  const isActive = activeAccordion === key

  return (
    <StyledAccordionItem
      onClick={() =>
        activeAccordion ? setActiveAccordion(key) : setActiveAccordion(!key)
      }
      isActive={isActive}
    >
      <StyledTitle>{title}</StyledTitle>
      <StyledViewer>{isActive ? '-' : '+'}</StyledViewer>
      <StyledContent>{activeAccordion === key && content}</StyledContent>
    </StyledAccordionItem>
  )
}

export default AccordionItem
