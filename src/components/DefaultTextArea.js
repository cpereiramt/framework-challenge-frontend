import React from "react";
import styled from "styled-components";

function DefaultTextArea() {
  const TextArea = styled.textarea`
    width: 55%;
    height: 80%;
    resize: none;
    border: none;
    background-color: #f5f5f5;
    font-size: 1em;
    color: #ae0057;
    padding: 1em;
  `;

  return (
    <>
      <TextArea />
    </>
  );
}

export default DefaultTextArea;
