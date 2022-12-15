import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MypageDiv } from "../Style/MypageCss";
import Avatar from "react-avatar";
import axios from "axios";
import firebase from "../firebase";
import { RootState } from "../Reducer/store";

const Mypage = () => {
    const [currentImg, setCurrentImg] = useState("");
    const user = useSelector((state: RootState) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (user.isLoading && !user.accessToken) {
            navigate("/login");
        } else {
            setCurrentImg(user.photoURL);
        }
    }, [user]);

    const handleImageUpload = (
        e: React.ChangeEvent<HTMLButtonElement>
    ) => {
        const formData = new FormData();
        formData.append("file", (e.target as HTMLInputElement).files[0]);
        axios.post("/api/user/profile/image", formData).then((res) => {
            setCurrentImg(res.data.filePath);
        });
    };

    const onUpdate = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        try { 
            await firebase.auth().currentUser.updateProfile({
                photoURL: currentImg,
            });
        } catch (err) {
            return alert("프로필 저장 실팽~!");
        }

        let body = {
            photoURL: currentImg,
            uid: user.uid,
        };

        axios.post("/api/user/profile/update", body).then((res) => {
            if (res.data.success) {
                alert("프로필 저장 성콩!");
                window.location.reload();
            } else {
                return alert("프로필 저장 실팽!");
            }
        });
    };

    return (
        <MypageDiv>
            <h2>😎 이미지 클릭 해볼사람 🔫</h2>
            <form>
                <label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e)}
                    />
                    <div className="imgDiv">
                        <Avatar size="100" round={true} src={currentImg} />
                    </div>
                </label>
            </form>
            <div className="btn">
                <button onClick={onUpdate}>저장</button>
            </div>
        </MypageDiv>
    );
};

export default Mypage;
