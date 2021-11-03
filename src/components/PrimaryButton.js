import React from "react";
import styled from "styled-components";

function PrimaryButton({ onClickEvent }) {
  const PrimaryButton = styled.button`
    background-color: #54a20d;
    color: white;
    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid #54a20d;
    border-radius: 3px;
    margin: auto;
  `;

  return (
    <>
      <PrimaryButton onClick={() => onClickEvent()}>Calculate</PrimaryButton>
    </>
  );
}

export default PrimaryButton;
