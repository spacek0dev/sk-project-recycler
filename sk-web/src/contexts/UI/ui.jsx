import { createContext, useContext, useEffect, useState } from "react";
import MainLayout from "src/layouts/main/mainLayout";
import { useRouter } from "next/router";
import useMount from "src/hooks/useMount";
import { UseAuth } from "../Auth";
import { SkLoader } from "src/components/loader";
import SkSideBar from "src/components/SideBar";
import useSideBar from "src/hooks/useSidebar";
import { ToastContainer, toast } from "react-toastify";

const UiContext = createContext();
const useUi = () => {
  return useContext(UiContext);
};
const UiProvider = (props) => {
  const { sessionToken } = UseAuth();
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const [isLanding, setIsLanding] = useState(true);
  const [sideBarValue, setSideBarValue] = useState({});
  const { closeSideBar, openSideBar, open, toggleSidebar } = useSideBar();
  const actionSideBar = (info) => {
    setSideBarValue(info);
    toggleSidebar();
  };
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
      draggable: true
    });
  };
  useEffect(() => {}, []);
  return (
    <UiContext.Provider
      value={{
        notify,
        actionSideBar,
        timeLoader,
        hideLoader,
        showLoader,
        setIsLanding,
        isLanding,
      }}
    >
      {loader && <SkLoader />}
      <SkSideBar
        title={sideBarValue.title ?? ""}
        close={closeSideBar}
        show={openSideBar}
        open={open}
        key={"sidebar-ui"}
      >
        {sideBarValue.component}
      </SkSideBar>
      <MainLayout landing={isLanding}>{props.children}</MainLayout>
    </UiContext.Provider>
  );
};

export { UiContext, UiProvider, useUi };
