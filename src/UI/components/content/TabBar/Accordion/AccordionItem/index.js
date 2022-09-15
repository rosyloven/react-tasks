import React, { useContext } from 'react'
import {
  StyledAccordionItem,
  StyledArrow,
  StyledContent,
  StyledTitle,
  StyledTitleContainer,
  StyledViewer,
} from './views'
import { withAccordion } from '../../../../../../hocs/withAccordion'
import { TabBarContext } from '../../../../../../context/TabBarContext'

const ARROW_URL =
  'https://cdn0.iconfinder.com/data/icons/leading-international-corporate-website-app-collec/16/Expand_accordion-512.png'

const AccordionItem = ({
  title,
  content,
  activeAccordion,
  onSetActiveAccordion,
}) => {
  const { currentTheme } = useContext(TabBarContext)

  return (
    <StyledAccordionItem
      onClick={onSetActiveAccordion}
      isActive={activeAccordion}
    >
      <StyledTitleContainer theme={currentTheme}>
        <StyledTitle>{title}</StyledTitle>
        <StyledViewer isActive={activeAccordion}>
          <StyledArrow theme={currentTheme} src={ARROW_URL} alt='arrow' />
        </StyledViewer>
      </StyledTitleContainer>
      {activeAccordion && (
        <StyledContent theme={currentTheme} isActive={activeAccordion}>
          {content}
        </StyledContent>
      )}
    </StyledAccordionItem>
  )
}

export default withAccordion(AccordionItem)
