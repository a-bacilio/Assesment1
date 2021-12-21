/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

const ModalBody = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--shade);
`;

const Modal = ({ children = <></>, modalOn = false }) => {
  let ModalReturn;

  if (modalOn) {
    ModalReturn = <ModalBody>{children || null}</ModalBody>;
  } else {
    ModalReturn = null;
  }

  return ModalReturn;
};

export default Modal;
