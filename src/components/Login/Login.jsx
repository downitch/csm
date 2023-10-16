import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Logo from "./logo.jpg";


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
  width: 70vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const LogoImage = styled.img`
  flex-shrink: 0;
  min-width: 100vw;
  min-height: 100vh;
`;

const LogoTitle = styled.span`
  color: white;
  font-size: 70pt;
  font-weight: bolder;
  position: absolute;
  text-shadow: 2px 2px #000000;
`;

const RightSide = styled.div`
  width: 30vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitleText = styled.span`
  font-weight: bolder;
  font-size: 32pt;
  margin-bottom: 25px;
`;

const InputHandleBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-bottom: 15px;
  width: 70%;
`;

const ErrorMessage = styled.span`
  font-size: 11pt;
  color: white;
`;

const LinkAway = styled(Link)`
  font-size: 11pt;
  color: #484873;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  &:visited {
    color: #484873;
    text-decoration: none;
  }
`;

const InputBox = styled.input`
  outline: none;
  border-radius: 5px;
  width: 96%;
  font-size: 18pt;
  padding: 1% 2%;
  margin-bottom: 2px;
`;

const LoginButton = styled.div`
  font-size: 18pt;
  padding: 12px 50px;
  border-radius: 12px;
  background: #2E2D88;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    
  &:hover {
    cursor: pointer;
    background: #1B1B51;
  }
`

const Login = () => {

  const [errorTriggered, setErrorTriggered] = useState(false);
  const [loginData, setLoginData] = useState("");
  const [passwordData, setPasswordData] = useState("");

  const handleLoginInput = (e) => setLoginData(e.target.value);

  const handlePasswordInput = (e) => setPasswordData(e.target.value);

  const handleSignin = () => {
    const data = {
      login: loginData,
      pass: passwordData
    };
    let response = true;
    if(data.login != "admin") response = false;
    // send this to backend and expect response...
    if(!response) return setErrorTriggered(true);
    let expires = new Date();
    expires.setTime(expires.getTime() + (24 * 60 * 60 * 1000)); // session valid for 24 hours
    document.cookie = `session=${(Math.random()*1e36).toString(36)}; expires=${expires.toUTCString()}; path=/`;
    document.location = "/dashboard";
  };

  useEffect(() => {
    setPasswordData("");
    setTimeout(() => {
      setErrorTriggered(false);
    }, 5000);
  }, [errorTriggered]);

  useEffect(() => {
    if(document.cookie) document.location = "/dashboard";
  }, []);

  return (
    <Wrap>
      <LeftSide>
        <LogoImage src={Logo} />
        <LogoTitle>
          Cafe<br />Management<br />System
        </LogoTitle>
      </LeftSide>
      <RightSide>
        <TitleText>Login Page</TitleText>
        <InputHandleBox>
          <ErrorMessage style={{ "color": errorTriggered ? "red" : "white" }}>Login and/or Password incorrect</ErrorMessage>
          <InputBox type="text" placeholder="Login" value={loginData} onChange={handleLoginInput} />
        </InputHandleBox>
        <InputHandleBox>
          <InputBox type="password" placeholder="Password" value={passwordData} onChange={handlePasswordInput} />
          <LinkAway to="/forgot">Forgot Password?</LinkAway>
        </InputHandleBox>
        <LoginButton onClick={handleSignin}>Submit</LoginButton>
      </RightSide>
    </Wrap>
  );
};

export default Login;
