// import React from "react";
// import Prediction from "./Prediction";
import eightball from "../assets/chara-img.svg";
import styled from "styled-components";

// Magic 8-ball's answers will show up in a speech bubble
const Character = () => {
  return (
    <>
      <Chara src={eightball} className="character" alt="eight ball character" />
    </>
  );
};

// const ContentContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   padding: 40px;
//   background-color: #0c1b33;
//   font-family: "Poppins", sans-serif;
// `;

const Chara = styled.img`
  margin-top: 20px;
  width: 95%;
`;

export default Character;
