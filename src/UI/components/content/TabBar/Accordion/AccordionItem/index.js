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

  return (
    <StyledAccordionItem
      onClick={() => setActiveAccordion(!activeAccordion)}
      isActive={activeAccordion}
    >
      <StyledTitleContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledViewer isActive={activeAccordion}>
          <img
            src='https://cdn0.iconfinder.com/data/icons/leading-international-corporate-website-app-collec/16/Expand_accordion-512.png'
            alt='arrow'
          />
        </StyledViewer>
      </StyledTitleContainer>
      {activeAccordion && (
        <StyledContent isActive={activeAccordion}>{content}</StyledContent>
      )}
    </StyledAccordionItem>
  )
}

export default AccordionItem
