import React from "react";
import axios from "axios";
import { Image} from "../Style/UploadCss";

const ImageUpload = ({setImage}) => {
  
  const fileUpload = (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    axios.post("/api/post/image/upload", formData).then((res) => {
      setImage(res.data.filePath)
    });
  };

  return (
    <Image>
      <input type="file" accept="image/*" onChange={(e) => fileUpload(e)} />
    </Image>
  );
};

export default ImageUpload;
