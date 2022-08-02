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
  justify-content: space-between;
  @media screen and (max-width: 700px) {
    justify-content: center;
  }
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

const RegisterOrganizationForm = (props) => {
  const { notify } = useUi();
  const { post } = useAxios();
  const { translate } = UseTranslate();
  const [areasId, setAreaId] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    logo: "---",
    extras: [],
    images: [],
  });

  const clearForm = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      address: "",
      logo: "---",
      extras: [],
      images: [],
    });
    setAreaId("");
  };
  const onSubmitLogin = () => {
    const registerData = {
      ...form,
      areasId,
    };
    let isValid = validateObject(registerData);
    if (isValid === 0) {
      post(`${API.organizations}`, registerData)
        .then((result) => {
          notify(translate("organization_registered"), "success");
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
        <RegisterTitle>{translate("register-organizations")}</RegisterTitle>
        <RegisterDescription>{translate("register-organization-description")}</RegisterDescription>
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
            <SkInput
              margin={"20px 0px"}
              value={form.name}
              title={translate("name")}
              onChangeText={(text) => {
                setForm({ ...form, name: text });
              }}
            />
          </ItemForm>
          <ItemForm>
            <SkInput
              margin={"20px 0px"}
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
              value={form.address}
              title={translate("address")}
              onChangeText={(text) => {
                setForm({ ...form, address: text });
              }}
            />
          </ItemForm>
        </ItemsForm>
        <SkButton width={"220px"} margin={"15px 0px"} type={"submit"} text={"Registrar Organizacion"} />
      </SkForm>
    </SkCard>
  );
};
export default RegisterOrganizationForm;
