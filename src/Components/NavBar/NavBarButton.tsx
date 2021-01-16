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
  padding: 10px;
  border-right: 1px solid white;
  border-top-right-radius: 60px;
  width: 31px;
`;
const LinkStyled = styled(Link)`
  background: none;
  border: 0;
  color: inherit;
  cursor: pointer;
  line-height: 5px;
  font-size: 25px;
  overflow: visible;
  padding: 45px 0px 0px 7px;
  border-bottom: 0.5px solid white;
  margin-right: 10px;
  text-decoration: none;
  &:hover {
    line-height: 0px;
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
