import styled from "styled-components";
import PrimeAndDivisibleNumber from "./pages/PrimeAndDivisibleNumber";
function App() {
  const MainDiv = styled.div`
    background-color: #f5f5f5;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  return (
    <MainDiv>
      <PrimeAndDivisibleNumber />
    </MainDiv>
  );
}

export default App;
