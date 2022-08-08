import styled from "styled-components";

const Button = styled.button`
  height: ${(props) => props.height ?? "40px"} !important;
  width: ${(props) => props.width ?? "180px"} !important;
  cursor: pointer;
  border-radius: 6px;
  color: ${(props) => props.textColor ?? "#fff"} !important;
  background: ${(props) => props.background ?? "#2c7be5"}!important;
  margin: ${(props) => props.margin ?? "0px"} !important;
  padding: ${(props) => props.padding ?? "0px"} !important;
  letter-spacing: 1.5px;
  font-weight: 300;
  border: ${(props) => props.border ?? "none"} !important;
`;

const SkButton = ({ border, text, onClick, type, background, textColor, margin, height, padding, width, styles = {} }) => {
  return (
    <Button
      style={styles}
      width={width}
      background={background}
      textColor={textColor}
      margin={margin}
      padding={padding}
      height={height}
      value={text}
      border={border}
      onClick={onClick}
      type={type || "button"}
    >
      {text}
    </Button>
  );
};
export default SkButton;
