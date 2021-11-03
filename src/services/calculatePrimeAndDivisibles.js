import axios from "axios";

const primeAndDivisibleCalculations = async (number) => {
  const result = await axios.post(`http://localhost:3001/calculator/${number}`);
  return result.data;
};

export default primeAndDivisibleCalculations;
