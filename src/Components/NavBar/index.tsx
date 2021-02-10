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
  const [projectsSelected, setProjectsSelected] = useState(true);
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
        text="About Me"
        path="/about"
        value={() => changeFocus("about")}
        isSelected={aboutSelected}
      />
      <NavBarButton
        text="Projects"
        path="/projects"
        value={() => changeFocus("projects")}
        isSelected={projectsSelected}
      />
      <NavBarButton
        text="Contact"
        path="/contact"
        value={() => changeFocus("contact")}
        isSelected={contactSelected}
      />
    </Container>
  );
};

export default NavBar;
