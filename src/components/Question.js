import React, { useState } from "react";
import styled from "styled-components";

//User will type in a question
const Question = ({ getMessage }) => {
  const [question, setQuestion] = useState("");

  const getAnswer = (e) => {
    // e.preventDefault();
    if (question) {
      getMessage(e);
      setQuestion("");
    }
  };

  return (
    <>
      <form onSubmit={getAnswer}>
        <label>Ask Me Anything</label>
        <UserAsk
          value={question}
          placeholder="Will I win the lottery?"
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
        />
        <SubmitBtn type="submit">Ask</SubmitBtn>
      </form>
    </>
  );
};

const UserAsk = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border: 0;
  border-bottom: 1px solid #eee;
  border-radius: 5px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
`;

const SubmitBtn = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: purple;
`;
export default Question;
