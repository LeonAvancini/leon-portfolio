import React from "react";
import styled from "styled-components";
import ProfilePhoto from "./ProfilePhoto";
import breakpoint from "../../Common/breakpoints";

const Container = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    display: flex;
    width: 100%;
    height: 150px;
    // margin-top: 10%;
    // margin-left: 15%;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(173, 216, 230, 0.23573179271708689) 50%,
      rgba(12, 42, 88, 0) 100%
    );
    border: 2px solid white;
    border-bottom-left-radius: 200px;
    border-top-left-radius: 200px;
    color: red;
    box-sizing: border-box;
  }
  @media only screen and ${breakpoint.device.sm} {
    display: flex;
    height: 250px;
    width: 100%;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(173, 216, 230, 0.23573179271708689) 50%,
      rgba(12, 42, 88, 0) 100%
    );
    border: 2px solid white;
    border-bottom-left-radius: 200px;
    border-top-left-radius: 200px;
    color: red;
    box-sizing: border-box;
  }
  @media only screen and ${breakpoint.device.lg} {
  }
`;

const DescriptionContainer = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    width: 130px;
    height: 90%;
    margin-top: auto;
    padding-bottom: 5px;
  }
  @media only screen and ${breakpoint.device.sm} {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: auto;
    width: 300px;
    height: 100%;
    margin-top: auto;
    padding-bottom: 5px;
  }
  @media only screen and ${breakpoint.device.lg} {
  }
`;

const NameContainer = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5px;
    font-size: 16px;
    font-family: "Press Start 2P", cursive;
    padding-bottom: 15px;
    margin-left: 40px;
    color: white;
  }
  @media only screen and ${breakpoint.device.sm} {
    display: flex;
    font-size: 20px;
    width: 100%;
    font-family: "Press Start 2P", cursive;
    color: white;
  }
  @media only screen and ${breakpoint.device.lg} {
  }
`;
const ParagraphStyled = styled.div`
  padding-bottom: 5px;
`;
const Subtitle = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: flex-start;
    margin-bottom: 10px;
    font-size: 7px;
    color: lightblue;
    font-family: "Press Start 2P", cursive;
    margin-left: 40px;
  }
  @media only screen and ${breakpoint.device.sm} {
  }
  @media only screen and ${breakpoint.device.lg} {
  }
`;
const Header = () => {
  return (
    <Container>
      <ProfilePhoto />
      <DescriptionContainer>
        <NameContainer>
          <ParagraphStyled>Leon</ParagraphStyled>
          <ParagraphStyled>Avancini</ParagraphStyled>
        </NameContainer>
        <Subtitle>
          <ParagraphStyled>Jr. Full-Stack</ParagraphStyled>
          <ParagraphStyled>developer</ParagraphStyled>
        </Subtitle>
      </DescriptionContainer>
    </Container>
  );
};

export default Header;
