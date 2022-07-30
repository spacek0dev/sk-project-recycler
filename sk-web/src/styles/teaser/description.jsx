import styled from "styled-components";

const Description = styled.p`
  color: #555;
`;

const SkTeaserDescription = ({ text }) => {
    return <Description>{text || ''}</Description>
}
export default SkTeaserDescription;