import React, { useState } from "react";
import { messageData } from "../Messages";
import Question from "./Question";
import eightball from "../assets/eight-ball.svg";
import styled from "styled-components";

// Magic 8-ball's answers will show up in a speech bubble
const Character = ({ question }) => {
  //use state to store and render the data
  const [message, setMessage] = useState("Ask Me Anything");

  //hide speech bubble until user submits question
  const [bubbleVisbility, setBubbleVisibility] = useState(false);

  //get random answer from Messages file
  const randomMsg = messageData[Math.floor(Math.random() * messageData.length)];

  const getMessage = (e) => {
    e.preventDefault();
    return setMessage(randomMsg), setBubbleVisibility(true);
  };

  return (
    <>
      <ContentContainer>
        <Header>Hello Magic Eight Ball</Header>
        <Chara
          src={eightball}
          className="character"
          alt="eight ball character"
          width="350px"
        />
        {bubbleVisbility ? (
          <SpeechBubble
            style={{
              "--color": message.color,
            }}
          >
            <h1>{message.answer}</h1>
          </SpeechBubble>
        ) : null}
        <ContainerQuestion>
          <Question getMessage={getMessage} />
        </ContainerQuestion>
      </ContentContainer>
    </>
  );
};

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  background-color: white;
`;
const Header = styled.div`
  width: 100%;
  text-align: center;
  font-size: 35px;
  color: black;
`;

const Chara = styled.img`
  margin-top: 20px;
`;
const SpeechBubble = styled.div`
  width: 100%;
  padding: 20px;
  margin-top: 20px;
  text-align: center;
  background: var(--color, gray);

  h1 {
    color: black;
  }
`;
const ContainerQuestion = styled.div`
  margin-top: 50px;
`;

export default Character;
