import styled from 'styled-components'
import Content from './UI/components/content'
import { TabBarContext } from './context/TabBarContext'

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 5px;
  background: white;
  margin: auto;
`

function App() {
  return (
    <AppWrapper>
      <Content />
    </AppWrapper>
  )
}

export default App
