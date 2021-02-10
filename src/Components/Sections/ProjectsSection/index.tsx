import React from "react";
import styled from "styled-components";

import breakpoint from "../../../Common/breakpoints";
import MovieRankImage from "./Images/movieRankImage.jpg";
import LeonPortfolioImage from "./Images/leonPortfolioImage.jpg";

const Container = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    display: flex;
    margin: 30px auto;
    flex-direction: column;
    border-left: 2px solid white;
    border-right: 2px solid white;
    border: 10px;
  }
  @media only screen and ${breakpoint.device.lg} {
    flex-direction: row;
    justify-content: space-evenly;
    height: 100%;
    flex-wrap: wrap;
  }
`;
const ProjectContainer = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    display: flex;
    cursor: pointer;
    flex-direction: column;
    border-radius: 5px;
    background: none;
    margin: 20px auto;
    max-width: 80%;
  }
  @media only screen and ${breakpoint.device.lg} {
    max-height: 100%;
    max-width: 40%;
    margin: 30px 20px 50px 20px;
    position: relative;
  }
`;

const ProjectTitle = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    margin: 0px auto;
    color: black;
    font-weight: bold;
    font-family: arial;
    background: white;
    padding: 5px 10px;
    font-size: 13px;
    border-bottom-right-radius: 5px;
    border-top-left-radius: 5px;
    border-right: 2px solid black;
    border-bottom: 2px solid black;
    position: absolute;
  }
  @media only screen and ${breakpoint.device.sm} {
    font-size: 20px;
  }
`;

const ColorTitle = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    font-size: 13px;
    color: orange;
  }
  @media only screen and ${breakpoint.device.sm} {
    font-size: 20px;
  }
`;
const ProjectImage = styled.img`
  @media only screen and ${breakpoint.device.xs} {
    border-radius: 5px;
    max-width: 100%;
    border: 2px solid white;
  }
`;

const HrStyled = styled.hr`
  @media only screen and ${breakpoint.device.xs} {
    width: 25%;
    margin: 30px auto;
    border-color: #09e8ee;
  }
  @media only screen and ${breakpoint.device.lg} {
    display: none;
  }
`;

const ProjectsSection = () => {
  return (
    <Container>
      <ProjectContainer
        onClick={() =>
          window.open("https://github.com/LeonAvancini/leon-portfolio")
        }
      >
        <ProjectTitle>Leon Avancini - Portfolio</ProjectTitle>
        <ProjectImage src={LeonPortfolioImage} />
      </ProjectContainer>
      <HrStyled />
      <ProjectContainer
        onClick={() =>
          window.open("https://github.com/LeonAvancini/movie-ranking")
        }
      >
        <ProjectTitle>
          Movie-Ranking <ColorTitle>(en desarrollo)</ColorTitle>
        </ProjectTitle>
        <ProjectImage src={MovieRankImage} />
      </ProjectContainer>
    </Container>
  );
};

export default ProjectsSection;
