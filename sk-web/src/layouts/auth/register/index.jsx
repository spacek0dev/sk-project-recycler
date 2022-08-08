import Axios from "axios";
import { useEffect, useState } from "react";
import SkButton from "src/components/button";
import SkForm from "src/components/form";
import SkInput from "src/components/input";
import SkSelect from "src/components/select";
import { API, server_url } from "src/constants/api";
import { useAppContext } from "src/contexts/App";
import { UseAuth } from "src/contexts/Auth";
import { useAxios } from "src/contexts/Axios";
import { UseTranslate } from "src/contexts/Translate";
import { useUi } from "src/contexts/UI/ui";
import { ItemForm, ItemsForm } from "src/layouts/dashboard/styles";
import { validateObject } from "src/utils";

const RegisterForm = ({ onSuccess }) => {
  const { translate } = UseTranslate();
  const { notify, showLoader, hideLoader, setIsLanding } = useUi();
  const { post } = useAxios();
  const { sessionToken } = UseAuth();
  const [areasId, setAreaId] = useState("");
  const [organizationId, setOrganizationId] = useState("");
  const { data } = useAppContext();
  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
    firstname: "",
    lastname: "",
    phone: "",
    dni: "",
    address: "",
    addressReference: "",
    terms_conditions: true,
  });
  const clearForm = () => {
    setForm({
      username: "",
      password: "",
      email: "",
      firstname: "",
      lastname: "",
      phone: "",
      dni: "",
      address: "",
      addressReference: "",
      terms_conditions: true,
    });
    setAreaId("");
    setOrganizationId("");
  };
  const onSubmitRegister = () => {
    const roleId = data.roles.rows.find((v) => v.name === "Cliente" || v.name == "Client");
    showLoader();
    const registerData = {
      roleId: roleId._id,
      areasId,
      person: form,
      organizationId: "null",
    };
    let isValid = validateObject(registerData);
    registerData.organizationId = organizationId ? organizationId : null;
    if (isValid === 0) {
      post(`${API.register}`, registerData)
        .then((result) => {
          clearForm();
          onSuccess();
        })
        .catch((err) => {
          console.log("err: ", err);
          hideLoader();
        });
    } else {
      hideLoader();
      notify(translate("complete_all_fields"), "error");
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
        submit={() => {
          onSubmitRegister();
        }}
        styles={{ textAlign: "center", overflow: "auto" }}
      >
        <ItemsForm>
          <ItemForm>
            {data?.areas.length > 0 && (
              <SkSelect
                key="areas"
                options={data?.areas[data.areas.length - 1].areas}
                title={translate("ubication")}
                value={areasId}
                onChangeText={(value) => {
                  setAreaId(value);
                }}
              />
            )}
          </ItemForm>
          <ItemForm>
            <SkInput
              margin={"20px 0px"}
              value={form.username}
              title={translate("username")}
              onChangeText={(text) => {
                setForm({ ...form, username: text });
              }}
            />
          </ItemForm>
          <ItemForm>
            <SkInput
              margin={"20px 0px"}
              value={form.firstname}
              title={translate("firstname")}
              onChangeText={(text) => {
                setForm({ ...form, firstname: text });
              }}
            />
          </ItemForm>
          <ItemForm>
            <SkInput
              margin={"20px 0px"}
              value={form.lastname}
              title={translate("lastname")}
              onChangeText={(text) => {
                setForm({ ...form, lastname: text });
              }}
            />
          </ItemForm>
          <ItemForm>
            <SkInput
              margin={"20px 0px"}
              type={"password"}
              value={form.password}
              title={translate("password")}
              onChangeText={(text) => {
                setForm({ ...form, password: text });
              }}
            />
          </ItemForm>
          <ItemForm>
            <SkInput
              margin={"20px 0px"}
              type={"email"}
              value={form.email}
              title={translate("email")}
              onChangeText={(text) => {
                setForm({ ...form, email: text });
              }}
            />
          </ItemForm>
          <ItemForm>
            <SkInput
              margin={"20px 0px"}
              value={form.phone}
              title={translate("phone")}
              onChangeText={(text) => {
                setForm({ ...form, phone: text });
              }}
            />
          </ItemForm>
          <ItemForm>
            <SkInput
              margin={"20px 0px"}
              value={form.dni}
              title={translate("dni")}
              onChangeText={(text) => {
                setForm({ ...form, dni: text });
              }}
            />
          </ItemForm>
          <ItemForm>
            <SkInput
              margin={"20px 0px"}
              value={form.address}
              title={translate("address")}
              onChangeText={(text) => {
                setForm({ ...form, address: text });
              }}
            />
          </ItemForm>
          <ItemForm>
            <SkInput
              margin={"20px 0px"}
              value={form.addressReference}
              title={translate("reference")}
              onChangeText={(text) => {
                setForm({ ...form, addressReference: text });
              }}
            />
          </ItemForm>
        </ItemsForm>
        <SkButton width={"220px"} margin={"15px 0px"} type={"submit"} text={"Registrar usuario"} />
      </SkForm>
    </>
  );
};
export default RegisterForm;
