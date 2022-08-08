import { useEffect, useState } from "react";
import SkButton from "src/components/button";
import SkCard from "src/components/card";
import SkForm from "src/components/form";
import SkInput from "src/components/input";
import SkSelect from "src/components/select";
import SkUploadFile from "src/components/uploadFile";
import { API } from "src/constants/api";
import { useAxios } from "src/contexts/Axios";
import { UseTranslate } from "src/contexts/Translate";
import { useUi } from "src/contexts/UI/ui";
import UseS3 from "src/hooks/useS3";
import { validateObject } from "src/utils";
import styled from "styled-components";
import { ItemForm, ItemsForm, RegisterDescription, RegisterTitle, RegisterTitleContainer } from "../styles";

const RegisterOrganizationForm = (props) => {
  const { uploadFile } = UseS3();
  const [file, setFile] = useState();
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
  const saveData = (registerData) => {
    post(`${API.organizations}`, registerData)
      .then((result) => {
        console.log("result: ", result);
        notify(translate("organization_registered"), "success");
        clearForm();
        props.onSuccess();
      })
      .catch((err) => {});
  };
  const onSubmitLogin = async () => {
    const registerData = {
      ...form,
      areasId,
    };
    let imageFile = file;
    let isValid = validateObject(registerData);
    if (isValid === 0) {
      if (imageFile) {
        let _file = await uploadFile(imageFile);
        registerData.logo = _file;
        saveData(registerData);
      } else {
        saveData(registerData);
      }
    } else {
      notify(translate("complete_all_fields"), "error");
    }
  };
  useEffect(() => {}, []);
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
          <ItemForm>
            <SkUploadFile
              onFile={(file) => {
                setFile(file);
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
