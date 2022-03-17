import React, { useState } from 'react';
import styled from "styled-components";

// Templates
import Header from '../templates/Header'

// react scroll parallax
// react aos
// react card flip

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1rem;
`;

const ResumePage = () => {
  return (
      <StyledDiv>
        <Header />
      </StyledDiv>
  );
}

export default ResumePage;