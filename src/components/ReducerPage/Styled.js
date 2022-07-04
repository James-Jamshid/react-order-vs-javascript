import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: pink;
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
export const Wrapper = styled.div`
  display: flex;
  /* border: 1px solid black; */
  justify-content: space-between;
`;
export const Child = styled.div`
  display: flex;
  border: 1px solid black;
  align-items: center;
  justify-content: center;
`;
