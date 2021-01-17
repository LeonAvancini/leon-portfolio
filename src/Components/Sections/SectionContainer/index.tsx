import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import AboutSection from "../AboutSection";
import ContactSection from "../ContactSection";
import ProjectsSection from "../ProjectsSection";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid white;
  padding-top: 30px;
  background-color: black;
  width: 100%;
  height: 600px;
  color: white;
`;

const SectionContainer = () => {
  return (
    <Container>
      <Switch>
        <Route exact path="/"></Route>
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
