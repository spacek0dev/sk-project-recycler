import SkFadeIn from "../fadeIn";
import style from "./index.module.scss";
const SkModal = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className={props.show ? `${style.spaceShowModal}` : `${style.spaceHideModal}`}>
      <div className={style.spaceModalContent}>
        <SkFadeIn>{props.children}</SkFadeIn>
      </div>
    </div>
  );
};
export default SkModal;
