import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

const App = () => {
  return (
    <Container>
      <Router>
        <Switch>
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
      </Router>
    </Container>
  );
};

export default App;
