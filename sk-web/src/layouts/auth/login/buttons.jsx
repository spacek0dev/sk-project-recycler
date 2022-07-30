import styled from "styled-components";

const LoginButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 280px;
  max-width: 450px;
  height: 80px;
  box-shadow: 0 7px 14px 0 rgba(65, 69, 88, 0.1),
    0 3px 6px 0 rgba(0, 0, 0, 0.07);
`;
const LoginButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  transition: all 500ms ease;
  cursor: pointer;
  :hover {
    color: #2c7be5;
    transition: all 500ms ease;
  }
`;
const Divider = styled.div`
  width: 1px;
  height: 30px;
  background-color: #2c7be533;
`;
const SkLoginButtons = () => {
  return (
    <LoginButtons>
      <LoginButton>{"Register"}</LoginButton>
      <Divider />
      <LoginButton>{"help"}</LoginButton>
      <Divider />
      <LoginButton>{"Language"}</LoginButton>
    </LoginButtons>
  );
};

export default SkLoginButtons;
