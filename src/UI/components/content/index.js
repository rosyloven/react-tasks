import React from 'react'
import TabBar from './TabBar'
import TabBarProvider from '../../../context/TabBarContext'

const Content = () => (
  <TabBarProvider>
    <TabBar />
  </TabBarProvider>
)

export default Content
