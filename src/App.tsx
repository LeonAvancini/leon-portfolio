import React from "react";
import { HashRouter } from "react-router-dom";
import styled from "styled-components";

import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import SectionContainer from "./Components/Sections/SectionContainer";
import breakpoint from "./Common/breakpoints";

const Container = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    height: 100%;
    color: white;
  }
`;

const App = () => {
  return (
    <HashRouter basename="/">
      <Container>
        <Header />
        <NavBar />
        <SectionContainer />
      </Container>
    </HashRouter>
  );
};

export default App;
