import styled from "styled-components";
import Content from "./UI/components/content/Content";
import Header from "./UI/components/header/Header";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 5px;
  background: white;
  margin: auto;
`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <Content />
    </AppWrapper>
  );
}

export default App;
