import React from "react";
import styled from "styled-components";
import { Users } from "../dummyData";
import {
  RssFeed,
  Chat,
  Group,
  Bookmark,
  WorkOutline,
  PlayCircleFilledOutlined,
  Event,
  School,
} from "@mui/icons-material";
import CloseFriend from "./CloseFriend";

const Container = styled.div`
  flex: 3;
  height: 100vh;
  overflow-y: scroll;
  position: sticky;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background-color: #f9f6f6;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(233, 230, 230);
  }
`;
const Wrapper = styled.div`
  padding: 20px;
`;
const SidebarList = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const ListItem = styled.ul`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin: 25px;
  cursor: pointer;
`;
const IconText = styled.span`
  margin-left: 15px;
`;
const SidebarButton = styled.button`
  width: 176px;
  padding: 10px;
  border: none;
  background-color: skyblue;
  height: 41px;
  border-radius: 5px;
  margin-left: 50px;
  cursor: pointer;
  font-weight: 500;
`;
const HrLine = styled.hr`
  margin: 20px 0px;
`;

const Sidebar = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <SidebarList>
            <ListItem>
              <RssFeed />
              <IconText>Feed</IconText>
            </ListItem>
            <ListItem>
              <Chat />
              <IconText>Chat</IconText>
            </ListItem>
            <ListItem>
              <Group />
              <IconText>Group</IconText>
            </ListItem>
            <ListItem>
              <Event />
              <IconText>Events</IconText>
            </ListItem>
            <ListItem>
              <School />
              <IconText>Courses</IconText>
            </ListItem>
            <ListItem>
              <WorkOutline></WorkOutline>
              <IconText>Jobs</IconText>
            </ListItem>
            <ListItem>
              <Bookmark />
              <IconText>Bookmarks</IconText>
            </ListItem>
            <ListItem>
              <PlayCircleFilledOutlined />
              <IconText>Videos</IconText>
            </ListItem>
          </SidebarList>
          <SidebarButton>Show More</SidebarButton>
          <HrLine />
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
            //<TryImage src={u.profilePicture} />
          ))}
        </Wrapper>
      </Container>
    </>
  );
};

export default Sidebar;
