import React, { useContext } from "react";
import Link from "next/link";
import style from "./mainMenu.module.scss";
import { useRouter } from "next/router";
import AppConfig from "src/config";
// import { AuthContext } from '../context/AuthContext';
import { IoIosLogOut, IoIosHome, IoIosClose } from "react-icons/io";
import { AuthContext } from "src/contexts/Auth";
import { useUi } from "src/contexts/UI/ui";

const MainMenu = (props) => {
  const {setIsLanding} = useUi();
  const genearteIcon = (key) => {
    if (key === "home") {
      return <IoIosHome />;
    } else {
      return key[0];
    }
  };
  const router = useRouter();
  const useAuth = useContext(AuthContext);
  return (
    <>
      {props.type === "mobile" && (
        <>
          <div className={style.menuListMobileTitle}>
            <span>{AppConfig.appName}</span>
            <div className={style.menuListMobileCloseIcon}>
              <IoIosClose size={30} onClick={props.onChangeMobile} />
            </div>
          </div>
          <div className={style.menuListMobile}>
            {AppConfig.menuList.map((value) => {
              return (
                <Link href={value.link} key={value.key}>
                  <div
                    style={{
                      textTransform: props.state ? "inherit" : "uppercase",
                    }}
                    className={`${style.menuListMobileItem} ${
                      router.pathname == value.link ? style.active : ""
                    }`}
                    onClick={props.onChangeMobile}
                  >
                    {!!!props.state ? value.name : genearteIcon(value.icon)}
                  </div>
                </Link>
              );
            })}
          </div>
        </>
      )}
      {props.type === "desktop" && (
        <>
          <div className={style.menuListDesktop}>
            {AppConfig.menuList.map((value) => {
              return (
                <Link href={value.link} key={value.key}>
                  <div
                    style={{
                      textTransform: props.state ? "inherit" : "uppercase",
                    }}
                    className={`${style.menuListDesktopItem} ${
                      router.pathname == value.link ? style.active : ""
                    }`}
                  >
                    {props.state ? value.name : genearteIcon(value.icon)}
                  </div>
                </Link>
              );
            })}
          </div>
          <div className={style.menuListDesktop}>
            <div
              onClick={() => {
                setIsLanding(true);
                useAuth.logout();
              }}
              className={`${style.menuListDesktopItem}`}
            >
              {props.state ? "Logout" : <IoIosLogOut />}
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default MainMenu;
