import React from "react";
import styled from "styled-components";
import { PermMedia, Room, EmojiEmotions, Label } from "@mui/icons-material";
import { Button } from "@mui/material";

const Container = styled.div`
  width: 100%;
  height: 170px;

  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
`;
const Wrapper = styled.div`
  padding: 10px;
`;
const ShareTop = styled.div`
  display: flex;
  align-items: center;
`;
const ProfilePicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
  cursor: pointer;
`;
const Input = styled.input`
  width: 70%;
  height: 35px;
  border: none;

  &:focus {
    outline: none;
  }
`;
const Hr = styled.hr`
  margin: 20px 0px;
  color: #000000;
`;
const ShareBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ShareOptions = styled.div`
  display: flex;
  margin-left: 15px;
  margin-top: 15px;
`;
const ShareOption = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;
`;
const OptionText = styled.span`
  margin-left: 10px;
`;

const Share = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <ShareTop>
            <ProfilePicture src="assets/person/1.jpg" />
            <Input placeholder="What's in your mind?" />
          </ShareTop>
          <Hr />
          <ShareBottom>
            <ShareOptions>
              <ShareOption>
                <PermMedia htmlColor="tomato" />
                <OptionText>Photo or Video</OptionText>
              </ShareOption>
              <ShareOption>
                <Room htmlColor="red" />
                <OptionText>Location</OptionText>
              </ShareOption>
              <ShareOption>
                <Label />
                <OptionText htmlColor="blue">Tag</OptionText>
              </ShareOption>
              <ShareOption>
                <EmojiEmotions htmlColor="yellow" />
                <OptionText>Feelings</OptionText>
              </ShareOption>
            </ShareOptions>
            <Button
              sx={{
                backgroundColor: "skyblue",
                border: "none",
                marginTop: "15px",
                marginRight: "80px",
                width: "100px",
                color: "blue",
                ":hover": {
                  backgroundColor: "green",
                  color: "white",
                  fontSize: "15px",
                },
              }}
            >
              Share
            </Button>
          </ShareBottom>
        </Wrapper>
      </Container>
    </>
  );
};

export default Share;
