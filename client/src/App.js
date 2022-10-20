import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Upload from "./pages/Upload";
import List from "./pages/List";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/upload/:postNum" element={<Detail />} />
          <Route path="/edit/:postNum" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
