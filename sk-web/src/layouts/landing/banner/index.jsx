import Counter from "../counter";
import TypingComponent from "../typed";
import style from "./style.module.scss";
const LandingHomeBanner = (props) => {
  return (
    <div className={style.bannerContainer}>
      <div className={style.bannerContainerText}>
        <span className={style.bannerContainerTextName}>
          Nombre de tu organización
        </span>
        <span className={style.bannerContainerTextAbout}>
          {"Nombre de tu proyecto"}
        </span>
        <TypingComponent />
        <div className={style.homeBannerBoxCards}>
          <div className={style.homeBannerBoxCard}>
            <Counter endNum={1000} delay={0} duration={2} />
            <div className={style.homeBannerBoxCardText}>
              <span style={{ color: "#fff" }}>{"Bolas recicladas"}</span>
            </div>
          </div>
          <div className={style.homeBannerBoxCard}>
            <Counter endNum={100} delay={0} duration={2} />
            <div className={style.homeBannerBoxCardText}>
              <span style={{ color: "#fff" }}>{"Colaboradores"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHomeBanner;
