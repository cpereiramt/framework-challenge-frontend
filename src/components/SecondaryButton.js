import React from "react";
import styled from "styled-components";

function SecondaryButton({ onClickEvent }) {
  const SecondaryButton = styled.button`
    background-color: #ae0057;
    color: white;
    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid #ae0057;
    border-radius: 3px;
    margin: auto;
  `;

  return (
    <>
      <SecondaryButton onClick={() => onClickEvent()}>Clear</SecondaryButton>
    </>
  );
}

export default SecondaryButton;
