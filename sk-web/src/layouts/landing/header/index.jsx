import style from "./style.module.scss";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";
import { useRouter } from "next/router";

const LandingHeader = (props) => {
  const router = useRouter();
  return (
    <div className={style.headerContainer}>
      <div className={style.headerContainerLogo}>SkProjectRecycler</div>
      <div className={style.headerContainerPhone}>+51123456789</div>
      <div className={style.headerContainerEmail}>example@example.com</div>
      <div className={style.headerContainerMenu}>
        <FaFacebook style={{ margin: "0px 2px" }} size={25} />
        <FaInstagram style={{ margin: "0px 2px" }} size={25} />
        <FaYoutube style={{ margin: "0px 2px" }} size={25} />
        <IoIosLogIn
          onClick={() => {
            router.replace("/auth/login");
          }}
          style={{ margin: "0px 2px" }}
          size={25}
        />
      </div>
    </div>
  );
};
export default LandingHeader;
