import React, { useState } from "react";
import styled from "styled-components";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <StyledWrap>
      <StyledTitle>Simple Counter</StyledTitle>
      <StyledBox>
        <Viewer count={count} />
      </StyledBox>
      <StyledBox>
        <Controller count={count} setCount={setCount} />
      </StyledBox>
    </StyledWrap>
  );
}

export default App;

const StyledWrap = styled.div`
  padding: 50px 20px;
  width: 800px;
  margin: 0 auto;
`;

const StyledTitle = styled.h1`
  margin: 0 0 20px;
  font-size: 40px;
  font-weight: 800;
  color: black;
`;

const StyledBox = styled.div`
  padding: 30px;
  margin-top: 20px;
  background-color: #eee;
`;
