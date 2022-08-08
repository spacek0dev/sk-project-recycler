import { useState } from "react";
import SkButton from "src/components/button";
import SkCard from "src/components/card";
import SkForm from "src/components/form";
import SkInput from "src/components/input";
import SkSelect from "src/components/select";
import SkUploadFile from "src/components/uploadFile";
import { API } from "src/constants/api";
import { UseAuth } from "src/contexts/Auth";
import { useAxios } from "src/contexts/Axios";
import { UseTranslate } from "src/contexts/Translate";
import { useUi } from "src/contexts/UI/ui";
import UseS3 from "src/hooks/useS3";
import { validateObject } from "src/utils";
import { RegisterDescription, RegisterTitle, RegisterTitleContainer, ItemsForm, ItemForm } from "../styles";

const RegistePartner = (props) => {
  const { profile } = UseAuth();
  const { uploadFile } = UseS3();
  const [file, setFile] = useState();
  const { notify } = useUi();
  const { post } = useAxios();
  const { translate } = UseTranslate();
  const [organizationId, setOrganizationId] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    logo: "---",
  });
  const clearForm = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      address: "",
      logo: "---",
    });
  };
  const saveData = (registerData) => {
    post(`${API.partners}`, registerData)
      .then((result) => {
        notify(translate("partners_registered"), "success");
        clearForm();
        props.onSuccess();
      })
      .catch((err) => {});
  };
  const onSubmitLogin = async () => {
    const registerData = {
      ...form,
      organizationId,
    };
    let imageFile = file;
    if (profile.roleId.name === "Colaborador") {
      registerData.organizationId = profile.organizationId._id;
    }
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
  return (
    <SkCard>
      <RegisterTitleContainer>
        <RegisterTitle>{translate("register-partners")}</RegisterTitle>
        <RegisterDescription>{translate("register-partner-description")}</RegisterDescription>
      </RegisterTitleContainer>
      <SkForm
        submit={() => {
          onSubmitLogin();
        }}
        styles={{ padding: "12px 24px", overflow: "auto", textAlign: "center" }}
      >
        <ItemsForm>
          {profile.roleId.name === "Administrador" && (
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
        <SkButton width={"220px"} margin={"15px 0px"} type={"submit"} text={"Registrar Partner"} />
      </SkForm>
    </SkCard>
  );
};
export default RegistePartner;
