import React, { useEffect, useState } from "react";
import { MdCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";
import SkButton from "src/components/button";
import SkCard from "src/components/card";
import SkModal from "src/components/modal";
import { danger } from "src/constants/colors";
import { UseTranslate } from "src/contexts/Translate";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0px;
  margin: 10px 0px;
  height: 50px;
  border-bottom: 1px solid #5e6e8255;
  cursor: pointer;
`;

const TranslateModal = ({ isModal, hideModal }) => {
  const [_lang, _setLang] = useState("");
  const { translate, lang, setLang } = UseTranslate();
  useEffect(() => {
    _setLang(lang);
  }, []);
  return (
    <SkModal show={isModal}>
      <React.Fragment>
        <h1 style={{ textAlign: "center" }}>{translate("change-language")}</h1>
        <Item
          onClick={() => {
            _setLang("es");
          }}
        >
          {_lang === "es" ? (
            <MdOutlineCheckBox color={"#2563eb"} style={{ margin: "0px 5px 0px 0px" }} size={25} />
          ) : (
            <MdCheckBoxOutlineBlank color={"#5e6e82"} style={{ margin: "0px 5px 0px 0px" }} size={25} />
          )}
          <span style={{ color: _lang === "es" ? "#2563eb" : "#5e6e82" }}>{translate("spanish")}</span>
        </Item>
        <Item
          onClick={() => {
            _setLang("en");
          }}
        >
          {_lang === "en" ? (
            <MdOutlineCheckBox color={"#2563eb"} style={{ margin: "0px 5px 0px 0px" }} size={25} />
          ) : (
            <MdCheckBoxOutlineBlank color={"#5e6e82"} style={{ margin: "0px 5px 0px 0px" }} size={25} />
          )}
          <span style={{ color: _lang === "en" ? "#2563eb" : "#5e6e82" }}>{translate("english")}</span>
        </Item>
        <div style={{ textAlign: "center", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <SkButton
            textColor={danger}
            background="#fff"
            onClick={() => {
              _setLang(lang);
              hideModal();
            }}
            text={translate("cancel")}
          />
          <SkButton
            textColor={"#2563eb"}
            background="#fff"
            onClick={() => {
              setLang(_lang);
              hideModal();
            }}
            text={translate("accept")}
          />
        </div>
      </React.Fragment>
    </SkModal>
  );
};

export default TranslateModal;
