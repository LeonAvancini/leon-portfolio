import React, { useState } from "react";
import styled from "styled-components";
import NavBarButton from "./NavBarButton";
import breakpoint from "../../Common/breakpoints";

const Container = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 40px;
    color: white;
  }
  @media only screen and ${breakpoint.device.sm} {
    height: 60px;
  }
  @media only screen and ${breakpoint.device.lg} {
    height: 80px;
  }
`;

const NavBar = () => {
  const [aboutSelected, setAboutSelected] = useState(false);
  const [projectsSelected, setProjectsSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);

  const changeFocus = (value: string) => {
    if (value === "about") {
      setAboutSelected(true);
      setProjectsSelected(false);
      setContactSelected(false);
    } else if (value === "projects") {
      setAboutSelected(false);
      setProjectsSelected(true);
      setContactSelected(false);
    } else {
      setAboutSelected(false);
      setProjectsSelected(false);
      setContactSelected(true);
    }
  };

  return (
    <Container>
      <NavBarButton
        text="Sobre Mí"
        path="/about"
        value={() => changeFocus("about")}
        selectedButton={aboutSelected}
      />
      <NavBarButton
        text="Proyectos"
        path="/projects"
        value={() => changeFocus("projects")}
        selectedButton={projectsSelected}
      />
      <NavBarButton
        text="Contacto"
        path="/contact"
        value={() => changeFocus("contact")}
        selectedButton={contactSelected}
      />
    </Container>
  );
};

export default NavBar;
