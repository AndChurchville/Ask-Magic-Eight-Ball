import React, { useState } from "react";
import styled from "styled-components";
import { breakpoint } from "../styles";

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
      <QuestionForm onSubmit={getAnswer}>
        <UserAsk
          value={question}
          placeholder=" ex.Will I win the lottery?"
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
        />
        <SubmitBtn type="submit">Ask me!</SubmitBtn>
      </QuestionForm>
    </>
  );
};

const { medium } = breakpoint;

const QuestionForm = styled.form`
  display: block;
  @media (min-width: ${medium}px) {
    display: flex;
    justify-content: space-around;
    align-content: center;
  }
`;
const UserAsk = styled.input`
  display: block;
  padding: 10px;
  margin: 8px 0;
  width: 200px;
  height: 20px;
  border: 0;
  border-bottom: 1px solid #eee;
  border-radius: 5px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  text-align: center;
`;

const SubmitBtn = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  color: white;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 1rem;
  background-color: #9fc087;
  cursor: pointer;
  &:hover {
    background-color: #c9dcbc;
    color: #230c33;
  }

  @media (min-width: ${medium}px) {
    padding: 10px;
    margin: 8px 0 0 15px;
    height: 40px;
  }
`;
export default Question;
