import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: green;
  font-size: 24px;
  height: 600px;
  padding: 10%;
  button {
    width: 300px;
    height: 70px;
    border-radius: 12px;
    background: black;
    color: white;
    cursor: pointer;
    border: none;
    box-shadow: 0 0 30px #000;
  }
  button:hover {
    background-color: grey;
  }
`;
