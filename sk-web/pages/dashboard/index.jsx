import SkCard from "src/components/card";
import PrivatePage from "src/layouts/pageContainer/privatePage";

const DashboardPage = () => {
  return (
    <PrivatePage>
      <SkCard padding={"6px 12px"}>
        <span>Welcome Again</span>
      </SkCard>
    </PrivatePage>
  );
};

export default DashboardPage;
