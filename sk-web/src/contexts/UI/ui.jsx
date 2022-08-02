import React, { createContext, useContext, useEffect, useState } from "react";
import MainLayout from "src/layouts/main/mainLayout";
import { useRouter } from "next/router";
import useMount from "src/hooks/useMount";
import { UseAuth } from "../Auth";
import { SkLoader } from "src/components/loader";
import SkSideBar from "src/components/SideBar";
import useSideBar from "src/hooks/useSidebar";
import { ToastContainer, toast } from "react-toastify";
import SkModal from "src/components/modal";

const UiContext = createContext();
const useUi = () => {
  return useContext(UiContext);
};
const UiProvider = (props) => {
  const { sessionToken } = UseAuth();
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const [isLanding, setIsLanding] = useState(true);
  const [isModal, setIsModal] = useState(false);
  const timeLoader = (time = 1500) => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, time);
  };
  const showLoader = () => setLoader(true);
  const hideLoader = () => setLoader(false);
  const notify = (text, type = "success") => {
    toast(text || "", {
      type: type,
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
    });
  };
  const showModal = () => {
    setIsModal(true);
  };
  const hideModal = () => {
    setIsModal(true);
  };
  useEffect(() => {}, []);
  return (
    <UiContext.Provider
      value={{
        notify,
        timeLoader,
        hideLoader,
        showLoader,
        setIsLanding,
        isLanding,
        showModal,
        hideModal,
      }}
    >
      {loader && <SkLoader />}

      <MainLayout landing={isLanding}>
        {props.children}
      </MainLayout>
    </UiContext.Provider>
  );
};

export { UiContext, UiProvider, useUi };
