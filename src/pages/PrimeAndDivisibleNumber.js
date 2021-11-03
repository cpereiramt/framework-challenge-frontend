import React from "react";
import styled from "styled-components";
import MainTitle from "../components/MainTitle";
import SecondaryTitle from "../components/SecondaryTitle";
import RowDiv from "../components/RowDiv";
import DefaultLabel from "../components/DefaultLabel";
import RowHorizontalDiv from "../components/RowHorizontalDiv";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import DefaultInput from "../components/DefaultInput";
import TextArea from "../components/DefaultTextArea";

function PrimeAndDivisibleNumber() {
  const MainSection = styled.section`
    background-color: #72a8ad;
    height: 80vh;
    width: 70vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  return (
    <MainSection>
      <MainTitle title="Calculations Made Easy !!!!!!" />
      <SecondaryTitle title="Calculate Prime and Divisible numbers by given number" />

      <RowDiv>
        <DefaultLabel description="Enter a number:" />
        <DefaultInput typeOfInput="number" />
      </RowDiv>
      <RowHorizontalDiv>
        <PrimaryButton>Calculate</PrimaryButton>
        <SecondaryButton>Clear</SecondaryButton>
      </RowHorizontalDiv>
      <RowDiv>
        <DefaultLabel description="Result:" />
        <TextArea />
      </RowDiv>
    </MainSection>
  );
}

export default PrimeAndDivisibleNumber;
