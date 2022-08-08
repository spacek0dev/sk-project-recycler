import React, { useState } from "react";
import SkButton from "src/components/button";
import SkCard from "src/components/card";
import SkForm from "src/components/form";
import SkInput from "src/components/input";
import SkUploadFile from "src/components/uploadFile";
import { API } from "src/constants/api";
import { useAxios } from "src/contexts/Axios";
import { UseTranslate } from "src/contexts/Translate";
import { useUi } from "src/contexts/UI/ui";
import UseS3 from "src/hooks/useS3";
import { validateObject } from "src/utils";
import { ItemForm, ItemsForm, RegisterDescription, RegisterTitle, RegisterTitleContainer } from "../../styles";

const AwardsCategoryRegister = (props) => {
  const { uploadFile } = UseS3();
  const { notify } = useUi();
  const { post } = useAxios();
  const { translate } = UseTranslate();
  const [form, setForm] = useState({
    name: "",
    logo: "---",
  });
  const [file, setFile] = useState(null);
  const clearForm = () => {
    setForm({
      name: "",
      logo: "---",
    });
  };
  const saveData = (registerData) => {
    post(`${API.awardsCategory}`, registerData)
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
    let imageFile = file;
    let isValid = validateObject(registerData);
    if (isValid === 0) {
      if (imageFile) {
        let _file = await uploadFile(imageFile);
        registerData.logo = _file;
        console.log('registerData: ', registerData);
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
        <RegisterTitle>{translate("register-category")}</RegisterTitle>
        <RegisterDescription>{translate("register-category-description")}</RegisterDescription>
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
            <SkUploadFile
              onFile={(file) => {
                setFile(file);
              }}
            />
          </ItemForm>
        </ItemsForm>
        <SkButton width={"220px"} margin={"15px 0px"} type={"submit"} text={"Registrar Categoria"} />
      </SkForm>
    </SkCard>
  );
};

export default AwardsCategoryRegister;
