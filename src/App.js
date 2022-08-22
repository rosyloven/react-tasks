import styled from 'styled-components'
import Index from './UI/components/content'

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
      <Index />
    </AppWrapper>
  )
}

export default App
