import React, { useState } from 'react';
import styled from "styled-components";

export const StyledDiv = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};

  margin: ${(props) => props.margin || "0"};
  margin-top: ${(props) => props.marginTop || ""};

  border: ${(props) => props.border || ""};
  font-size: ${(props) => props.fontSize || "1rem"};
  text-align: ${(props) => props.textAlign || "center"};

  position: ${(props) => props.position || ""};
  bottom: ${(props) => props.bottom || ""};

  display: ${(props) => props.display || ""};
  flex-direction: ${(props) => props.flexDirection || ""};
  justify-content: ${(props) => props.justifyContent || ""};
  align-items: ${(props) => props.alignItems || ""};

`;

export const StyledHeader1 = styled.h1`
  font-size: ${(props) => props.fontSize || "4vw"};
  color: ${(props) => props.color || "rgba(0, 0, 0, 0.5)"};
  font-weight: ${(props) => props.fontWeight || ""};
  display: ${(props) => props.display || ""};
`;

export const StyledSpan = styled.span`
  font-size: ${(props) => props.fontSize || "2vw"};
`;
