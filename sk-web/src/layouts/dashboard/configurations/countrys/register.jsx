import React, { useState } from "react";
import SkButton from "src/components/button";
import SkCard from "src/components/card";
import SkForm from "src/components/form";
import SkInput from "src/components/input";
import { API } from "src/constants/api";
import { useAxios } from "src/contexts/Axios";
import { UseTranslate } from "src/contexts/Translate";
import { useUi } from "src/contexts/UI/ui";
import { validateObject } from "src/utils";
import { ItemForm, ItemsForm, RegisterDescription, RegisterTitle, RegisterTitleContainer } from "../../styles";

const RegisterCountry = (props) => {
  const { notify } = useUi();
  const { post } = useAxios();
  const { translate } = UseTranslate();
  const [form, setForm] = useState({
    key: "",
    name: "",
    currency: "",
  });
  const clearForm = () => {
    setForm({ key: "", name: "", currency });
  };
  const saveData = (registerData) => {
    post(`${API.countrys}`, registerData)
      .then((result) => {
        notify(translate("category_registered"), "success");
        clearForm();
        props.onSuccess();
      })
      .catch((err) => {});
  };
  const onSubmitLogin = async () => {
    const registerData = {
      ...form,
    };
    let isValid = validateObject(registerData);
    if (isValid === 0) {
      saveData(registerData);
    } else {
      notify(translate("complete_all_fields"), "error");
    }
  };
  return (
    <SkCard>
      <RegisterTitleContainer>
        <RegisterTitle>{translate("register-country")}</RegisterTitle>
        <RegisterDescription>{translate("register-country-description")}</RegisterDescription>
      </RegisterTitleContainer>
      <SkForm
        submit={() => {
          onSubmitLogin();
        }}
        styles={{ padding: "12px 24px", overflow: "auto", textAlign: "center" }}
      >
        <ItemsForm>
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
              value={form.currency}
              title={translate("currency")}
              onChangeText={(text) => {
                setForm({ ...form, currency: text });
              }}
            />
          </ItemForm>
        </ItemsForm>
        <SkButton width={"220px"} margin={"15px 0px"} type={"submit"} text={"Registrar Pais"} />
      </SkForm>
    </SkCard>
  );
};
export default RegisterCountry;
