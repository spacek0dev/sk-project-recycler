import { useEffect, useState } from "react";
import S3 from "aws-sdk/clients/s3";
import useMount from "./useMount";
import axios from "axios";
const BUCKET_URL = "https://sk-recycler.s3.us-east-2.amazonaws.com/";

const UseS3 = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const deleteFile = () => {};
  const uploadFile = async (file) => {
    let { data } = await axios.post("/api/s3/uploadFile", {
      name: file.name,
      type: file.type,
    });
    console.log(data);

    const url = data.url;
    let { data: newData } = await axios.put(url, file, {
      headers: {
        "Content-type": file.type,
        "Access-Control-Allow-Origin": "*",
      },
    });
    return `${BUCKET_URL}${file.name}`;
  };
  return { uploadFile, deleteFile, loading, error, file, setFile };
};

export default UseS3;
