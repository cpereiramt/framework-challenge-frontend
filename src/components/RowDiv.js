import React from "react";
import styled from "styled-components";

function RowDiv({ children }) {
  const RowDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    max-width: 80vw;
    flex-wrap: wrap;
    margin-bottom: 15px;
  `;

  return <RowDiv>{children}</RowDiv>;
}

export default RowDiv;
