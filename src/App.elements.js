import styled from "styled-components";

export const Root = styled.div`
  height: 100vh;
  padding: 100px;
  background-color: red;
  .active {
    background-color: gold;
  }
`;
export const StarsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 30%;
  border: 1px solid black;
`;
export const StarDiv = styled.div`
  height: 100px;
  width: 100px;
  border: 1px solid black;
  :hover {
    background-color: gold;
  }
`;
