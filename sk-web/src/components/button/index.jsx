import styled from "styled-components";

const Button = styled.button`
  min-height: 40px;
  min-width: 150px;
  cursor: pointer;
  border-radius: 6px;
  color: ${(props) => props.textColor ?? "#fff"} !important;
  background: ${(props) => props.background ?? "#2c7be5"}!important;
  margin: ${(props) => props.margin ?? "0px"} !important;
  padding: ${(props) => props.padding ?? "0px"} !important;
  letter-spacing: 1.5px;
  font-weight: 100;
`;

const SkButton = ({
  text,
  onClick,
  type,
  background,
  textColor,
  margin,
  padding,
}) => {
  return (
    <Button
      background={background}
      textColor={textColor}
      margin={margin}
      padding={padding}
      value={text}
      onClick={onClick}
      type={type || "button"}
    >
      {text}
    </Button>
  );
};
export default SkButton;
