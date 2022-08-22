import React from 'react'
import {
  StyledAccordionItem,
  StyledContent,
  StyledContentContainer,
  StyledTitle,
  StyledTitleContainer,
  StyledViewer,
} from './views'

const AccordionItem = ({ title, id, content }) => {
  const [activeAccordion, setActiveAccordion] = React.useState(false)

  const isActive = activeAccordion === id

  return (
    <StyledAccordionItem
      onClick={() => setActiveAccordion(activeAccordion ? !id : id)}
      isActive={isActive}
    >
      <StyledTitleContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledViewer>{isActive ? '-' : '+'}</StyledViewer>
      </StyledTitleContainer>
      {isActive && (
        <StyledContentContainer isActive={isActive}>
          <StyledContent>{activeAccordion === id && content}</StyledContent>
        </StyledContentContainer>
      )}
    </StyledAccordionItem>
  )
}

export default AccordionItem
