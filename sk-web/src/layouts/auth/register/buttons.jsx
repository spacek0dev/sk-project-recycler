import { useRouter } from "next/router";
import React, { useState } from "react";
import SkButton from "src/components/button";
import SkFadeIn from "src/components/fadeIn";
import SkModal from "src/components/modal";
import { UseTranslate } from "src/contexts/Translate";
import { useUi } from "src/contexts/UI/ui";
import TranslateModal from "src/layouts/modals/translate";
import styled from "styled-components";

const RegisterButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 280px;
  max-width: 450px;
  height: 80px;
  /* box-shadow: 0 7px 14px 0 rgba(65, 69, 88, 0.1),
    0 3px 6px 0 rgba(0, 0, 0, 0.07); */
`;
const RegisterButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  transition: all 500ms ease;
  cursor: pointer;
  :hover {
    color: #2c7be5;
    transition: all 500ms ease;
  }
`;
const Divider = styled.div`
  width: 1px;
  height: 30px;
  background-color: #2c7be533;
`;
const SkRegisterButtons = () => {
  const [isModal, setIsModal] = useState(false);
  const { translate } = UseTranslate();
  const router = useRouter();
  const showModal = () => {
    setIsModal(true);
  };
  const hideModal = () => {
    setIsModal(false);
  };
  return (
    <>
      <RegisterButtons>
        <RegisterButton
          onClick={() => {
            router.push("/auth/login");
          }}
        >
          {translate("login")}
        </RegisterButton>
        <Divider />
        <RegisterButton
          onClick={() => {
            router.push("/help");
          }}
        >
          {translate("help")}
        </RegisterButton>
        <Divider />
        <RegisterButton onClick={showModal}>{translate("language")}</RegisterButton>
      </RegisterButtons>
      <TranslateModal isModal={isModal} hideModal={hideModal} />
    </>
  );
};

export default SkRegisterButtons;
