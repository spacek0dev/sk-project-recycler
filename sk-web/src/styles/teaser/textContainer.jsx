import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
padding: 20px;
`;


const SkTeaserTextContainer = ({ children }) => {
    return (
        <Container>{children}</Container>
    )
}
export default SkTeaserTextContainer
