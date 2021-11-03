import React from "react";
import styled from "styled-components";

function DefaultTextArea({ content }) {
  const TextArea = styled.textarea`
    width: 100%;
    height: 120%;
    resize: none;
    border: none;
    background-color: #f5f5f5;
    font-size: 1em;
    color: #ae0057;
    padding: 1em;
  `;

  const formatingContent = (content) => {
    return `=====> the inputed number was: ${content.inputedNumber} \n=====> the divisibles list was: ${content.divisibles} \n=====> And the prime numbers list was: ${content.primeDivisibles}`;
  };
  return (
    <>
      {content && (
        <TextArea defaultValue={formatingContent(content)} disabled={true} />
      )}
    </>
  );
}

export default DefaultTextArea;
