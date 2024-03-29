import React from "react";
import styled from "styled-components";
import breakpoint from "../../Common/breakpoints";

const PhotoContainer = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    border-radius: 100%;
    height: 145px;
    width: 140px;
    color: white;
    border: 1px solid white;
  }
  @media only screen and ${breakpoint.device.sm} {
    height: 245px;
    width: 245px;
  }
  @media only screen and ${breakpoint.device.lg} {
    color: green;
  }
`;

const StyledImage = styled.img`
  @media only screen and ${breakpoint.device.xs} {
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  @media only screen and ${breakpoint.device.sm} {
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  @media only screen and ${breakpoint.device.lg} {
    color: green;
  }
`;

const ProfilePhoto = () => {
  return (
    <PhotoContainer>
      <StyledImage src={"https://i.imgur.com/42AEatY.png"}></StyledImage>
    </PhotoContainer>
  );
};

export default ProfilePhoto;
