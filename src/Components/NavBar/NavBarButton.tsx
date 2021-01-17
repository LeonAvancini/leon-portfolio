import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
`;

const Line = styled.div`
  display: flex;
  background: none;
  color: inherit;
  border-right: 3px solid white;
  border-top-right-radius: 60px;
  width: 31px;
`;
const LinkStyled = styled(Link)`
  font-family: "Press Start 2P", cursive;
  background: none;
  border: 0;
  color: inherit;
  cursor: pointer;
  line-height: 5px;
  font-size: 15px;
  overflow: visible;
  padding: 30px 0px 0px 7px;
  text-decoration: none;
  &:hover {
    line-height: 0px;
    color: yellow;
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
