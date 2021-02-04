import React from "react";
import styled from "styled-components";
import NavBarButton from "./NavBarButton";
import breakpoint from "../../Common/breakpoints";

const Container = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    display: flex;
    justify-content: space-between;
    width: 320px;
    height: 40px;
    color: white;
  }
  @media only screen and ${breakpoint.device.sm} {
    color: blue;
  }
  @media only screen and ${breakpoint.device.lg} {
    color: green;
  }
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
