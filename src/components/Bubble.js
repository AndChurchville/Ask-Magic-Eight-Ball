import React, { useState } from "react";
import { messageData } from "../Messages";
import Question from "./Question";

// Magic 8-ball's answers will show up in a speech bubble
const Bubble = ({ question }) => {
  //using state to store and render the data
  const [message, setMessage] = useState("Ask Me Anything");
  const randomMsg = messageData[Math.floor(Math.random() * messageData.length)];

  const getMessage = (e) => {
    e.preventDefault();
    return setMessage(randomMsg);
  };
  return (
    <>
      <div>
        <h1 style={{ color: message.color }}>{message.answer}</h1>
        <Question getMessage={getMessage} />
      </div>
    </>
  );
};

export default Bubble;
