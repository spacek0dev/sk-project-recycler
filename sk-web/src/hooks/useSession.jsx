import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { UseAuth } from "src/contexts/Auth";
import { useUi } from "src/contexts/UI/ui";
import useMount from "./useMount";

const UseSession = () => {
  const auth = UseAuth();
  const { timeLoader } = useUi();
  const router = useRouter();
  const [existSession, setExistSession] = useState(null);
  const validateSession = () => {
    let session =
      auth.sessionToken === "not-logued" || auth.sessionToken === "not-session"
        ? false
        : true;
    setExistSession(session);
    return session;
  };
  const manageSession = () => {
    timeLoader(3000);
    console.log(auth.sessionToken)
    let session =
      auth.sessionToken === "not-logued" || auth.sessionToken === "not-session"
        ? false
        : true;
    setExistSession(session);
    let _s = session;
    if (_s === false) {
      // router.replace("/auth/login");
    }
    return { _s };
  };
  useEffect(() => {
    validateSession();
  }, []);
  return { existSession, manageSession };
};
export default UseSession;
