import { useRouter } from "next/router";
import LoginForm from "src/layouts/auth/login";
import PublicPage from "src/layouts/pageContainer/publicPage";

const LoginPage = (props) => {
  const router = useRouter();
  return (
    <PublicPage>
      <LoginForm
        onSuccess={() => {
          router.replace("/dashboard");
        }}
      />
    </PublicPage>
  );
};

export default LoginPage;
