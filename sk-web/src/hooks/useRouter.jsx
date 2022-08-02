import { AVALIBLE_ROLES } from "src/constants/vars";
import { useRouter } from "next/router";

const UseRoute = () => {
  const router = useRouter();
  const validateRoute = (role, valid = false) => {
    let isValid = AVALIBLE_ROLES.find((value) => value === role);
    if (isValid === "Administrador" && valid) {
      return true; // console.log("Validating");
    } else if (isValid === "Administrador" || isValid === "Colaborador") {
      return true; //console.log("Validating");
    } else {
      return router.replace("/");
    }
  };
  return { validateRoute };
};

export default UseRoute;
