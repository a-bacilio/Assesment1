import React, { useState } from "react";

import {
  MenuBar,
  Wrapper,
  Hamburguer,
  ModalMenuBar,
} from "./Styles/Navbar.styles";
import Container from "./Container";
import Modal from "./Atoms/Modal";
import Card from "./Atoms/Card";

import HamburguerLogo from "../Images/svg/hamburguer.svg";
import Button from "./Atoms/Button";

const NavBar = () => {
  const [modalnavbar, setmodalnavbar] = useState(false);

  return (
    <Container backgroundColor="var(--color4)">
      <Wrapper>
        <MenuBar>
          <Button
            widthLevel={2}
            textColor="black"
            border={false}
            backgroundColor="white"
            href="/"
          >
            Home
          </Button>
          <Button
            widthLevel={2}
            textColor="black"
            border={false}
            backgroundColor="white"
            href="/about"
          >
            About
          </Button>
        </MenuBar>
        <Hamburguer
          onClick={() => setmodalnavbar(true)}
          src={HamburguerLogo}
          alt={HamburguerLogo}
        />
      </Wrapper>
      <Modal modalOn={modalnavbar}>
        <Card backgroundColor="white">
          <ModalMenuBar>
            <Button
              widthLevel={2}
              textColor="black"
              border={false}
              backgroundColor="white"
              href="/"
            >
              Home
            </Button>
            <Button
              widthLevel={2}
              textColor="black"
              border={false}
              backgroundColor="white"
              href="/about"
            >
              About
            </Button>

            <Button
              onClick={() => setmodalnavbar(false)}
              widthLevel={2}
              textColor="black"
              border={false}
              backgroundColor="var(--color4)"
              shadow
            >
              Cerrar
            </Button>
          </ModalMenuBar>
        </Card>
      </Modal>
    </Container>
  );
};

export default NavBar;
