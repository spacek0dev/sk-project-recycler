import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SkButton from "src/components/button";
import SkCard from "src/components/card";
import { useAppContext } from "src/contexts/App";
import { UseAuth } from "src/contexts/Auth";
import { UseTranslate } from "src/contexts/Translate";
import UseRoute from "src/hooks/useRouter";
import AwardsCategoryLayout from "src/layouts/dashboard/configurations/awardsCategory";
import CountrysLayout from "src/layouts/dashboard/configurations/countrys";
import RolesLayout from "src/layouts/dashboard/configurations/roles";
import PrivatePage from "src/layouts/pageContainer/privatePage";

const views = [
  { name: "countrys", key: "countrys" },
  { name: "areas", key: "areas" },
  { name: "roles", key: "roles" },
  { name: "categorys", key: "categorys" },
];

const ConfigurationsPage = () => {
  const { profile } = UseAuth();
  const { validateRoute } = UseRoute();
  const { translate } = UseTranslate();
  const { data, updateValue } = useAppContext();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const router = useRouter();
  const [tab, setTab] = useState("");
  const [view, setView] = useState("");
  const selectTab = (tab) => {
    if (tab) {
      setTab(tab);
    } else {
      setTab(tabs[0].key);
    }
  };

  const selectView = (view) => {
    if (view) {
      setView(view);
    } else {
      setView(tabs[0].key);
    }
  };

  useEffect(() => {
    validateRoute(profile?.roleId?.name, true);
    selectTab(router.query.tab);
    selectView(router.query.view);
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
            Desde aqui tendras <b>acceso</b> a los paises registrados, y podras <b>crear</b> una nuevo.
          </p>
        </div>
      </SkCard>
      <SkCard
        margin={"12px 0px 12px"}
        style={{
          alignItems: "center",
          justifyContent: "flex-start",
          display: "flex",
          overflow: "auto",
        }}
        padding={"14px 12px"}
      >
        {views.map((value) => {
          return (
            <SkButton
              margin={"0px 2px"}
              key={value.key}
              styles={{ minWidth: "100px" }}
              height={"40px"}
              background={"transparent"}
              textColor={"#2563eb"}
              text={translate(value.name)}
              onClick={() => {
                setView(value.key);
                router.push({
                  pathname: router.pathname,
                  query: { tab: tab, view: value.key },
                });
              }}
            />
          );
        })}
      </SkCard>

      {view === "countrys" && <CountrysLayout view={view} />}
      {view === "categorys" && <AwardsCategoryLayout view={view} />}
      {view === "roles" && <RolesLayout view={view} />}
    </PrivatePage>
  );
};

export default ConfigurationsPage;
