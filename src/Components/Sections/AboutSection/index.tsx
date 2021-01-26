import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 40px 70px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const TextContainer = styled.div`
  font-size: 20px;
  margin: 10px;
  font-family: "Noto Sans JP", sans-serif;
`;
const TextColor = styled.div<{ color?: string }>`
  margin: 0px 2px;
  font-size: 24px;
  ${(props) => (props.color ? `color:${props.color}` : "color:white")};
`;

const AboutSection = () => {
  return (
    <Container>
      <TextContainer>
        Hola, si estas leyendo esto sabras que mi nombre es Leon Avancini, pero
        te cuento un poco mas sobre mi...
      </TextContainer>
      <TextContainer>
        Tengo 24 años, actualmente estoy terminando de cursar la carrera de
        analista en sistemas y hace 8 meses estoy trabajando como desarrollador
        en una empresa de salud llamada "SrSalud", gracias a este trabajo, que
        de hecho es el primero relacionado a lo que me gusta estoy teniendo la
        oportunidad de aprender mucho sobre diferentes tecnologias como
        Javascript, HTML5, CSS, React.Js y SQL.
      </TextContainer>
      <TextContainer>
        Como soy un desarrollador Jr. trabarme a la hora de hacer algunas cosas
        es algo frecuente pero por suerte tengo un buen equipo de trabajo que me
        saca de apuros (Hola Tito y Richard). Tambien por el mismo motivo, es
        que estoy haciendo mi portfolio, para reafirmar conocimientos y agarrar
        algunos otros.
      </TextContainer>
      <TextContainer>
        Soy una persona que me considero muy feliz y agradecido por lo que soy y
        la gente que me rodea, siempre intento compartir conocimientos y
        contagiar un poco de felicidad.
      </TextContainer>
      <TextContainer>
        Algo mas que quiero compartir pero no es mio, es esta frase:
        <br />
        <br />
        <TextColor color="lightblue">
          Just when you think you’ve successfully navigated one obstacle,
          another emerges. But that’s what keeps life interest.
        </TextColor>
      </TextContainer>
    </Container>
  );
};

export default AboutSection;
