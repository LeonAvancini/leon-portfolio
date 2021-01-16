import React from "react";
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

const DescriptionContainer = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  width: 650px;
  height: 100%;
`;

const Name = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
  font-size: 50px;
  font-family: "Press Start 2P", cursive;
`;

const Header = () => {
  return (
    <Container>
      <ProfilePhoto />
      <DescriptionContainer>
        <Name>Leon Avancini</Name>
      </DescriptionContainer>
    </Container>
  );
};

export default Header;
