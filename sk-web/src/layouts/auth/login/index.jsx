import Axios from "axios";
import { useEffect, useState } from "react";
import SkButton from "src/components/button";
import SkForm from "src/components/form";
import SkInput from "src/components/input";
import { API, server_url } from "src/constants/api";
import { UseAuth } from "src/contexts/Auth";
import { useAxios } from "src/contexts/Axios";
import { UseTranslate } from "src/contexts/Translate";
import { useUi } from "src/contexts/UI/ui";

const LoginForm = ({ onSuccess }) => {
  const { translate } = UseTranslate();
  const { showLoader, hideLoader, setIsLanding } = useUi();
  const { post } = useAxios();
  const { handlerLogin, sessionToken } = UseAuth();
  const [form, setForm] = useState({ username: "", password: "" });
  const onSubmitLogin = () => {
    showLoader();
    let { username, password } = form;
    if (username && password) {
      post(`${API.login}`, form)
        .then(async (result) => {
          if (result) {
            let { data: profile } = await Axios.get(`${server_url}${API.user}`, {
              headers: {
                Authorization: result.access_token.length >= 15 ? `Bearer ${result.access_token}` : "",
              },
            });
            handlerLogin(result.access_token, profile.data);
            onSuccess();
          }
        })
        .catch((err) => {
          console.log("err: ", err);
          let error = err?.response?.data;
          hideLoader();
        });
    }
  };
  useEffect(() => {
    if (sessionToken.length < 20) {
      setIsLanding(true);
    }
  }, [sessionToken]);
  return (
    <>
      <SkForm
        styles={{ textAlign: "center" }}
        submit={() => {
          onSubmitLogin();
        }}
      >
        <SkInput
          margin={"20px 0px"}
          onChangeText={(value) => {
            setForm({ ...form, username: value });
          }}
          value={form.username}
          type="text"
          title={translate("username")}
        />
        <SkInput
          margin={"20px 0px"}
          onChangeText={(value) => {
            setForm({ ...form, password: value });
          }}
          value={form.password}
          type="password"
          title={translate("password")}
        />
        <SkButton margin={"5px 0px"} type={"submit"} text={translate("login")} />
      </SkForm>
    </>
  );
};
export default LoginForm;
