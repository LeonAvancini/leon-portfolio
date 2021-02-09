import React from "react";
import styled from "styled-components";
import breakpoint from "../../../Common/breakpoints";

const Container = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    margin: 20px 20px;
    display: flex;
    display: flex;
    flex-direction: column;
  }
  @media only screen and ${breakpoint.device.sm} {
    color: blue;
  }
  @media only screen and ${breakpoint.device.lg} {
    color: green;
  }
`;
const ParagraphContainer = styled.div`
@media only screen and ${breakpoint.device.xs} {
  width: 100%;
  height: 100%
  align-items: flex-start;
  justify-content: flex-start;
  
}
@media only screen and ${breakpoint.device.sm} {
  color: blue;
}
@media only screen and ${breakpoint.device.lg} {
  color: green;
}
 
`;

const TextContainer = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    text-align: justify;
    font-size: 12px;
    margin: 10px;
    font-family: "Noto Sans JP", sans-serif;
  }
  @media only screen and ${breakpoint.device.sm} {
    color: blue;
  }
  @media only screen and ${breakpoint.device.lg} {
    color: green;
  }
`;

const Phrase = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    margin: auto;
    text-align: center;
  }
  @media only screen and ${breakpoint.device.sm} {
    color: blue;
  }
  @media only screen and ${breakpoint.device.lg} {
    color: green;
  }
`;

const AboutSection = () => {
  return (
    <Container>
      <ParagraphContainer>
        <TextContainer>
          Hola, si estas leyendo esto sabras que mi nombre es Leon Avancini,
          pero te cuento un poco mas sobre mi...
        </TextContainer>
        <TextContainer>
          Tengo 24 años, actualmente estoy terminando de cursar la carrera de
          analista en sistemas y hace 8 meses estoy trabajando como
          desarrollador en una empresa de salud llamada "SrSalud", gracias a
          este trabajo, que de hecho es el primero relacionado a lo que me gusta
          estoy teniendo la oportunidad de aprender mucho sobre diferentes
          tecnologias como Javascript, HTML5, CSS, React.Js y SQL.
        </TextContainer>
      </ParagraphContainer>
      <ParagraphContainer>
        <TextContainer>
          Como soy un desarrollador Jr. trabarme a la hora de hacer algunas
          cosas es algo frecuente pero por suerte tengo un buen equipo de
          trabajo que me saca de apuros (Hola Tito y Richard). Tambien por el
          mismo motivo, es que estoy haciendo mi portfolio, para reafirmar
          conocimientos y agarrar algunos otros.
        </TextContainer>
        <TextContainer>
          Soy una persona que me considero muy feliz y agradecido por lo que soy
          y la gente que me rodea, siempre intento compartir conocimientos y
          contagiar un poco de felicidad.
        </TextContainer>
      </ParagraphContainer>
      <Phrase>
        “Just when you think you’ve successfully navigated one obstacle, another
        emerges. But that’s what keeps life interest“
      </Phrase>
    </Container>
  );
};

export default AboutSection;
