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
import { connect, useSelector } from 'react-redux'
import { setActiveAccordionAction } from '../../../../../../store/modules/tabBarSlice'
import { useDispatch } from 'react-redux'

const ARROW_URL =
  'https://cdn0.iconfinder.com/data/icons/leading-international-corporate-website-app-collec/16/Expand_accordion-512.png'

const AccordionItem = ({ title, content, currentTheme, id }) => {
  const activeAccordion = useSelector((state) => state.tabBar.activeAccordion)
  const dispatch = useDispatch()

  return (
    <StyledAccordionItem
      onClick={() => {
        dispatch(setActiveAccordionAction(id))
      }}
      isActive={activeAccordion}
    >
      <StyledTitleContainer theme={currentTheme}>
        <StyledTitle>{title}</StyledTitle>
        <StyledViewer isActive={activeAccordion}>
          <StyledArrow theme={currentTheme} src={ARROW_URL} alt='arrow' />
        </StyledViewer>
      </StyledTitleContainer>
      {activeAccordion.includes(id) && (
        <StyledContent theme={currentTheme} isActive={activeAccordion}>
          {content}
        </StyledContent>
      )}
    </StyledAccordionItem>
  )
}

export default connect(
  (state) => ({ activeAccordion: state.activeAccordion }),
  (dispatch) => ({
    onSetActiveAccordion: () => {
      dispatch(setActiveAccordionAction())
    },
  })
)(withAccordion(AccordionItem))
