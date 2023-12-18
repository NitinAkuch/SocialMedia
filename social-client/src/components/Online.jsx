import React from "react";
import styled from "styled-components";

const RightBarfriend = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const RightBarProfileImgContainer = styled.div`
  margin-bottom: 10px;
  position: relative;
`;

const RightBarProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const RightBarOnline = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: limegreen;
  position: absolute;
  top: -2px;
  right: 0;
  border: 2px solid white;
`;

const RightBarUsername = styled.span`
  font-weight: 500;
`;

const Online = ({ user }) => {
  return (
    <>
      <RightBarfriend>
        <RightBarProfileImgContainer>
          <RightBarProfileImg src={user.profilePicture} alt="" />
          <RightBarOnline></RightBarOnline>
        </RightBarProfileImgContainer>
        <RightBarUsername>{user.username}</RightBarUsername>
      </RightBarfriend>
    </>
  );
};

export default Online;
