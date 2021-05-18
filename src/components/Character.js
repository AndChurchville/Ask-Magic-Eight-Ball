import React, { useState } from "react";
import { messageData } from "../Messages";
import Question from "./Question";
import eightball from "../assets/eight-ball.svg";
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  width: 50%;
  height: 25%;
  padding: 20px 20px 0px 20px;
  background-color: #66CED6;
`;

const SpeechBubble = styled.div`
  background: #A7A5C6;
  width: 300px;
  height: 180px;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
  position: relative;

  h1 {
    color: var(--color, gray);
  }

  &:before{
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 50px solid #A7A5C6;
    border-top: 30px solid transparent;
    border-bottom: 10px solid transparent;
    right: 335px; 
    top: 40px;
  }
`;
const Triangle = styled.div `
  
  `;
const UserInput = styled.div`
  background-color: #0C1B33;
  height: 160px;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
    `

// Magic 8-ball's answers will show up in a speech bubble
const Character = ({ question }) => {
  //using state to store and render the data
  const [message, setMessage] = useState("Ask Me Anything");
  // const [bubbleVisbility, setBubbleVisibility] = useState(true);

  const randomMsg = messageData[Math.floor(Math.random() * messageData.length)];

  const getMessage = (e) => {
    e.preventDefault();
    return setMessage(randomMsg)
    // setBubbleVisibility(true);
  };

  return (
    <>
      <GridContainer>
        <img
          src={eightball}
          className="character"
          alt="eight ball character"
          width="350px"
        />
        
        <SpeechBubble
          style={{
            "--color": message.color}}
        >
          <h1>{message.answer}</h1>
          <Triangle>

          </Triangle>
        </SpeechBubble>
      </GridContainer>

      <UserInput>
        <Question getMessage={getMessage} />
      </UserInput>
    </>
  );
};

export default Character;
