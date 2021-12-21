/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import styled from "styled-components";
import React from "react";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.backgroundColor || ""};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Workzone = styled.div`
  min-width: 350px;
  max-width: 1500px;
  width: 90%;
  height: 100%;
  background-color: ${(props) => props.backgroundColor || ""};
`;

const Container = ({ children = <></>, backgroundColor = "" }) => (
  <Wrapper backgroundColor={backgroundColor}>
    <Workzone backgroundColor={backgroundColor}>{children || null}</Workzone>
  </Wrapper>
);

export default Container;
