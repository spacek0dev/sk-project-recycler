import SkAccordion from "src/components/accordion ";
import SkCard from "src/components/card";
import PublicPage from "src/layouts/pageContainer/publicPage";

const HelpPage = () => {
  return (
    <PublicPage>
      <SkCard padding={"25px 0px"} margin={"25px 0px"} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <SkCard style={{ maxWidth: 780 }}>
          <h2 style={{ textAlign: "center" }}>Help page</h2>
          <SkAccordion title="Test 1" onchange={() => {}} isOpen={false}>
            <p style={{ maxWidth: 1980 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eum nulla velit dicta vel enim, rerum excepturi neque magnam corrupti. Temporibus veritatis, ullam
              magnam perspiciatis dolores minima sint perferendis debitis?
            </p>
          </SkAccordion>
          <SkAccordion title="Test 12" onchange={() => {}} isOpen={false}>
            <p style={{ maxWidth: 1980 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eum nulla velit dicta vel enim, rerum excepturi neque magnam corrupti. Temporibus veritatis, ullam
              magnam perspiciatis dolores minima sint perferendis debitis?
            </p>
          </SkAccordion>
          <SkAccordion title="Test 3" onchange={() => {}} isOpen={false}>
            <p style={{ maxWidth: 1980 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eum nulla velit dicta vel enim, rerum excepturi neque magnam corrupti. Temporibus veritatis, ullam
              magnam perspiciatis dolores minima sint perferendis debitis?
            </p>
          </SkAccordion>
          <SkAccordion title="Test 4" onchange={() => {}} isOpen={false}>
            <p style={{ maxWidth: 1980 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eum nulla velit dicta vel enim, rerum excepturi neque magnam corrupti. Temporibus veritatis, ullam
              magnam perspiciatis dolores minima sint perferendis debitis?
            </p>
          </SkAccordion>
        </SkCard>
      </SkCard>
    </PublicPage>
  );
};
export default HelpPage;
