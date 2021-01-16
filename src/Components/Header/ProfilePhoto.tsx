import React from "react";
import Photo from "./ProfileImage.png";
import styled from "styled-components";

const PhotoContainer = styled.div`
  border-radius: 100%;
  height: 400px;
  width: 400px;
  color: white;
  border: 1px solid white;
`;

const StyledImage = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
const ProfilePhoto = () => {
  return (
    <PhotoContainer>
      <StyledImage src={Photo}></StyledImage>
    </PhotoContainer>
  );
};

export default ProfilePhoto;
