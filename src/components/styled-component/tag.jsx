// import { createGlobalStyle } from "styled-components";

// import React, { useState } from 'react';
import styled from "styled-components";

export const StyledDiv = styled.div`
  width: ${(props) => props.width || "100%"};
  min-width: ${(props) => props.minWidth || ""};
  height: ${(props) => props.height || "auto"};

  overflow: ${(props) => props.overflow || ""};
  background: ${(props) => props.background || ""};
  background-color: ${(props) => props.backgroundColor || ""};
  
  margin: ${(props) => props.margin || ""};
  margin-top: ${(props) => props.marginTop || ""};
  padding: ${(props) => props.padding || ""};

  border: ${(props) => props.border || ""};
  border-radius: ${(props) => props.borderRadius || ""};
  
  font-size: ${(props) => props.fontSize || "1rem"};
  text-align: ${(props) => props.textAlign || "center"};

  position: ${(props) => props.position || ""};
  top: ${(props) => props.top || ""};
  right: ${(props) => props.right || ""};
  bottom: ${(props) => props.bottom || ""};
  left: ${(props) => props.left || ""};

  display: ${(props) => props.display || ""};
  flex-direction: ${(props) => props.flexDirection || ""};
  justify-content: ${(props) => props.justifyContent || ""};
  align-items: ${(props) => props.alignItems || ""};
`;

export const StyledHeader1 = styled.h1`
  font-size: ${(props) => props.fontSize || "68px"};
  color: ${(props) => props.color || "#eee"};
  font-weight: ${(props) => props.fontWeight || "600"};
  display: ${(props) => props.display || ""};
`;

export const StyledSpan = styled.span`
  font-size: ${(props) => props.fontSize || "18px"};
  font-weight: ${(props) => props.fontWeight || ""};
  color: ${(props) => props.color || ""};
  background: ${(props) => props.background || ""};
`;
