import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import AboutSection from "../AboutSection";
import ContactSection from "../ContactSection";
import ProjectsSection from "../ProjectsSection";

const Container = styled.div`
  display: flex;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: white;
`;

const SectionContainer = () => {
  return (
    <Container>
      <Switch>
        <Route exact path="/" component={() => <>Principal</>} />
        <Route path="/projects">
          <ProjectsSection />
        </Route>
        <Route path="/about" component={AboutSection} />
        <Route path="/contact" component={ContactSection} />
      </Switch>
    </Container>
  );
};

export default SectionContainer;
