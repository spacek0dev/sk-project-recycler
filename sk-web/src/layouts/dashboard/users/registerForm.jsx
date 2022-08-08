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
import styled from "styled-components";

const ItemsForm = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const ItemForm = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 350px;
  padding: 0px 12px;
`;
const RegisterTitleContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;
const RegisterTitle = styled.h1`
  margin: 12px;
  padding: 0;
`;
const RegisterDescription = styled.p`
  margin: 12px;
  padding: 12px;
  font-weight: 200;
  max-width: 420px;
  text-align: center;
`;

const RegisterUserForm = (props) => {
  const { notify } = useUi();
  const { post } = useAxios();
  const { translate } = UseTranslate();
  const [areasId, setAreaId] = useState("");
  const [roleId, setRoleId] = useState("");
  const [organizationId, setOrganizationId] = useState("");
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
    setRoleId("");
    setOrganizationId("");
  };
  const onSubmitLogin = () => {
    const registerData = {
      roleId,
      areasId,
      person: form,
      organizationId: organizationId ? organizationId : null,
    };
    let isValid = validateObject(registerData);
    if (isValid === 0) {
      post(`${API.register}`, registerData)
        .then((result) => {
          notify(translate("user_registered"), "success");
          clearForm();
          props.onSuccess();
        })
        .catch((err) => {});
    } else {
      notify(translate("complete_all_fields"), "error");
    }
  };
  return (
    <SkCard>
      <RegisterTitleContainer>
        <RegisterTitle>{translate("register-users")}</RegisterTitle>
        <RegisterDescription>{translate("register-user-description")}</RegisterDescription>
      </RegisterTitleContainer>
      <SkForm
        submit={() => {
          onSubmitLogin();
        }}
        styles={{ padding: "12px 24px", overflow: "auto", textAlign: "center" }}
      >
        <ItemsForm>
          <ItemForm>
            <SkSelect
              key="areas"
              options={props.areas[props.areas.length - 1].areas}
              title={translate("ubication")}
              value={areasId}
              onChangeText={(value) => {
                setAreaId(value);
              }}
            />
          </ItemForm>
          <ItemForm>
            <SkSelect
              key="roles"
              options={props.roles.rows}
              title={translate("roles")}
              value={roleId}
              onChangeText={(value) => {
                setRoleId(value);
              }}
            />
          </ItemForm>
          {roleId && props.roles.find((v) => v._id === roleId).name === "Colaborador" && (
            <ItemForm>
              <SkSelect
                key="organizations"
                options={props.organizations.rows}
                title={translate("organizations")}
                value={organizationId}
                onChangeText={(value) => {
                  setOrganizationId(value);
                }}
              />
            </ItemForm>
          )}
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
    </SkCard>
  );
};
export default RegisterUserForm;
