import React from 'react'
import {
  StyledAccordionItem,
  StyledArrow,
  StyledContent,
  StyledTitle,
  StyledTitleContainer,
  StyledViewer,
} from './views'

const ARROW_URL =
  'https://cdn0.iconfinder.com/data/icons/leading-international-corporate-website-app-collec/16/Expand_accordion-512.png'

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
          <StyledArrow src={ARROW_URL} alt='arrow' />
        </StyledViewer>
      </StyledTitleContainer>
      {activeAccordion && (
        <StyledContent isActive={activeAccordion}>{content}</StyledContent>
      )}
    </StyledAccordionItem>
  )
}

export default AccordionItem
