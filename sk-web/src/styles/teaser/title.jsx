import styled from "styled-components";

const Title = styled.h2`
  margin: 0;
  color: #5cc9e2;
`;

const SkTeaserTitle = ({ text }) => {
  return <Title>{text || ""}</Title>;
};
export default SkTeaserTitle;
