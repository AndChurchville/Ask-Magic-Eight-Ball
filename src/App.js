import "./App.css";
import Character from "./components/Character";
import Prediction from "./components/Prediction";
import styled from "styled-components";

function App() {
  return (
    <>
      <Container>
        <Frame>
          {" "}
          <Header>Hello Magic Eight Ball!</Header>
          <Character />
          <Prediction />
        </Frame>
      </Container>
    </>
  );
}

const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: purple;
`;

const Header = styled.div`
  width: 100%;
  font-family: "Megrim", sans-serif;
  text-align: center;
  font-size: 1.5rem;
  color: lightgreen;
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background-color: #0c1b33;
  font-family: "Poppins", sans-serif;
`;

export default App;
