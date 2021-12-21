/* eslint-disable react/jsx-no-useless-fragment */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonBody = styled.button`
  cursor: pointer;
  padding: 8px;
  margin: 5px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : ""};
  color: ${(props) => props.textColor || ""};
  font-size: var(--xxsmallFont);
  border-radius: 10px;
  border: ${(props) => (props.border ? "solid 1px" : "")};
  border-color: ${(props) => props.bordercolor || ""};
  box-shadow: ${(props) =>
    props.shadow
      ? "0px 4px 6px -1px rgba(0,0,0,0.1) , 0px 2px 4px -1px rgba(0,0,0,0.06)"
      : ""};
  width: ${(props) => {
    switch (props.widthLevel) {
      case 1:
        return "25px";
      case 2:
        return "55px";
      case 3:
        return "85px";
      case 4:
        return "115px";
      case 5:
        return "145px";
      default:
        return "auto";
    }
  }};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = ({
  children = <></>,
  to = "",
  href = "",
  backgroundColor = "",
  textColor = "",
  border = true,
  borderColor = "",
  shadow = true,
  target = "",
  widthLevel = 1,
  onClick = () => {},
}) => {
  let ButtonResult;

  if (href !== "") {
    ButtonResult = (
      <a href={href} rel="nofollow noopener noreferrer" target={target}>
        <ButtonBody
          backgroundColor={backgroundColor}
          textColor={textColor}
          border={border}
          borderColor={borderColor}
          shadow={shadow}
          widthLevel={widthLevel}
        >
          {children}
        </ButtonBody>
      </a>
    );
  } else if (to !== "") {
    ButtonResult = (
      <Link to={to} rel="nofollow noopener noreferrer" target={target}>
        <ButtonBody
          backgroundColor={backgroundColor}
          textColor={textColor}
          border={border}
          borderColor={borderColor}
          shadow={shadow}
          widthLevel={widthLevel}
        >
          {children}
        </ButtonBody>
      </Link>
    );
  } else {
    ButtonResult = (
      <ButtonBody
        backgroundColor={backgroundColor}
        textColor={textColor}
        border={border}
        borderColor={borderColor}
        shadow={shadow}
        widthLevel={widthLevel}
        onClick={onClick}
      >
        {children}
      </ButtonBody>
    );
  }

  return ButtonResult;
};

export default Button;
