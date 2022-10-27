import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useDispatch } from "react-redux";
import { loginUser, clearUser } from "./Reducer/userSlice";
import Header from "./components/Header";
import Upload from "./pages/Upload";
import List from "./pages/List";
import PostArea from "./pages/PostArea";
import Detail from "./components/Detail";
import Edit from "./pages/Edit";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import firebase from "./firebase";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((userInfo) => {
      if (userInfo !== null) {
        dispatch(loginUser(userInfo.multiFactor.user));
      } else {
        dispatch(clearUser());
      }
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/upload/:postNum" element={<PostArea />} />
          <Route path="/edit/:postNum" element={<Edit />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
