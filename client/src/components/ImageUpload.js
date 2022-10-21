import React from "react";
import axios from "axios";

const ImageUpload = ({setImage}) => {
  const fileUpload = (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    axios.post("/api/post/image/upload", formData).then((res) => {
      setImage(res.data.filePath)
    });
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={(e) => fileUpload(e)} />
    </div>
  );
};

export default ImageUpload;
