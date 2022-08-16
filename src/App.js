import styled from "styled-components";
import Content from "./UI/components/content/Content";

const AppWrapper = styled.div`
  width: 80%;
  min-height: 100vh;
  padding: 2rem;
  background: #fbe8a6;
  margin: auto;
`;

function App() {
  return (
    <AppWrapper>
      <Content />
    </AppWrapper>
  );
}

export default App;
