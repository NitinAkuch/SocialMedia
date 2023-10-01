import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";

const HomeContainer = styled.div`
  display: flex;
  width: 100%;
`;
const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeContainer>
        <Sidebar />
        <Feed />
        <Rightbar />
      </HomeContainer>
    </div>
  );
};

export default Home;
