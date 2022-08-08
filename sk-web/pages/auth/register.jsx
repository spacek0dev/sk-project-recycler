import { useRouter } from "next/router";
import { UseTranslate } from "src/contexts/Translate";
import { useUi } from "src/contexts/UI/ui";
import RegisterForm from "src/layouts/auth/register";
import SkRegisterButtons from "src/layouts/auth/register/buttons";
import PublicPage from "src/layouts/pageContainer/publicPage";
import { RegisterContainer } from "src/styles/register";

const RegisterPage = (props) => {
  const { translate } = UseTranslate();
  const router = useRouter();
  const { notify } = useUi();
  return (
    <PublicPage
      styles={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <RegisterContainer>
        <h1>{translate("welcome")}</h1>
        <p style={{ width: "100%", fontWeight: "200", padding: "24px 0px", margin: 0, textAlign: "center" }}>{translate("complete_all_fields")}</p>
        <RegisterForm
          onSuccess={() => {
            router
              .replace("/auth/login")
              .then((result) => {
                notify(translate("user_registered"), "success");
              })
              .catch((err) => {});
          }}
        />
        <SkRegisterButtons />
      </RegisterContainer>
    </PublicPage>
  );
};
export default RegisterPage;
