import "./App.css";
import Character from "./components/Character";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.div`
margin-bottom: 20px;
  background-color: #0c1b33;
  text-align: center;
  font-size: 35px;
  color: white;
  height: 50px;
  width: 100%;
  padding: 20px;
`;

function App() {
  return (
    <>
      <Container>
        <Header>Hello Magic Eight Ball</Header>
        <Character />
      </Container>
    </>
  );
}

export default App;
