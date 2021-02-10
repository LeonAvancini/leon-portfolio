import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import styled from "styled-components";
import breakpoint from "../../../Common/breakpoints";

const Container = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  }
  @media only screen and ${breakpoint.device.sm} {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    margin-top: 50px;
  }
`;

const IconContainer = styled.a`
  @media only screen and ${breakpoint.device.xs} {
    text-decoration: none;
    color: white;
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  @media only screen and ${breakpoint.device.xs} {
    font-size: 50px;
    margin: 25px;
  }
  @media only screen and ${breakpoint.device.sm} {
    margin: 50px;
  }
  @media only screen and ${breakpoint.device.lg} {
    margin: 70px;
    font-size: 70px;
  }
`;

const ContactSection = () => {
  return (
    <Container>
      <IconContainer href="https://github.com/LeonAvancini" target="_blank">
        <StyledFontAwesomeIcon icon={faGithub} color={"#c9510c"} />
      </IconContainer>
      <IconContainer
        href="https://www.linkedin.com/in/leon-avancini-1b0b06168/"
        target="_blank"
      >
        <StyledFontAwesomeIcon icon={faLinkedin} color={"#0077b5"} />
      </IconContainer>
      <IconContainer
        href="mailto:avancinileon@gmail.com?Subject=Consulta%20desde%20el%20portfolio"
        target="_blank"
      >
        <StyledFontAwesomeIcon icon={faEnvelope} color={"#ffffff"} />
      </IconContainer>
      <IconContainer
        href="https://wa.me/message/PLHMKQBIGXLJK1"
        target="_blank"
      >
        <StyledFontAwesomeIcon icon={faWhatsapp} color={"#25d366"} />
      </IconContainer>

      {/* <form
        action={"mailto:avancinileon@gmail.com"}
        method="POST"
        name="EmailForm"
      >
        <input type="text" size={19} name="Contact-Name" />

        <input type="email" name="Contact-Email" />

        <textarea name="Contact-Message" rows={6} cols={20} />

        <button type="submit" value="Submit">
          Send
        </button>
      </form> */}
    </Container>
  );
};

export default ContactSection;
