import { useEffect } from "react";
import SkCard from "src/components/card";
import { UseAuth } from "src/contexts/Auth";
import UseRoute from "src/hooks/useRouter";
import PrivatePage from "src/layouts/pageContainer/privatePage";

const DashboardPage = () => {
  const { profile } = UseAuth();
  const { validateRoute } = UseRoute();
  useEffect(() => {
    validateRoute(profile?.roleId?.name, true);
  }, []);
  return (
    <PrivatePage>
      <SkCard padding={"6px 12px"}>
        <span>Welcome Again</span>
      </SkCard>
    </PrivatePage>
  );
};

export default DashboardPage;
