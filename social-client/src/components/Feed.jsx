import React from "react";
import styled from "styled-components";
import Share from "./Share";
import Post from "./Post";
import { Posts } from "../dummyData";

const Container = styled.div`
  flex: 5.5;
`;
// const PostContainer = styled.div`
//   overflow-y: scroll;
//   /* position: sticky; */
//   &::-webkit-scrollbar {
//     width: 5px;
//   }
//   &::-webkit-scrollbar-track {
//     background-color: #f9f6f6;
//   }
//   &::-webkit-scrollbar-thumb {
//     background-color: rgb(233, 230, 230);
//   }
// `;
const Feed = () => {
  return (
    <>
      <Container>
        <Share />

        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </Container>
    </>
  );
};

export default Feed;
