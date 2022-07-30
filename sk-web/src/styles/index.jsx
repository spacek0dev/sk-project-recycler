import SkTeaserBox from "./teaser/box";
import SkTeaserContainer from "./teaser/container";
import SkTeaserDescription from "./teaser/description";
import SkTeaserTextContainer from "./teaser/textContainer";
import SkTeaserTitle from "./teaser/title";

const Teaser = () => {
  return (
    <SkTeaserBox>
      <SkTeaserContainer>
        <SkTeaserTextContainer>
          <SkTeaserTitle text={"Hola mundo"} />
          <SkTeaserDescription
            text={"I just built this nice teaser dor the first time ;)"}
          />
        </SkTeaserTextContainer>
      </SkTeaserContainer>
    </SkTeaserBox>
  );
};

export default Teaser;
