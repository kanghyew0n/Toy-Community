import axios from "axios";
import { ChangeEvent } from "react";
import { Image } from "../Style/UploadCss";

type ImageUploadProps = {
    setImage: (data:any) => void;
};

const ImageUpload = (props: ImageUploadProps) => {
    const { setImage } = props;

    const fileUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const formData = new FormData();
        formData.append("file", e.target.files[0]);

        axios.post("/api/post/image/upload", formData).then((res) => {
            setImage(res.data.filePath);
            console.log("res.data.filePath", res.data.filePath)
        });
    };

    return (
        <Image>
            <input
                type="file"
                accept="image/*"
                onChange={(e) => fileUpload(e)}
            />
        </Image>
    );
};

export default ImageUpload;
