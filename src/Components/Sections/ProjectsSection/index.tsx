import React from "react";
import styled from "styled-components";
import breakpoint from "../../../Common/breakpoints";

const Container = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    display: flex;
    margin: 30px auto;
    flex-direction: column;
    border-left: 2px solid white;
    border-right: 2px solid white;
    border: 10px;
  }
  @media only screen and ${breakpoint.device.sm} {
    color: blue;
  }
  @media only screen and ${breakpoint.device.lg} {
    color: green;
  }
`;
const ProjectContainer = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    display: flex;
    cursor: pointer;
    flex-direction: column;
    margin-bottom: 20px;
    border-radius: 5px;
    background: white;
  }
  @media only screen and ${breakpoint.device.sm} {
  }
  @media only screen and ${breakpoint.device.lg} {
  }
`;

const ProjectTitle = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    margin: 0 auto;
    color: black;
    font-family: cursive;
    font-weight: bold;
    font-family: arial;
  }
  @media only screen and ${breakpoint.device.sm} {
  }
  @media only screen and ${breakpoint.device.lg} {
  }
`;
const ProjectImage = styled.img`
  @media only screen and ${breakpoint.device.xs} {
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-top: 2px solid white;
  }
  @media only screen and ${breakpoint.device.sm} {
  }
  @media only screen and ${breakpoint.device.lg} {
  }
`;

const Line = styled.hr`
  @media only screen and ${breakpoint.device.xs} {
    color: white;
    width: 30px;
    border: 1.5px solid white;
    transform: rotate(90deg);
    margin-bottom: 25px;
  }
  @media only screen and ${breakpoint.device.sm} {
  }
  @media only screen and ${breakpoint.device.lg} {
  }
`;

const ProjectsSection = () => {
  return (
    <Container>
      <ProjectContainer onClick={() => window.open("http://www.google.com")}>
        <ProjectTitle>Project 1</ProjectTitle>
        <ProjectImage src="https://picsum.photos/250" />
      </ProjectContainer>
      <Line />
      <ProjectContainer>
        <ProjectTitle>Project 2</ProjectTitle>
        <ProjectImage src="https://picsum.photos/250" />
      </ProjectContainer>
      <Line />
      <ProjectContainer>
        <ProjectTitle>Project 3</ProjectTitle>
        <ProjectImage src="https://picsum.photos/250" />
      </ProjectContainer>
    </Container>
  );
};

export default ProjectsSection;
