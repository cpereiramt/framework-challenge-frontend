import React from "react";
import styled from "styled-components";

function DefaultInput({ typeOfInput }) {
  const InputNumber = styled.input`
    margin: auto;
  `;

  return (
    <>
      <InputNumber type={typeOfInput} />
    </>
  );
}

export default DefaultInput;
