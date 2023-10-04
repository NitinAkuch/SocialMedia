import { MoreVert, ThumbDownOffAlt, ThumbUp } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";
import { Users } from "../dummyData";

const Container = styled.div`
  width: 100%;
  border-radius: 10px;
  margin: 30px 0px;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
`;
const Wrapper = styled.div`
  padding: 10px;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TopLeft = styled.div`
  display: flex;
  align-items: center;
`;
const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;
const Username = styled.span`
  font-size: 15px;
  font-weight: 500;
  margin: 0 10px;
`;
const PostDate = styled.span`
  font-size: 12px;
`;
const TopRight = styled.div``;
const Center = styled.div`
  margin: 20px 0px;
`;
const PostImage = styled.img`
  margin-top: 20px;
  width: 100%;
  max-height: 500px;
  object-fit: contain;
`;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Reactions = styled.span`
  display: flex;
  align-items: center;
`;

const Likes = styled.span`
  font-size: 15px;
  margin-left: 10px;
`;
const BottomComment = styled.span`
  cursor: pointer;
  border-bottom: 1px dashed gray;
  font-size: 15px;
`;
const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <>
      <Container>
        <Wrapper>
          <Top>
            <TopLeft>
              <ProfileImage
                src={
                  Users.filter((u) => u.id === post?.userId)[0].profilePicture
                }
                alt=""
              />
              <Username>
                {Users.filter((u) => u.id === post?.userId)[0].username}
              </Username>
              <PostDate>{post.date}</PostDate>
            </TopLeft>
            <TopRight>
              <MoreVert />
            </TopRight>
          </Top>
          <Center>
            <PostImage src={post.photo} alt="" />
          </Center>
          <Bottom>
            <Reactions>
              <ThumbUp
                htmlColor="blue"
                sx={{
                  width: "24px",
                  height: "24px",
                  marginRight: "5px",
                  cursor: "pointer",
                }}
                onClick={likeHandler}
              />
              <ThumbDownOffAlt htmlColor="blue" onClick={likeHandler} />
              <Likes>{like} Peoples have liked it!</Likes>
            </Reactions>
            <BottomComment>{post.comment}comments</BottomComment>
          </Bottom>
        </Wrapper>
      </Container>
    </>
  );
};

export default Post;
