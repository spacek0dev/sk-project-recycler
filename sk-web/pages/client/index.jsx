import { useEffect } from "react";
import SkCard from "src/components/card";
import { useAppContext } from "src/contexts/App";
import { UseAuth } from "src/contexts/Auth";
import { UseTranslate } from "src/contexts/Translate";
import UseRoute from "src/hooks/useRouter";
import PrivatePage from "src/layouts/pageContainer/privatePage";

const ClientPage = (props) => {
  const { data } = useAppContext();
  const { profile } = UseAuth();
  const { translate } = UseTranslate();
  const { validateRoute } = UseRoute();
  useEffect(() => {
    validateRoute(profile?.roleId?.name, true);
  }, []);
  return (
    <PrivatePage>
      <SkCard padding={"24px 12px"}>
        <span style={{ fontSize: 22 }}>{translate("welcome")}</span>{" "}
        <span style={{ fontSize: 20, fontWeight: "200" }}>
          {profile.personId.firstname} {profile.personId.lastname}
        </span>
      </SkCard>
    </PrivatePage>
  );
};
export default ClientPage;
