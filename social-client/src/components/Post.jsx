import React from "react";
import styled from "styled-components";

const Post = ({ post }) => {
  const Container = styled.div``;
  const Wrapper = styled.div``;
  const Top = styled.div``;
  const TopLeft = styled.div``;
  const TopRight = styled.div``;
  const Center = styled.div``;
  const ProfileImage = styled.img``;
  const Username = styled.span``;
  const PostDate = styled.span``;
  const PostImage = styled.img``;
  const Bottom = styled.div``;
  const Reactions = styled.span``;
  const BottomIcon = styled.span``;
  const BottomComment = styled.span``;
  return (
    <>
      <Container>
        <Wrapper>
          <Top>
            <TopLeft>
              <ProfileImage />
              <Username></Username>
              <PostDate></PostDate>
            </TopLeft>
            <TopRight></TopRight>
          </Top>
          <Center>
            <PostImage />
          </Center>
          <Bottom>
            <Reactions>
              <BottomIcon></BottomIcon>
            </Reactions>
            <BottomComment></BottomComment>
          </Bottom>
        </Wrapper>
      </Container>
    </>
  );
};

export default Post;
