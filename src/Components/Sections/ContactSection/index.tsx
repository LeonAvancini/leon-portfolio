import {
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import styled from "styled-components";
import breakpoint from "../../../Common/breakpoints";

const Container = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
  @media only screen and ${breakpoint.device.sm} {
  }
  @media only screen and ${breakpoint.device.lg} {
  }
`;

const IconContainer = styled.a`
  @media only screen and ${breakpoint.device.xs} {
    margin: 20px;
    text-decoration: none;
    color: white;
  }
  @media only screen and ${breakpoint.device.sm} {
  }
  @media only screen and ${breakpoint.device.lg} {
  }
`;

const ContactSection = () => {
  return (
    <Container>
      <IconContainer href="https://github.com/LeonAvancini" target="_blank">
        <FontAwesomeIcon icon={faGithub} size={"2x"} />
      </IconContainer>
      <IconContainer
        href="https://www.linkedin.com/in/leon-avancini-1b0b06168/"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} size={"2x"} />
      </IconContainer>
      <IconContainer href="mailto:avancinileon@gmail.com?Subject=Consulta%20desde%20el%20portfolio" target="_blank">
        <FontAwesomeIcon icon={faMailBulk} size={"2x"} />
      </IconContainer>
      <IconContainer href="https://wa.me/message/PLHMKQBIGXLJK1" target="_blank">
        <FontAwesomeIcon icon={faWhatsapp} size={"2x"} />
      </IconContainer>
    </Container>
  );
};

export default ContactSection;
