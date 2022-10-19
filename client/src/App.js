import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import { UploadButton } from "./Style/UploadCss";

function App() {
  const [text, setText] = useState("");
  useEffect(() => {
    let body = {
      text: "hello",
    };
    axios
      .post("/api/test", body)
      .then((response) => {
        console.log("요청성공 : ", response);
        setText(response.data.text);
      })
      .catch((error) => {
        console.log("요청실패 : ", error);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="App" style={{ textAlign: "center" }}>
        <h1>멋쟁이 원혜강</h1>
        <h3>{text}</h3>
        <UploadButton>button</UploadButton>
      </div>
    </>
  );
}

export default App;
