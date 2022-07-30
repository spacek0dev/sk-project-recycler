import Image from "next/image";
import style from "./mainLayout.module.scss";
import { IoIosMenu } from "react-icons/io";
import React, { useEffect, useState } from "react";
import MainMenu from "src/layouts/main/mainMenu";
// import MainHeader from './mainHeader';
import AppConfig from "src/config";
import MainHeader from "./mainHeader";

const MainLayout = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [responsive, setResponsive] = useState(false);
  const reportWindowSize = () => {
    if (window.innerWidth > 780) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
    if (window.innerWidth > 780) {
      setResponsive(false);
    } else {
      setResponsive(true);
    }
  };
  const handlerMobileMenu = () => {
    setShowMenu((prev) => !!!prev);
  };
  const handlerDesktopMenu = () => {
    setShowMenu((prev) => !!!prev);
  };
  useEffect(() => {
    reportWindowSize();
    window.addEventListener("resize", reportWindowSize);
  }, []);
  return (
    <>
      {!props.landing ? (
        <div
          className={`${style.layoutMainContainer} ${
            responsive
              ? style.layoutMainContainerResponsive
              : style.layoutMainContainerBrowser
          }`}
        >
          {responsive && (
            <div className={style.layoutMainMenuResponsive}>
              <div
                className={`${style.layoutMainMenuResponsiveList} ${
                  showMenu
                    ? style.layoutMainMenuResponsiveListShow
                    : style.layoutMainMenuResponsiveListHide
                }`}
              >
                <MainMenu type="mobile" onChangeMobile={handlerMobileMenu} />
              </div>
              <MainHeader
                title={AppConfig.appName}
                onChange={handlerMobileMenu}
              />
            </div>
          )}
          {!responsive && (
            <>
              <div
                className={`${style.layoutMainMenu} ${
                  showMenu ? style.layoutMainMenuShow : style.layoutMainMenuHide
                }`}
              >
                <div
                  className={style.layoutMainMenuIcon}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setShowMenu((prev) => !!!prev);
                  }}
                >
                  {showMenu ? (
                    <span>{AppConfig.appName}</span>
                  ) : (
                    <Image
                      style={{ width: 20, height: 20 }}
                      width={70}
                      height={30}
                      src={"/images/icons/astronaut.svg"}
                    />
                  )}
                </div>
                <div
                  className={`${style.layoutMainMenuDesktopList} ${
                    showMenu
                      ? style.layoutMainMenuDesktopListShow
                      : style.layoutMainMenuDesktopListHide
                  }`}
                >
                  <MainMenu
                    type="desktop"
                    state={showMenu}
                    onChangeDesktop={handlerDesktopMenu}
                  />
                </div>
              </div>
            </>
          )}

          <div className={style.layoutMainContent}>{props.children}</div>
        </div>
      ) : (
        <div
          className={style.layoutMainContent}
          style={{ width: "100%", height: "100vh", flex: 1 }}
        >
          {props.children}
        </div>
      )}
    </>
  );
};
export default MainLayout;
