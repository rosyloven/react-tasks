import React from 'react'
import {
  StyledAccordionItem,
  StyledArrow,
  StyledContent,
  StyledTitle,
  StyledTitleContainer,
  StyledViewer,
} from './views'
import { withAccordion } from '../../../../../../hocs/withAccordion'
import { connect } from 'react-redux'
import { setActiveAccordionAction } from '../../../../../../store/modules/tabBarSlice'

const ARROW_URL =
  'https://cdn0.iconfinder.com/data/icons/leading-international-corporate-website-app-collec/16/Expand_accordion-512.png'

const AccordionItem = ({
  title,
  content,
  currentTheme,
  id,
  activeAccordion,
  onSetActiveAccordion,
}) => {
  const isActiveCondition = activeAccordion.includes(id)

  return (
    <StyledAccordionItem
      onClick={onSetActiveAccordion}
      isActive={isActiveCondition}
    >
      <StyledTitleContainer theme={currentTheme}>
        <StyledTitle>{title}</StyledTitle>
        <StyledViewer isActive={isActiveCondition}>
          <StyledArrow theme={currentTheme} src={ARROW_URL} alt='arrow' />
        </StyledViewer>
      </StyledTitleContainer>
      {isActiveCondition && (
        <StyledContent theme={currentTheme} isActive={isActiveCondition}>
          {content}
        </StyledContent>
      )}
    </StyledAccordionItem>
  )
}

export default connect(
  (state) => ({ activeAccordion: state.tabBar.activeAccordion }),
  (dispatch, { id }) => ({
    onSetActiveAccordion: () => {
      dispatch(setActiveAccordionAction(id))
    },
  })
)(withAccordion(AccordionItem))
