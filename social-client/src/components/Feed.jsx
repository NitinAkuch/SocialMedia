import React from "react";
import styled from "styled-components";
import Share from "./Share";
import Post from "./Post";
import { Posts } from "../dummyData";

const Container = styled.div`
  flex: 5.5;
`;
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
