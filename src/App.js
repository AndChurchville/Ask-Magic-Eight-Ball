import "./App.css";
import Character from "./components/Character";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightblue;
  height: 100%;
`;

function App() {
  return (
    <>
      <Container>
        <Character />
      </Container>
    </>
  );
}

export default App;
