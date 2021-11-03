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
import primeAndDivisibleCalculations from "../services/calculatePrimeAndDivisibles";

function PrimeAndDivisibleNumber() {
  const [result, setResult] = React.useState("");
  const [number, setNumber] = React.useState({ value: "" });
  let inputedNumber = 0;

  const MainSection = styled.section`
    background-color: #72a8ad;
    height: 80vh;
    width: 70vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const onclickCalculate = async () => {
    if (inputedNumber == 0 || inputedNumber === "") {
      alert("Please enter a valid Number !");
      return;
    }
    const response = await primeAndDivisibleCalculations(inputedNumber);
    setResult(response);
  };

  const onChangeNumber = (event) => {
    inputedNumber = event.value;
  };

  const onClickClear = () => {
    setResult(null);
    setNumber({ value: "" });
    console.log("onClickClear");
  };

  return (
    <MainSection>
      <MainTitle title="Calculations Made Easy !!!!!!" />
      <SecondaryTitle title="Calculate Prime and Divisible numbers by given number" />

      <RowDiv>
        <DefaultLabel description="Enter a number:" />
        <DefaultInput
          typeOfInput="number"
          value={number.value}
          onChangeEvent={onChangeNumber}
        />
      </RowDiv>
      <RowHorizontalDiv>
        <PrimaryButton onClickEvent={onclickCalculate}>Calculate</PrimaryButton>
        <SecondaryButton onClickEvent={onClickClear}>Clear</SecondaryButton>
      </RowHorizontalDiv>
      <RowHorizontalDiv>
        <DefaultLabel description="Result:" />
        <TextArea content={result} />
      </RowHorizontalDiv>
    </MainSection>
  );
}

export default PrimeAndDivisibleNumber;
