import React from "react";
import styled from "styled-components";

function SecondaryTitle({ title }) {
  const SecondaryTitle = styled.h2`
    font-size: 1em;
    text-align: center;
    color: #ae0057;
  `;

  return (
    <>
      <SecondaryTitle>{title}</SecondaryTitle>
    </>
  );
}

export default SecondaryTitle;
