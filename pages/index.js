import React from "react";
import { logoutUser } from "../utils/authUser";
import styled from "styled-components";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import Feed from "../components/Feed";

function Home({ user }) {
  return (
    <>
      <Header user={user} />

      <main>
        <Sidebar />
        <Feed />
        {/* <Following /> */}
      </main>
    </>
  );
}

export default Home;
