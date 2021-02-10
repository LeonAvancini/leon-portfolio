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
    box-sizing: border-box;
  }
  @media only screen and ${breakpoint.device.sm} {
    height: 250px;
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
    justify-content: center;
    margin: auto;
    width: 500px;
    height: 100%;
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
    flex-direction: row;
    justify-content: center;
    font-size: 25px;
    margin-left: 0px;
    width: 100%;
  }
  @media only screen and ${breakpoint.device.lg} {
    font-size: 30px;
  }
`;
const ParagraphStyled = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    padding-bottom: 5px;
  }
  @media only screen and ${breakpoint.device.sm} {
    margin: 0px 5px;
  }
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
    color: #09e8ee;
    font-family: "Press Start 2P", cursive;
    margin-left: 40px;
  }
  @media only screen and ${breakpoint.device.sm} {
    flex-direction: row;
    justify-content: center;
    font-size: 10px;
    margin-left: 0px;
  }
  @media only screen and ${breakpoint.device.lg} {
    font-size: 13px;
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
