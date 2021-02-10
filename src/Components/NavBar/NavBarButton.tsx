import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import breakpoint from "../../Common/breakpoints";

const Container = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    display: flex;
    justify-content: flex-end;
  }
`;

const Line = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    // display: flex;
    // background: none;
    // color: inherit;
    // border-bottom: 1px solid white;
    // width: 10px;
  }
`;
const LinkStyled = styled(Link)<{ selected?: boolean }>`
  @media only screen and ${breakpoint.device.xs} {
    font-family: "Press Start 2P", cursive;
    background: none;
    border: 0;
    color: inherit;
    cursor: pointer;
    // line-height: 5px;
    font-size: 9px;
    overflow: visible;
    margin-top: auto;
    padding: 5px;
    text-decoration: none;
    color: ${(props) => (props.selected ? ` #09e8ee` : `white`)};
    margin-bottom: ${(props) => (props.selected ? `10%` : ``)};
  }
  @media only screen and ${breakpoint.device.sm} {
    font-size: 13px;
    padding: 10px;
  }
  @media only screen and ${breakpoint.device.lg} {
    font-size: 15px;
    padding: 15px;
  }
`;

interface NavBarButtonProps {
  text: string;
  path: string;
  value: () => void;
  selectedButton: boolean;
}

const NavBarButton = ({
  text,
  path,
  value,
  selectedButton,
}: NavBarButtonProps) => {
  return (
    <Container onClick={() => value()}>
      <Line />
      <LinkStyled selected={selectedButton} to={path}>
        {text}
      </LinkStyled>
    </Container>
  );
};

export default NavBarButton;
