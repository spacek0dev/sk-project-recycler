import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
`;

const SkTeaserContainer = ({ children }) => {
    return <Container>{children}</Container>;
};
export default SkTeaserContainer;
