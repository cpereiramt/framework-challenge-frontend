import React from "react";
import styled from "styled-components";

function RowHorizontalDiv({ children }) {
  const RowHorizontalDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: center;
    max-width: 80vw;
    margin-bottom: 15px;
    flex-wrap: wrap;
  `;
  return <RowHorizontalDiv>{children}</RowHorizontalDiv>;
}

export default RowHorizontalDiv;
