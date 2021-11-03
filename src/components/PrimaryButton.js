import React from "react";
import styled from "styled-components";

function PrimaryButton() {
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
      <PrimaryButton>Calculate</PrimaryButton>
    </>
  );
}

export default PrimaryButton;
