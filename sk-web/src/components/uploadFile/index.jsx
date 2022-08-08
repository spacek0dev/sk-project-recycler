import { useEffect, useState } from "react";
import { UseTranslate } from "src/contexts/Translate";
import SkButton from "../button";

const SkUploadFile = ({ onFile }) => {
  const { translate } = UseTranslate();
  const [file, setFile] = useState(null);
  const createInputFile = () => {
    var input = document.createElement("input");
    input.type = "file";
    input.click();
    input.onchange = async (ev) => {
      if (!input.files.length) return;
      var _file = input.files[0];
      setFile(_file);
      onFile(_file);
    };
  };
  useEffect(()=>{

  },[])
  return (
    <SkButton
      height={"48px"}
      padding={"0px 16px"}
      styles={{ fontWeight: "200", textAlign: "justify" }}
      textColor={"#000"}
      width={"100%"}
      background={"#fff"}
      border={"1px solid #747b8a88"}
      text={file ? file.name.toLowerCase() : translate("upload-file")}
      onClick={createInputFile}
    />
  );
};

export default SkUploadFile;
