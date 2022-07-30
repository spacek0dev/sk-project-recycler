import Axios from "axios";
import { useState } from "react";
import SkButton from "src/components/button";
import SkForm from "src/components/form";
import SkInput from "src/components/input";
import { API, server_url } from "src/constants/api";
import { UseAuth } from "src/contexts/Auth";
import { useAxios } from "src/contexts/Axios";
import { useUi } from "src/contexts/UI/ui";
import Teaser from "src/styles";

const LoginForm = ({ onSuccess }) => {
  const { showLoader, hideLoader } = useUi();
  const { get, post } = useAxios();
  const { saveSession, handlerLogin } = UseAuth();
  const [form, setForm] = useState({ username: "", password: "" });
  const onSubmitLogin = () => {
    showLoader();
    let { username, password } = form;
    if (username && password) {
      post(`${API.login}`, form)
        .then(async (result) => {
          if (result) {
            let { data: profile } = await Axios.get(
              `${server_url}${API.user}`,
              {
                headers: {
                  Authorization:
                    result.access_token.length >= 15
                      ? `Bearer ${result.access_token}`
                      : "",
                },
              }
            );
            handlerLogin(result.access_token, profile.data);
            hideLoader();
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
  return (
    <>
      <Teaser />
      <SkForm
        submit={() => {
          onSubmitLogin();
        }}
      >
        <SkInput
          onChangeText={(value) => {
            setForm({ ...form, username: value });
          }}
          value={form.username}
          type="text"
          title={"Username"}
        />
        <SkInput
          onChangeText={(value) => {
            setForm({ ...form, password: value });
          }}
          value={form.password}
          type="password"
          title={"Contraseña"}
        />
        <SkButton type={"submit"} text={"Iniciar sesion"} />
      </SkForm>
    </>
  );
};
export default LoginForm;
