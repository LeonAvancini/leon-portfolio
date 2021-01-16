import React from "react";
import styled from "styled-components";
import NavBarButton from "./NavBarButton";
import { BrowserRouter as Router } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 650px;
  height: 60px;
  color: white;
  margin: 0px 0px 0px 420px;
`;

const NavBar = () => {
  return (
    <Container>
      <Router>
        <NavBarButton text="Projects" path="/projects" />
        <NavBarButton text="About Me" path="/about" />
        <NavBarButton text="Contact" path="/contact" />
      </Router>
    </Container>
  );
};

export default NavBar;
