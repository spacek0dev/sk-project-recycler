import { useRouter } from "next/router";
import LoginForm from "src/layouts/auth/login";
import LoginButtons from "src/layouts/auth/login/buttons";
import PublicPage from "src/layouts/pageContainer/publicPage";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  width: 100%;
  max-width: 420px;
  height: 100%;
  flex: 1;
  margin: calc(50% - 400px) auto;
  background-color: #fff;
  height: 420px;
  padding: 20px 24px;
  box-shadow: 0 7px 14px 0 rgba(65, 69, 88, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.07);
`;

const LoginPage = (props) => {
  const router = useRouter();
  return (
    <PublicPage>
      <LoginContainer>
        <h1>Welcome</h1>
        <LoginForm
          onSuccess={() => {
            router.replace("/dashboard");
          }}
        />
        <LoginButtons />
      </LoginContainer>
    </PublicPage>
  );
};

export default LoginPage;
