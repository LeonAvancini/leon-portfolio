import React from "react";
import styled from "styled-components";

import {
  faCss3,
  faHtml5,
  faJava,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import breakpoint from "../../../Common/breakpoints";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    margin: 20px 20px;
    display: flex;
    display: flex;
    flex-direction: column;
  }
`;
const ParagraphContainer = styled.div`
@media only screen and ${breakpoint.device.xs} {
  width: 100%;
  height: 100%
  align-items: flex-start;
  justify-content: flex-start;
  
}
 
`;

const TextContainer = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    text-align: justify;
    font-size: 13px;
    margin: 10px;
    font-family: "Noto Sans JP", sans-serif;
  }
  @media only screen and ${breakpoint.device.sm} {
    font-size: 20px;
    margin: 20px;
  }
`;

const Phrase = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    margin-top: 20px;
    text-align: center;
  }
  @media only screen and ${breakpoint.device.sm} {
    margin-top: 30px;
    font-size: 25px;
  }
`;

const IconsContainer = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    padding-bottom: 15px;
    border-bottom: 2px solid #09e8ee;
  }
`;
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  @media only screen and ${breakpoint.device.xs} {
    font-size: 30px;
    margin: 10px;
  }
  @media only screen and ${breakpoint.device.sm} {
    font-size: 50px;
    margin: 25px;
  }
  @media only screen and ${breakpoint.device.lg} {
    font-size: 60px;
    margin: 30px;
  }
`;

const AboutSection = () => {
  return (
    <Container>
      <ParagraphContainer>
        <TextContainer>Hola, mi nombre es Leon Avancini.</TextContainer>
        <TextContainer>
          Mi edad es de 24 años, actualmente estoy terminando de cursar la
          carrera de analista en sistemas y tambien trabajo como desarrollador
          en una empresa de salud, gracias a este trabajo
          estoy teniendo la oportunidad de aprender mas a fondo sobre diferentes
          tecnologias como Javascript, HTML5, CSS, React.Js y Java.
        </TextContainer>
      </ParagraphContainer>
      <ParagraphContainer>
        <TextContainer>
          Como soy desarrollador Junior trabarme a la hora de lograr algunos
          objetivos es algo frecuente pero por suerte tengo un buen equipo de
          trabajo que me explica y ayuda cuando esto sucede. Tambien, por el
          mismo motivo es que estoy haciendo este portfolio, para reafirmar
          conocimientos y aprender otros.
        </TextContainer>
        <TextContainer>
          Soy una persona que me considero muy feliz y agradecido por la gente
          que me rodea, siempre intento compartir conocimientos y contagiar un
          poco de felicidad.
        </TextContainer>
      </ParagraphContainer>
      <Phrase>Skills</Phrase>

      <IconsContainer>
        <StyledFontAwesomeIcon icon={faHtml5} color={"#f06529"} />
        <StyledFontAwesomeIcon icon={faCss3} color={"#2965f1"} />
        <StyledFontAwesomeIcon icon={faJs} color={"#f0db4f"} />
        <StyledFontAwesomeIcon icon={faReact} color={"#00d8ff"} />
        <StyledFontAwesomeIcon icon={faJava} color={"#f89820"} />
      </IconsContainer>

      <Phrase>
        “Just when you think you’ve successfully navigated one obstacle, another
        emerges. But that’s what keeps life interest“
      </Phrase>
    </Container>
  );
};

export default AboutSection;
