import React from 'react'
import {
  StyledAccordionItem,
  StyledContent,
  StyledTitle,
  StyledTitleContainer,
  StyledViewer,
} from './views'

const AccordionItem = ({ title, content }) => {
  const [activeAccordion, setActiveAccordion] = React.useState(false)

  const isActive = activeAccordion

  return (
    <StyledAccordionItem
      onClick={() => setActiveAccordion(!isActive)}
      isActive={isActive}
    >
      <StyledTitleContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledViewer>{isActive ? '-' : '+'}</StyledViewer>
      </StyledTitleContainer>
      {isActive && <StyledContent isActive={isActive}>{content}</StyledContent>}
    </StyledAccordionItem>
  )
}

export default AccordionItem
