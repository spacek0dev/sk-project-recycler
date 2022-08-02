import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SkButton from "src/components/button";
import SkCard from "src/components/card";
import SkFadeIn from "src/components/fadeIn";
import { useAppContext } from "src/contexts/App";
import { appTypes } from "src/contexts/App/reducer";
import { UseAuth } from "src/contexts/Auth";
import { UseTranslate } from "src/contexts/Translate";
import UseRoute from "src/hooks/useRouter";
import ListOrganizations from "src/layouts/dashboard/organizations/listOrganizations";
import RegisterOrganizationForm from "src/layouts/dashboard/organizations/registerForm";
import PrivatePage from "src/layouts/pageContainer/privatePage";

const tabs = [
  { name: "list-organizations", key: "list" },
  { name: "register-organizations", key: "register" },
];
const OrganizationsPage = () => {
  const { profile } = UseAuth();
  const { validateRoute } = UseRoute();
  const { translate } = UseTranslate();
  const { data, updateValue } = useAppContext();
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
    validateRoute(profile?.roleId?.name, true);
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
            Desde aqui tendras <b>acceso</b> a las organizaciones registradas, y podras <b>crear</b> nuevas organizaciones.
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
              height={"40px"}
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
            <ListOrganizations
              data={data.organizations.rows}
              count={data.organizations.count}
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
            <RegisterOrganizationForm
              areas={data.areas}
              onSuccess={() => {
                updateValue(appTypes.organizations);
              }}
            />
          </SkFadeIn>
        )}
      </SkCard>
    </PrivatePage>
  );
};

export default OrganizationsPage;
