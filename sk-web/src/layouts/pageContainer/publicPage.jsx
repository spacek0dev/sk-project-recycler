import useMount from "src/hooks/useMount";
import UseSession from "src/hooks/useSession";
import style from "./index.module.scss";
const PublicPage = ({ children }) => {
  return <div className={style.pageContainer}>{children}</div>;
};

export default PublicPage;
