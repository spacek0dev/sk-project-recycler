import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SkButton from "src/components/button";
import SkCard from "src/components/card";
import SkFadeIn from "src/components/fadeIn";
import { useAppContext } from "src/contexts/App";
import { appTypes } from "src/contexts/App/reducer";
import { UseAuth } from "src/contexts/Auth";
import { UseTranslate } from "src/contexts/Translate";
import { useUi } from "src/contexts/UI/ui";
import UseRoute from "src/hooks/useRouter";
import ListUsers from "src/layouts/dashboard/users/listUsers";
import RegisterUserForm from "src/layouts/dashboard/users/registerForm";
import PrivatePage from "src/layouts/pageContainer/privatePage";

const tabs = [
  { name: "list-tab", key: "list" },
  { name: "register-tab", key: "register" },
];
const UsersPage = () => {
  const { profile } = UseAuth();
  const { validateRoute } = UseRoute();
  const { translate } = UseTranslate();
  const { data, updateValue, refreshUsersData } = useAppContext();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const router = useRouter();
  const [tab, setTab] = useState("");
  const selectTab = (tab) => {
    if (tab) {
      setTab(tab);
    } else {
      setTab(tabs[0].key);
    }
  };

  useEffect(() => {
    validateRoute(profile?.roleId?.name,true)
    selectTab(router.query.tab);
  }, [router.query]);
  return (
    <PrivatePage>
      <SkCard
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          display: "flex",
        }}
        padding={"14px 12px"}
        margin={"12px 0px 12px"}
      >
        <div>
          <p style={{ fontWeight: "300" }}>
            Desde aqui tendras <b>acceso</b> a los usuarios registrados, y podras <b>crear</b> nuevos usuarios
          </p>
        </div>
      </SkCard>
      <SkCard
        style={{
          alignItems: "center",
          justifyContent: "flex-end",
          display: "flex",
        }}
        padding={"14px 12px"}
      >
        {tabs.map((value) => {
          return (
            <SkButton
              margin={"0px 2px"}
              key={value.key}
              height={"25px"}
              background={"transparent"}
              textColor={"#2563eb"}
              text={translate(value.name)}
              onClick={() => {
                router.push({
                  pathname: router.pathname,
                  query: { tab: value.key },
                });
              }}
            />
          );
        })}
      </SkCard>
      <SkCard padding={"12px 0px"} margin={"12px 0px 12px"}>
        {tab == tabs[0].key && (
          <SkFadeIn>
            <ListUsers
              data={data.users.rows}
              count={data.users.count}
              page={page}
              pageSize={pageSize}
              onChangePage={(value) => {
                console.log("value: ", value);
                setPage(value);
              }}
            />
          </SkFadeIn>
        )}
        {tab == tabs[1].key && (
          <SkFadeIn>
            <RegisterUserForm
              roles={data.roles}
              organizations={data.organizations}
              areas={data.areas}
              onSuccess={() => {
                updateValue(appTypes.users);
              }}
            />
          </SkFadeIn>
        )}
      </SkCard>
    </PrivatePage>
  );
};
export default UsersPage;
