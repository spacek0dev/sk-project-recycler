import React, { useEffect, useState } from "react";
import { SkLoader } from "src/components/loader";
import { UseAuth } from "src/contexts/Auth";
import { useUi } from "src/contexts/UI/ui";
import useMount from "src/hooks/useMount";
import style from "./index.module.scss";
const PrivatePage = ({ children }) => {
  const auth = UseAuth();
  const { isLanding, setIsLanding } = useUi();
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let session = auth.sessionToken;
    if (session.length >= 20) {
      setTimeout(() => {
        setIsLanding(false);
        setReady(true);
      }, 1500);
    }
  });
  if (ready) {
    return <div className={style.pageContainer}>{children}</div>;
  } else {
    return <React.Fragment>{isLanding && <SkLoader />}</React.Fragment>;
  }
};

export default PrivatePage;
