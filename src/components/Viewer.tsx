import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  count: number;
}

const Viewer = ({ count }: Props) => {
  return (
    <StyledWrap>
      <StyledTitle>현재 카운트 : </StyledTitle>
      <StyledCountText>{count}</StyledCountText>
    </StyledWrap>
  );
};

export default Viewer;

const StyledWrap = styled.div``;

const StyledTitle = styled.h2`
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 20px;
`;

const StyledCountText = styled.strong`
  font-weight: normal;
  font-size: 30px;
`;
