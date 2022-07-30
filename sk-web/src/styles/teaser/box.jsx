import styled from "styled-components";
const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  border-radius: 12px;
  align-items: center;
`;

const SkTeaserBox = ({ children }) => {
  return <Box>{children}</Box>;
};
export default SkTeaserBox;
