import { createContext, useContext, useEffect, useState } from "react";
import MainLayout from "src/layouts/main/mainLayout";
import { useRouter } from "next/router";
import useMount from "src/hooks/useMount";
import { UseAuth } from "../Auth";
import { SkLoader } from "src/components/loader";

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
  const actionSideBar = (info) => {
    setSideBarValue(info);
  };
  const timeLoader = (time = 1500) => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, time);
  };
  const showLoader = () => setLoader(true);
  const hideLoader = () => setLoader(false);
  useEffect(() => {
    let path = router.pathname.split("/").filter((v) => v);
    // setIsLanding(!path.find((v) => v === "dashboard"));
  }, [router.pathname]);
  return (
    <UiContext.Provider
      value={{
        actionSideBar,
        timeLoader,
        hideLoader,
        showLoader,
        setIsLanding,
        isLanding,
      }}
    >
      {loader && <SkLoader />}
      <MainLayout landing={isLanding}>{props.children}</MainLayout>
    </UiContext.Provider>
  );
};

export { UiContext, UiProvider, useUi };
