import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";

import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import SectionContainer from "./Components/Sections/SectionContainer";

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: white;
`;

const App = () => {
  return (
    <Router>
      <Container>
        <Header />
        <NavBar />
        <SectionContainer />
      </Container>
    </Router>
  );
};

export default App;
