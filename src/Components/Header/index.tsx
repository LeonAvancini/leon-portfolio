import React from "react";
import { useState } from "react";
import styled from "styled-components";
import ProfilePhoto from "./ProfilePhoto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  background: rgba(255, 255, 255, 0);
  color: white;
  border-bottom: 1px solid white;
  border-bottom-left-radius: 200px;
`;

const DescriptionContainer = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  width: 650px;
  height: 100%;
`;

const Name = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: auto;
  font-size: 50px;
  font-family: "Press Start 2P", cursive;
`;
const Paragraph = styled.div`
  margin: 20px 0px 20px 0px;
  display: flex;
  align-items: flex-end;
  font-size: 15px;
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
      <DescriptionContainer>
        <Name>Leon Avancini</Name>
        {mouseOver && (
          <>
            <Paragraph>
              <FontAwesomeIcon
                color={"red"}
                style={{ marginRight: "10px" }}
                icon={faMapMarkerAlt}
              />
              Cordoba - Argentina
            </Paragraph>
          </>
        )}
      </DescriptionContainer>
    </Container>
  );
};
