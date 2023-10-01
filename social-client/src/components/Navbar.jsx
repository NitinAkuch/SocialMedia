import React from "react";
import styled from "styled-components";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";

const Container = styled.div`
  height: 70px;
  width: 100%;
  background-color: skyblue;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
`;
const TopbarLeft = styled.div`
  flex: 3;
`;
const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;
const Credit = styled.span`
  font-size: 10px;
  color: white;
  font-style: italic;
  margin-top: 10px;
`;
const Logo = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: white;

  cursor: pointer;
`;
const TopbarCenter = styled.div`
  flex: 5;
`;
const SearchBar = styled.div`
  width: 100%;
  height: 30px;
  background-color: white;
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
const SearchBarInput = styled.input`
  width: 80%;
  border: none;
  height: 25px;
  &:focus {
    outline: none;
  }
`;
const TopbarRight = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
`;
const TopbarLinks = styled.div`
  margin-right: 10px;
  font-size: 16px;
`;
const TopbarLinksSpan = styled.span`
  margin-left: 10px;
  cursor: pointer;
`;
const TopbarIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const TopbarIconItem = styled.div`
  margin: 15px;
  cursor: pointer;
  position: relative;
`;
const TopbarIconBadge = styled.div`
  width: 15px;
  height: 15px;
  background-color: red;
  border-radius: 50%;
  color: white;
  position: absolute;
  top: -5px;
  right: -5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;
const ProfilePicture = styled.img``;

const Navbar = () => {
  return (
    <Container>
      <TopbarLeft>
        <LogoDiv>
          <Logo>SocialBook</Logo>
          <Credit> -Developed by Nitin Akuch</Credit>
        </LogoDiv>
      </TopbarLeft>
      <TopbarCenter>
        <SearchBar>
          <Search></Search>
          <SearchBarInput placeholder="Search Your Friends! and Friend's Posts!"></SearchBarInput>
        </SearchBar>
      </TopbarCenter>
      <TopbarRight>
        <TopbarLinks>
          <TopbarLinksSpan>Homepage</TopbarLinksSpan>
          <TopbarLinksSpan>Timeline</TopbarLinksSpan>
        </TopbarLinks>
        <TopbarIcons>
          <TopbarIconItem>
            <Person />
            <TopbarIconBadge>1</TopbarIconBadge>
          </TopbarIconItem>
          <TopbarIconItem>
            <Chat />
            <TopbarIconBadge>2</TopbarIconBadge>
          </TopbarIconItem>
          <TopbarIconItem>
            <Notifications />
            <TopbarIconBadge>1</TopbarIconBadge>
          </TopbarIconItem>
        </TopbarIcons>
        <ProfilePicture></ProfilePicture>
      </TopbarRight>
    </Container>
  );
};

export default Navbar;
