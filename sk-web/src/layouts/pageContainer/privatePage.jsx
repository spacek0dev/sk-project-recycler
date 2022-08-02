import React, { useEffect, useState } from "react";
import { SkLoader } from "src/components/loader";
import { UseAuth } from "src/contexts/Auth";
import { useUi } from "src/contexts/UI/ui";
import useMount from "src/hooks/useMount";
import style from "./index.module.scss";
const PrivatePage = ({ children }) => {
  const auth = UseAuth();
  const { isLanding, setIsLanding, showLoader, hideLoader } = useUi();
  const [ready, setReady] = useState(false);
  useEffect(() => {
    showLoader();
    let session = auth.sessionToken;
    if (session.length >= 20) {
      setTimeout(() => {
        setIsLanding(false);
        setReady(true);
        hideLoader();
      }, 1500);
    }else{
      hideLoader();
    }
  }, [auth.sessionToken]);
  if (ready && !isLanding) {
    return <div className={style.pageContainer}>{children}</div>;
  }
};

export default PrivatePage;
