import styled from "styled-components";

const Card = styled.div`
  background: ${(props) => props.background ?? "#fff"}!important;
  color: ${(props) => props.textColor ?? "#000"}!important;
  margin: ${(props) => props.margin ?? "0px"} !important;
  padding: ${(props) => props.padding ?? "0px"} !important;
  border-radius: 8px;
`;
const SkCard = ({
  style = {},
  children,
  background,
  color,
  padding,
  margin,
}) => {
  return (
    <Card
      style={style}
      background={background}
      color={color}
      padding={padding}
      margin={margin}
    >
      {children}
    </Card>
  );
};
export default SkCard;
