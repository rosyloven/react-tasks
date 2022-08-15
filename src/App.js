import styled from 'styled-components';
import Content from "./UI/content/Content";
import state from "./Data/state";

const AppWrapper = styled.div`
  width: 80%;
  min-height: 100vh;
  padding: 2rem;
  background: #FBE8A6;
  margin: auto;
`

function App() {
  return (
    <AppWrapper>
      <Content state={state}/>
    </AppWrapper>
  );
}

export default App;
