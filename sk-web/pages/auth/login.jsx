import { useRouter } from "next/router";
import { useUi } from "src/contexts/UI/ui";
import useMount from "src/hooks/useMount";
import LoginForm from "src/layouts/auth/login";
import LoginButtons from "src/layouts/auth/login/buttons";
import PublicPage from "src/layouts/pageContainer/publicPage";
import { LoginContainer } from "src/styles/login";

const LoginPage = (props) => {
  const router = useRouter();
  const { hideLoader } = useUi();
  useMount(() => {
    hideLoader();
  });
  return (
    <PublicPage
      styles={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
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
