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

const QuestionForm = styled.form``;
const UserAsk = styled.input`
  display: block;
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
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  color: white;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  background-color: purple;
`;
export default Question;
