import React from 'react'
import TabBarItem from './TabBarItem'
import { StyledContent, StyledTabContainer, StyledTabItems } from './views'
import {
  TAB_DATA,
  TABLE_DATA,
  TABLE_TITLES,
} from '../../../../constants/TabBar'
import Accordion from './Accordion'
import Table from './Table'

const TabBar = () => {
  const [activeTab, setActiveTab] = React.useState('id_1')

  const onSetActiveTab = (activeTab) => () => setActiveTab(activeTab)

  return (
    <StyledTabContainer>
      <StyledTabItems>
        {TAB_DATA.map((tab) => (
          <TabBarItem
            isActive={activeTab === tab.id}
            onSetActiveTab={onSetActiveTab(tab.id)}
            name={tab.itemName}
            key={tab.id}
          />
        ))}
      </StyledTabItems>
      <StyledContent>
        {activeTab === 'id_1' && <div>Content1</div>}
        {activeTab === 'id_2' && <Accordion />}
        {activeTab === 'id_3' && (
          <Table data={TABLE_DATA} titles={TABLE_TITLES} />
        )}
      </StyledContent>
    </StyledTabContainer>
  )
}

export default TabBar
