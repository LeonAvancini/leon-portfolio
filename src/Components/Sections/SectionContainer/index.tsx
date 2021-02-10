import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import AboutSection from "../AboutSection";
import ContactSection from "../ContactSection";
import ProjectsSection from "../ProjectsSection";
import breakpoint from "../../../Common/breakpoints";

const Container = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    display: flex;
    justify-content: space-between;
    border-top: 2px solid white;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 25%,
      rgba(173, 216, 230, 0.23573179271708689) 117%,
      rgba(12, 42, 88, 0) 100%
    );
    width: 100%;
    min-height: 100vh;
    color: white;
  }
`;

const SectionContainer = () => {
  return (
    <Container>
      <Switch>
        <Route exact path="/">
          <ProjectsSection />
        </Route>
        <Route path="/projects">
          <ProjectsSection />
        </Route>
        <Route path="/about">
          <AboutSection />
        </Route>
        <Route path="/contact">
          <ContactSection />
        </Route>
      </Switch>
    </Container>
  );
};

export default SectionContainer;
