import React from "react";
import { useState } from "react";
import styled from "styled-components";
import ProfilePhoto from "./ProfilePhoto";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  background: rgba(255, 255, 255, 0);
  color: white;
  border-bottom: 1px solid white;
  border-bottom-left-radius: 200px;
`;

const Name = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 50px;
  font-family: "Press Start 2P", cursive;
`;

export default () => {
  const [mouseOver, setMouseOver] = useState(false);
  console.log("mouse", mouseOver);
  return (
    <Container
      onMouseOver={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      <ProfilePhoto />
      <Name>Leon Avancini</Name>
    </Container>
  );
};
