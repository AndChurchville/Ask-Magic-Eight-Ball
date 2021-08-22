import React, { useState } from "react";
import { messageData } from "../Messages";
import Question from "./Question";
import styled from "styled-components";
import { breakpoint } from "../styles";

// Magic 8-ball's answers will show up in a speech bubble
const Prediction = ({ question }) => {
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
      <PredictionContainer>
        {bubbleVisbility ? (
          <AnswerBlock
            style={{
              "--color": message.color,
            }}
          >
            <h1>{message.answer}</h1>
          </AnswerBlock>
        ) : null}

        <ContainerQuestion>
          <Question getMessage={getMessage} />
        </ContainerQuestion>
      </PredictionContainer>
    </>
  );
};

const { medium } = breakpoint;

const PredictionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${medium}px) {
    width: 300px;
  }
`;

const AnswerBlock = styled.div`
  padding: 10px;
  margin-top: 20px;
  text-align: center;
  font-size: 0.5rem;
  background: var(--color, gray);
  width: 100%;

  h1 {
    color: #0c1b33;
  }
`;

const ContainerQuestion = styled.div`
  margin-top: 15px;
`;

export default Prediction;
