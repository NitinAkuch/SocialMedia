import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vw;
  background-color: #f0f2f5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWrapper = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
`;

const LoginLeft = styled.div`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

const LoginLogo = styled.h3`
  font-size: 50px;
  font-weight: 800;
  color: #1775ee;
  margin-bottom: 10px;
`;

const LoginDescription = styled.span`
  font-size: 24px;
`;

const LoginRight = styled.div`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

const LoginBox = styled.div`
  height: 400px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 5px 5px 5px gray;
`;

const LoginInput = styled.input`
  height: 50px;
  border-radius: 10px;
  border: 1px solid gray;
  font-size: 18px;
  padding-left: 20px;
  &:focus {
    outline: none;
  }
`;

const LoginButton = styled.button`
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: #1775ee;
  color: white;
  font-weight: 500;
  cursor: pointer;
`;

const LoginForgot = styled.span`
  text-align: center;
  color: #1775ee;
  cursor: pointer;
`;

const LoginRegister = styled.button`
  width: 60%;
  align-self: center;
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: #42b72a;
  color: white;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
`;

const Register = () => {
  return (
    <>
      <Container>
        <LoginWrapper>
          <LoginLeft>
            <LoginLogo>AngelloSocial</LoginLogo>
            <LoginDescription>
              Connect with Friends and the world around you on AngelloSocial.
            </LoginDescription>
          </LoginLeft>
          <LoginRight>
            <LoginBox>
              <LoginInput placeholder="Username" />
              <LoginInput placeholder="Email" />
              <LoginInput placeholder="Password" />
              <LoginInput placeholder="Password again" />
              <LoginButton>SignUp</LoginButton>
              <LoginForgot>Forgot Password</LoginForgot>
              <LoginRegister>Already Have an Account?</LoginRegister>
            </LoginBox>
          </LoginRight>
        </LoginWrapper>
      </Container>
    </>
  );
};

export default Register;
