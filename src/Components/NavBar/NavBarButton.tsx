import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import breakpoint from "../../Common/breakpoints";

const Container = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    display: flex;
    justify-content: flex-end;
  }
  @media only screen and ${breakpoint.device.sm} {
    color: blue;
  }
  @media only screen and ${breakpoint.device.lg} {
    color: green;
  }
`;

const Line = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    // display: flex;
    // background: none;
    // color: inherit;
    // border-bottom: 1px solid white;
    // // border-right: 3px solid white;
    // // border-top-right-radius: 20px;
    // width: 10px;
  }
  @media only screen and ${breakpoint.device.sm} {
    color: blue;
  }
  @media only screen and ${breakpoint.device.lg} {
    color: green;
  }
`;
const LinkStyled = styled(Link)`
  @media only screen and ${breakpoint.device.xs} {
    font-family: "Press Start 2P", cursive;
    background: none;
    border: 0;
    color: inherit;
    cursor: pointer;
    // line-height: 5px;
    font-size: 9px;
    overflow: visible;
    margin-top: 20px;
    padding: 5px;
    text-decoration: none;
    &:hover {
      line-height: 0px;
      color: lightblue;
    }
  }
  @media only screen and ${breakpoint.device.sm} {
    color: blue;
  }
  @media only screen and ${breakpoint.device.lg} {
    color: green;
  }
`;

interface NavBarButtonProps {
  text: string;
  path: string;
}

const NavBarButton = ({ text, path }: NavBarButtonProps) => {
  return (
    <Container>
      <Line />
      <LinkStyled to={path}>{text}</LinkStyled>
    </Container>
  );
};

export default NavBarButton;
