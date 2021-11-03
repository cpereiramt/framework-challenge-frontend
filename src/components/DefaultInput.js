import React from "react";
import styled from "styled-components";

function DefaultInput({ typeOfInput, onChangeEvent }) {
  const InputNumber = styled.input`
    margin: auto;
  `;

  return (
    <>
      <InputNumber
        type={typeOfInput}
        onChange={(e) => onChangeEvent({ value: e.target.value })}
      />
    </>
  );
}

export default DefaultInput;
