import React from 'react'
import {
  StyledAccordionItem,
  StyledContent,
  StyledContentContainer,
  StyledTitle,
  StyledTitleContainer,
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
      <StyledTitleContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledViewer>{isActive ? '-' : '+'}</StyledViewer>
      </StyledTitleContainer>
      <StyledContentContainer isActive={isActive}>
        <StyledContent>{activeAccordion === key && content}</StyledContent>
      </StyledContentContainer>
    </StyledAccordionItem>
  )
}

export default AccordionItem
