import React from "react";
import Container from "../Components/Container";
import AboutWrapper from "../Components/Styles/About.styles";
import photo from "../Images/foto.png";

const About = () => (
  <Container>
    <AboutWrapper>
      <h1>Acerca de la pagina</h1>
      <h2>Autor:</h2>
      <span>Nombre: Anthony Bacilio Ruiz</span>
      <span>Descripcion: Estudiante de Javascript</span>
      <img src={photo} alt={photo} />
      <h2>Cosas que he aprendido</h2>
      <ul>
        <li>
          Que existe herramientas para que el codigo pueda ser legible por
          cualquiera del equipo
        </li>
        <li>Que debo saber testing para poder ser junior</li>
        <li>
          Que el conocimiento teorico de Javascript es muy importante para las
          entrevistas
        </li>
      </ul>
      <h2>Contacto</h2>
      <span>Correo: bacilio.anthony@gmail.com</span>
      <span>Github: https://github.com/a-bacilio </span>
    </AboutWrapper>
  </Container>
);

export default About;
