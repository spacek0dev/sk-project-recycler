import { useState } from "react";
import SkButton from "src/components/button";
import SkCard from "src/components/card";
import SkForm from "src/components/form";
import SkInput from "src/components/input";
import SkSelect from "src/components/select";
import { API } from "src/constants/api";
import { useAxios } from "src/contexts/Axios";
import { UseTranslate } from "src/contexts/Translate";
import { useUi } from "src/contexts/UI/ui";
import { validateObject } from "src/utils";

const RegisterUserForm = (props) => {
  const { notify } = useUi();
  const { post } = useAxios();
  const { translate } = UseTranslate();
  const [areaId, setAreaId] = useState("");
  const [roleId, setRoleId] = useState("");
  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
    firstname: "",
    lastname: "",
    phone: "",
  });
  const onSubmitLogin = () => {
    const registerData = {
      roleId,
      areaId,
      person: form,
    };
    let isValid = validateObject(registerData);
    if (isValid === 0) {
      post(`${API.register}`, registerData)
        .then((result) => {
          notify(translate("user_registered"), "success");
          props.close();
        })
        .catch((err) => {});
    } else {
      notify(translate("complete_all_fields"), "error");
    }
  };
  return (
    <SkCard>
      <SkForm
        submit={() => {
          onSubmitLogin();
        }}
        styles={{ padding: "12px 24px", overflow: "auto", textAlign: "center" }}
      >
        <SkSelect
          key="areas"
          options={props.areas[props.areas.length - 1].areas}
          title={translate("ubication")}
          value={areaId}
          onChangeText={(value) => {
            setAreaId(value);
          }}
        />
        <SkSelect
          key="roles"
          options={props.roles}
          title={translate("roles")}
          value={roleId}
          onChangeText={(value) => {
            setRoleId(value);
          }}
        />
        <SkInput
          margin={"20px 0px"}
          value={form.username}
          title={translate("username")}
          onChangeText={(text) => {
            setForm({ ...form, username: text });
          }}
        />
        <SkInput
          margin={"20px 0px"}
          value={form.firstname}
          title={translate("firstname")}
          onChangeText={(text) => {
            setForm({ ...form, firstname: text });
          }}
        />
        <SkInput
          margin={"20px 0px"}
          value={form.lastname}
          title={translate("lastname")}
          onChangeText={(text) => {
            setForm({ ...form, lastname: text });
          }}
        />
        <SkInput
          margin={"20px 0px"}
          type={"password"}
          value={form.password}
          title={translate("password")}
          onChangeText={(text) => {
            setForm({ ...form, password: text });
          }}
        />
        <SkInput
          margin={"20px 0px"}
          type={"email"}
          value={form.email}
          title={translate("email")}
          onChangeText={(text) => {
            setForm({ ...form, email: text });
          }}
        />
        <SkInput
          margin={"20px 0px"}
          value={form.phone}
          title={translate("phone")}
          onChangeText={(text) => {
            setForm({ ...form, phone: text });
          }}
        />
        <SkButton
          margin={"5px 0px"}
          type={"submit"}
          text={"Registrar usuario"}
        />
      </SkForm>
    </SkCard>
  );
};
export default RegisterUserForm;
