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
const ContactSection = () => {
  return (
    <Container>
      <TextContainer>GitHub</TextContainer>
      <TextContainer>LinkedIn</TextContainer>
      <TextContainer>Mail</TextContainer>
      <TextContainer>Phone</TextContainer>
    </Container>
  );
};

export default ContactSection;
