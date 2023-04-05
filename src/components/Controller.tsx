import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

interface Props {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

const Controller = ({ count, setCount }: Props) => {
  const controllerList = ["-1", "-10", "-100", "+100", "+10", "-1"];

  const handleCount = (e: any) => {
    const value = Number(e.target.textContent);
    setCount(count + value);
  };

  return (
    <StyledWrap>
      {controllerList.map((item, index) => (
        <StyledButton type="button" key={index} onClick={handleCount}>
          {item}
        </StyledButton>
      ))}
    </StyledWrap>
  );
};

export default Controller;

const StyledWrap = styled.div`
  display: flex;
`;
const StyledButton = styled.button`
  flex: 1;
  height: 30px;
  border: 1px solid black;
  background-color: #fff;
  cursor: pointer;

  & + & {
    margin-left: -1px;
  }
`;
