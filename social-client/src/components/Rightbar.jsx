import React from "react";
import styled from "styled-components";
import { Users } from "../dummyData";
import Online from "./Online";
const Container = styled.div`
  flex: 3.5;
`;

const RightBar = styled.div`
  padding: 20px 20px 0 0;
`;

//HomeRightBarComponent
const BirthdayContainer = styled.div`
  display: flex;
  align-items: center;
`;

const BirthdayImg = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 50%;
  object-fit: cover;
`;

const BirthdayText = styled.span`
  font-weight: 300;
  font-size: 15px;
`;

const RightBarAd = styled.img`
  width: 100%;
  border-radius: 10px;
  margin: 30px 0;
`;

const RightBarTitle = styled.h4`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const RightFriendsList = styled.ul`
  padding: 20px;
  margin: 0;
  list-style: none;
`;

//ProfileRightBarComponent
const RightBarInfo = styled.div`
  margin-bottom: 30px;
`;

const RightBarInfoItem = styled.div`
  margin-bottom: 10px;
`;

const RightBarInfoKey = styled.span`
  font-weight: 500;
  margin-right: 15px;
  color: #555;
`;

const RightBarInfoValue = styled.span`
  font-weight: 300;
`;

const RightBarFollowings = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const RightBarFollowing = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  cursor: pointer;
`;

const RightBarFollowingImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

const RightBarFollowingName = styled.span``;

const Rightbar = ({ profile }) => {
  const HomeRightBar = () => {
    return (
      <>
        <BirthdayContainer>
          <BirthdayImg src="assets/person/1.jpg" />
          <BirthdayText>
            <b>Nitin Shinde</b>'s Birthday Today.
          </BirthdayText>
        </BirthdayContainer>
        <RightBarAd src="assets/person/2.jpg" />
        <RightBarTitle sx={{ marginLeft: "20px" }}>
          Online Friends
        </RightBarTitle>
        <RightFriendsList>
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </RightFriendsList>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <RightBarTitle>User Information</RightBarTitle>
        <RightBarInfo>
          <RightBarInfoItem>
            <RightBarInfoKey>City:</RightBarInfoKey>
            <RightBarInfoValue>Pune</RightBarInfoValue>
          </RightBarInfoItem>
        </RightBarInfo>
        <RightBarInfo>
          <RightBarInfoItem>
            <RightBarInfoKey>From:</RightBarInfoKey>
            <RightBarInfoValue>Swargate</RightBarInfoValue>
          </RightBarInfoItem>
        </RightBarInfo>
        <RightBarInfo>
          <RightBarInfoItem>
            <RightBarInfoKey>Relationship:</RightBarInfoKey>
            <RightBarInfoValue>Single</RightBarInfoValue>
          </RightBarInfoItem>
        </RightBarInfo>
        <RightBarTitle>User Friends</RightBarTitle>
        <RightBarFollowings>
          <RightBarFollowing>
            <RightBarFollowingImg src="assets/person/2.jpg" alt="" />
            <RightBarFollowingName>Sherlock Holmes</RightBarFollowingName>
          </RightBarFollowing>
          <RightBarFollowing>
            <RightBarFollowingImg src="assets/person/3.jpg" alt="" />
            <RightBarFollowingName>Sherlock Holmes</RightBarFollowingName>
          </RightBarFollowing>
          <RightBarFollowing>
            <RightBarFollowingImg src="assets/person/4.jpg" alt="" />
            <RightBarFollowingName>Sherlock Holmes</RightBarFollowingName>
          </RightBarFollowing>
          <RightBarFollowing>
            <RightBarFollowingImg src="assets/person/5.jpg" alt="" />
            <RightBarFollowingName>Sherlock Holmes</RightBarFollowingName>
          </RightBarFollowing>
          <RightBarFollowing>
            <RightBarFollowingImg src="assets/person/6.jpg" alt="" />
            <RightBarFollowingName>Sherlock Holmes</RightBarFollowingName>
          </RightBarFollowing>
          <RightBarFollowing>
            <RightBarFollowingImg src="assets/person/7.jpg" alt="" />
            <RightBarFollowingName>Sherlock Holmes</RightBarFollowingName>
          </RightBarFollowing>
        </RightBarFollowings>
      </>
    );
  };
  return (
    <>
      <Container>
        <RightBar>{profile ? <ProfileRightBar /> : <HomeRightBar />}</RightBar>
      </Container>
    </>
  );
};

export default Rightbar;
