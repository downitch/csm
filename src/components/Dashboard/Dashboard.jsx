import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100vw;
  heigth: 100vh;
  margin: 0;
  background: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LeftSide = styled.div`
  width: 14.9vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  border-right: 0.1vw solid black;
`;

const RightSide = styled.div`
  width: 85vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const TopMenuLeft = styled.div`
  width: 100%;
  height: 70px;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TopMenuRight = styled.div`
  width: 100%;
  height: 70px;
  border-bottom: 1px solid black;
`;

const HeaderMenu = styled.div`
  width: 90%;
  margin-left: 5%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const Dashboard = () => {

  const logOut = () => {
    document.cookie.split(';').forEach(function(c) {
      document.cookie = c.trim().split('=')[0] + '=;' + 'expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    });
    document.location = "/";
  };

  return (
    <Wrap>
      <LeftSide>
        <TopMenuLeft>
          <h3>Management System</h3>
        </TopMenuLeft>
      </LeftSide>
      <RightSide>
        <TopMenuRight>
          <HeaderMenu>
            <h3 onClick={logOut}>Log out</h3>
          </HeaderMenu>
        </TopMenuRight>
      </RightSide>
    </Wrap>
  );
};

export default Dashboard;
