import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
// const ParagraphContainer = styled.div`
//   width: 100%;
//   max-width: 750px;
//   height: 380px;
//   padding: 0px 45px;
//   margin: 70px 0px;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
//   &:last-child {
//     border-left: 1px solid white;
//   }
// `;

// const TextContainer = styled.div`
//   text-align: justify;
//   font-size: 21px;
//   margin: 10px;
//   font-family: "Noto Sans JP", sans-serif;
// `;

const AboutSection = () => {
  return (
    <Container>
      {/* <ParagraphContainer>
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
      </ParagraphContainer> */}
    </Container>
  );
};

export default AboutSection;
