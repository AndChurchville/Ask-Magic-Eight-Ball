import React, { useState } from "react";

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
        <input
          value={question}
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
        />
        <button type="submit">Ask</button>
      </form>
    </>
  );
};

export default Question;
