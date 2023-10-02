import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  margin-left: 50px;
  cursor: pointer;
`;
const CloseFriendImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
const CloseFriendName = styled.span`
  margin-left: 15px;
`;
const CloseFriend = ({ user }) => {
  const pp = user.profilePicture;
  console.log(pp);
  return (
    <>
      <Container>
        <CloseFriendImage src={user.profilePicture} alt="ProfilePicture" />
        <CloseFriendName>{user.username}</CloseFriendName>
      </Container>
    </>
  );
};

export default CloseFriend;
