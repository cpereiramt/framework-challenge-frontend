import React from "react";
import styled from "styled-components";

function DefaultLabel({ description }) {
  const LabelNumberInput = styled.label`
    font-size: 1em;
    color: #ae0057;
    margin: auto;
    margin-bottom: 10px;
  `;
  return (
    <>
      <LabelNumberInput> {description} </LabelNumberInput>
    </>
  );
}

export default DefaultLabel;
