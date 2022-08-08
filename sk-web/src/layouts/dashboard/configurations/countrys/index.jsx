import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SkButton from "src/components/button";
import SkCard from "src/components/card";
import SkFadeIn from "src/components/fadeIn";
import { useAppContext } from "src/contexts/App";
import { appTypes } from "src/contexts/App/reducer";
import { UseTranslate } from "src/contexts/Translate";
import ListCountrys from "./list";
import RegisterCountry from "./register";

const tabs = [
  { name: "list-tab", key: "list" },
  { name: "register-tab", key: "register" },
];
const CountrysLayout = (props) => {
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
    selectTab(router.query.tab);
  }, [router.query]);
  return (
    <>
      <SkCard
        margin={"12px 0px 12px"}
        style={{
          alignItems: "center",
          justifyContent: "flex-end",
          display: "flex",
          overflow: "auto",
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
                console.log("router: ", router);
                router.push({
                  pathname: router.pathname,
                  query: { tab: value.key, view: props.view },
                });
              }}
            />
          );
        })}
      </SkCard>
      <SkCard padding={"12px 0px"} margin={"12px 0px 12px"}>
        {tab == tabs[0].key && (
          <SkFadeIn>
            <ListCountrys
              data={data.countrys.rows}
              count={data.countrys.count}
              page={page}
              pageSize={pageSize}
              onChangePage={(value) => {
                setPage(value);
              }}
            />
          </SkFadeIn>
        )}
        {tab == tabs[1].key && (
          <SkFadeIn>
            <RegisterCountry
              onSuccess={() => {
                updateValue(appTypes.countrys);
              }}
            />
          </SkFadeIn>
        )}
      </SkCard>
    </>
  );
};

export default CountrysLayout;
