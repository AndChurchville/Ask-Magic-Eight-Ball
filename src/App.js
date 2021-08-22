import "./App.css";
import Prediction from "./components/Prediction";
import styled from "styled-components";
import { color } from "./styles";
import eightball from "./assets/chara-img.svg";

function App() {
  return (
    <>
      <Container>
        <Header>Hello Magic Eight Ball</Header>
        <ImageWrapper>
          <img src={eightball} alt="character" />
        </ImageWrapper>
        <Prediction />
      </Container>
    </>
  );
}

const { darkPurple, olive } = color;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${darkPurple};
  height: 100vh;
`;
const Header = styled.h1`
  color: ${olive};
  font-family: "Megrim", sans-serif;
`;
const ImageWrapper = styled.div`
  width: 240px;
  height: auto;
  object-fit: contain;
`;
export default App;
