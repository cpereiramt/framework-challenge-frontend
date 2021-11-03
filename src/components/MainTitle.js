import React from "react";
import styled from "styled-components";

function MainTitle({ title }) {
  const MainTitle = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: blue;
  `;
  return (
    <>
      <MainTitle>{title}</MainTitle>
    </>
  );
}

export default MainTitle;
