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
  margin-bottom: 10px;
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

const Content = styled.div`
  width: 96%;
  margin-left: 2%;
  margin-right: 2%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const WeekRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const Timeslot = styled.div`
  width: 180px;
  height: 220px;
  border-radius: 7px;
  border: 1px solid black;
  margin-right: 20px;
  margin-bottom: 15px;
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background: #eeeeee;
`;

const DatePoint = styled.span`
  font-weight: bold;
  margin-bottom: 10px;
`;

const StatusPoint = styled.span`
  font-weight: lighter;
`;

const RolePoint = styled.span`
  font-weight: lighter;
`;

const ShiftPoint = styled.span`
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 30px;
`;

const DetailsButton = styled.div`
  border-radius: 5px;
  background: #8fce00;
  width: 140px;
  height: 35px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-left: 20px;

  &:hover {
    background: #7db500;
    cursor: pointer;
  }
`;

const TimeslotDetailed = () => {

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
        <Content>
        <WeekRow>
            <Timeslot>
              <DatePoint>
                12.11.2023
              </DatePoint>
              <StatusPoint>
                Status: free
              </StatusPoint>
              <RolePoint>
                Role: waiter
              </RolePoint>
              <ShiftPoint>
                Shift: 8AM-6PM
              </ShiftPoint>
              <DetailsButton>
                Details
              </DetailsButton>
              <DetailsButton>
                Reserve
              </DetailsButton>
            </Timeslot>
            <Timeslot>
              <DatePoint>
                12.11.2023
              </DatePoint>
              <StatusPoint>
                Status: free
              </StatusPoint>
              <RolePoint>
                Role: waiter
              </RolePoint>
              <ShiftPoint>
                Shift: 8AM-6PM
              </ShiftPoint>
              <DetailsButton>
                Details
              </DetailsButton>
              <DetailsButton>
                Reserve
              </DetailsButton>
            </Timeslot>
            <Timeslot>
              <DatePoint>
                12.11.2023
              </DatePoint>
              <StatusPoint>
                Status: free
              </StatusPoint>
              <RolePoint>
                Role: waiter
              </RolePoint>
              <ShiftPoint>
                Shift: 8AM-6PM
              </ShiftPoint>
              <DetailsButton>
                Details
              </DetailsButton>
              <DetailsButton>
                Reserve
              </DetailsButton>
            </Timeslot>
            <Timeslot>
              <DatePoint>
                12.11.2023
              </DatePoint>
              <StatusPoint>
                Status: free
              </StatusPoint>
              <RolePoint>
                Role: waiter
              </RolePoint>
              <ShiftPoint>
                Shift: 8AM-6PM
              </ShiftPoint>
              <DetailsButton>
                Details
              </DetailsButton>
              <DetailsButton>
                Reserve
              </DetailsButton>
            </Timeslot>
            <Timeslot>
              <DatePoint>
                12.11.2023
              </DatePoint>
              <StatusPoint>
                Status: free
              </StatusPoint>
              <RolePoint>
                Role: waiter
              </RolePoint>
              <ShiftPoint>
                Shift: 8AM-6PM
              </ShiftPoint>
              <DetailsButton>
                Details
              </DetailsButton>
              <DetailsButton>
                Reserve
              </DetailsButton>
            </Timeslot>
            <Timeslot>
              <DatePoint>
                12.11.2023
              </DatePoint>
              <StatusPoint>
                Status: free
              </StatusPoint>
              <RolePoint>
                Role: waiter
              </RolePoint>
              <ShiftPoint>
                Shift: 8AM-6PM
              </ShiftPoint>
              <DetailsButton>
                Details
              </DetailsButton>
              <DetailsButton>
                Reserve
              </DetailsButton>
            </Timeslot>
            <Timeslot>
              <DatePoint>
                12.11.2023
              </DatePoint>
              <StatusPoint>
                Status: free
              </StatusPoint>
              <RolePoint>
                Role: waiter
              </RolePoint>
              <ShiftPoint>
                Shift: 8AM-6PM
              </ShiftPoint>
              <DetailsButton>
                Details
              </DetailsButton>
              <DetailsButton>
                Reserve
              </DetailsButton>
            </Timeslot>
          </WeekRow>
          <WeekRow>
            <Timeslot>
              <DatePoint>
                12.11.2023
              </DatePoint>
              <StatusPoint>
                Status: free
              </StatusPoint>
              <RolePoint>
                Role: waiter
              </RolePoint>
              <ShiftPoint>
                Shift: 8AM-6PM
              </ShiftPoint>
              <DetailsButton>
                Details
              </DetailsButton>
              <DetailsButton>
                Reserve
              </DetailsButton>
            </Timeslot>
            <Timeslot>
              <DatePoint>
                12.11.2023
              </DatePoint>
              <StatusPoint>
                Status: free
              </StatusPoint>
              <RolePoint>
                Role: waiter
              </RolePoint>
              <ShiftPoint>
                Shift: 8AM-6PM
              </ShiftPoint>
              <DetailsButton>
                Details
              </DetailsButton>
              <DetailsButton>
                Reserve
              </DetailsButton>
            </Timeslot>
            <Timeslot>
              <DatePoint>
                12.11.2023
              </DatePoint>
              <StatusPoint>
                Status: free
              </StatusPoint>
              <RolePoint>
                Role: waiter
              </RolePoint>
              <ShiftPoint>
                Shift: 8AM-6PM
              </ShiftPoint>
              <DetailsButton>
                Details
              </DetailsButton>
              <DetailsButton>
                Reserve
              </DetailsButton>
            </Timeslot>
            <Timeslot>
              <DatePoint>
                12.11.2023
              </DatePoint>
              <StatusPoint>
                Status: free
              </StatusPoint>
              <RolePoint>
                Role: waiter
              </RolePoint>
              <ShiftPoint>
                Shift: 8AM-6PM
              </ShiftPoint>
              <DetailsButton>
                Details
              </DetailsButton>
              <DetailsButton>
                Reserve
              </DetailsButton>
            </Timeslot>
            <Timeslot>
              <DatePoint>
                12.11.2023
              </DatePoint>
              <StatusPoint>
                Status: free
              </StatusPoint>
              <RolePoint>
                Role: waiter
              </RolePoint>
              <ShiftPoint>
                Shift: 8AM-6PM
              </ShiftPoint>
              <DetailsButton>
                Details
              </DetailsButton>
              <DetailsButton>
                Reserve
              </DetailsButton>
            </Timeslot>
            <Timeslot>
              <DatePoint>
                12.11.2023
              </DatePoint>
              <StatusPoint>
                Status: free
              </StatusPoint>
              <RolePoint>
                Role: waiter
              </RolePoint>
              <ShiftPoint>
                Shift: 8AM-6PM
              </ShiftPoint>
              <DetailsButton>
                Details
              </DetailsButton>
              <DetailsButton>
                Reserve
              </DetailsButton>
            </Timeslot>
            <Timeslot>
              <DatePoint>
                12.11.2023
              </DatePoint>
              <StatusPoint>
                Status: free
              </StatusPoint>
              <RolePoint>
                Role: waiter
              </RolePoint>
              <ShiftPoint>
                Shift: 8AM-6PM
              </ShiftPoint>
              <DetailsButton>
                Details
              </DetailsButton>
              <DetailsButton>
                Reserve
              </DetailsButton>
            </Timeslot>
          </WeekRow>
          <WeekRow>
            <Timeslot>
              <DatePoint>
                12.11.2023
              </DatePoint>
              <StatusPoint>
                Status: free
              </StatusPoint>
              <RolePoint>
                Role: waiter
              </RolePoint>
              <ShiftPoint>
                Shift: 8AM-6PM
              </ShiftPoint>
              <DetailsButton>
                Details
              </DetailsButton>
              <DetailsButton>
                Reserve
              </DetailsButton>
            </Timeslot>
            <Timeslot>
              <DatePoint>
                12.11.2023
              </DatePoint>
              <StatusPoint>
                Status: free
              </StatusPoint>
              <RolePoint>
                Role: waiter
              </RolePoint>
              <ShiftPoint>
                Shift: 8AM-6PM
              </ShiftPoint>
              <DetailsButton>
                Details
              </DetailsButton>
              <DetailsButton>
                Reserve
              </DetailsButton>
            </Timeslot>
            <Timeslot>
              <DatePoint>
                12.11.2023
              </DatePoint>
              <StatusPoint>
                Status: free
              </StatusPoint>
              <RolePoint>
                Role: waiter
              </RolePoint>
              <ShiftPoint>
                Shift: 8AM-6PM
              </ShiftPoint>
              <DetailsButton>
                Details
              </DetailsButton>
              <DetailsButton>
                Reserve
              </DetailsButton>
            </Timeslot>
            <Timeslot>
              <DatePoint>
                12.11.2023
              </DatePoint>
              <StatusPoint>
                Status: free
              </StatusPoint>
              <RolePoint>
                Role: waiter
              </RolePoint>
              <ShiftPoint>
                Shift: 8AM-6PM
              </ShiftPoint>
              <DetailsButton>
                Details
              </DetailsButton>
              <DetailsButton>
                Reserve
              </DetailsButton>
            </Timeslot>
            <Timeslot>
              <DatePoint>
                12.11.2023
              </DatePoint>
              <StatusPoint>
                Status: free
              </StatusPoint>
              <RolePoint>
                Role: waiter
              </RolePoint>
              <ShiftPoint>
                Shift: 8AM-6PM
              </ShiftPoint>
              <DetailsButton>
                Details
              </DetailsButton>
              <DetailsButton>
                Reserve
              </DetailsButton>
            </Timeslot>
            <Timeslot>
              <DatePoint>
                12.11.2023
              </DatePoint>
              <StatusPoint>
                Status: free
              </StatusPoint>
              <RolePoint>
                Role: waiter
              </RolePoint>
              <ShiftPoint>
                Shift: 8AM-6PM
              </ShiftPoint>
              <DetailsButton>
                Details
              </DetailsButton>
              <DetailsButton>
                Reserve
              </DetailsButton>
            </Timeslot>
            <Timeslot>
              <DatePoint>
                12.11.2023
              </DatePoint>
              <StatusPoint>
                Status: free
              </StatusPoint>
              <RolePoint>
                Role: waiter
              </RolePoint>
              <ShiftPoint>
                Shift: 8AM-6PM
              </ShiftPoint>
              <DetailsButton>
                Details
              </DetailsButton>
              <DetailsButton>
                Reserve
              </DetailsButton>
            </Timeslot>
          </WeekRow>
        </Content>
      </RightSide>
    </Wrap>
  );
};

export default TimeslotDetailed;
