import React, {useState, useEffect} from "react";
import styled from "styled-components";

import Logo from "../Login/logo.jpg";


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
`;

const Explanation = styled.div`
  width: 80%;
  align-text: left;
  margin-bottom: 30px;
`;

const Forgot = () => {

  const [loginData, setLoginData] = useState("");

  const handleLoginInput = (e) => setLoginData(e.target.value);

  const handleForgot = () => {
    const data = {
      login: loginData,
    };
    // send this to backend without expecting response...
    document.location = "/";
  };

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
        <TitleText>Forgot Password?</TitleText>
        <Explanation>
            <span>In order to reset the password, please, provide us with Login or E-mail address that are associated with your user account. You will receive an e-mail with further instructions if system finds your profile in the database.</span>
        </Explanation>
        <InputHandleBox>
          <InputBox type="text" placeholder="Login or E-mail" value={loginData} onChange={handleLoginInput} />
        </InputHandleBox>
        <LoginButton onClick={handleForgot}>Reset Password</LoginButton>
      </RightSide>
    </Wrap>
  );
};

export default Forgot;
