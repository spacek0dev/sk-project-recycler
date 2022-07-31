import SkButton from "src/components/button";
import SkCard from "src/components/card";
import { useAppContext } from "src/contexts/App";
import { UseTranslate } from "src/contexts/Translate";
import { useUi } from "src/contexts/UI/ui";
import RegisterUserForm from "src/layouts/dashboard/users/registerForm";
import PrivatePage from "src/layouts/pageContainer/privatePage";

const UsersPage = () => {
  const { actionSideBar } = useUi();
  const { translate } = UseTranslate();
  const { data } = useAppContext();
  const showForm = () => {
    actionSideBar({
      title: "Nuevo Usuario",
      component: (
        <RegisterUserForm
          roles={data.roles}
          areas={data.areas}
          close={() => {
            actionSideBar({});
          }}
        />
      ),
    });
  };
  return (
    <PrivatePage>
      <div>
        <h1>users page</h1>
      </div>
      <SkCard
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          display: "flex",
        }}
        padding={"14px 12px"}
      >
        <h4 style={{ fontSize: 18, margin: 0 }}>{translate("users")}</h4>
        <SkButton
          height={"25px"}
          background={"transparent"}
          textColor={"#2c7be5"}
          text="Agregar Usuario"
          onClick={showForm}
        />
      </SkCard>
    </PrivatePage>
  );
};
export default UsersPage;
