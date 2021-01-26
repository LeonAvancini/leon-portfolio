import React from "react";
import styled from "styled-components";
import NavBarButton from "./NavBarButton";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 650px;
  height: 45px;
  color: white;
  margin: 0px 0px 0px 420px;
`;

const NavBar = () => {
  return (
    <Container>
      <NavBarButton text="About Me" path="/about" />
      <NavBarButton text="Projects" path="/projects" />
      <NavBarButton text="Contact" path="/contact" />
    </Container>
  );
};

export default NavBar;
