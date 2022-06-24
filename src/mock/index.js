import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 500px;
  padding: 20px;
  font-size: 24px;

  button {
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 50px;
    border-radius: 12px;
    background-color: purple;
    color: white;
  }
  button:hover {
    background: darkgreen;
    cursor: pointer;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10%;
`;

export const Prices = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10%;
`;

export const Family = styled.div`
  display: grid;
  grid-template-areas: "a a  a ";
  gap: 5%;
`;
