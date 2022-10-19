const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const port = 3001;
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

app.use(express.static(path.join(__dirname, "../client/build")));
// client 단에서 보내는 값을 읽어올 수 없어서 undefined => 파싱해줘야함 => body parsor
// 내장 모듈 (아래) => 값을 읽어올 수 있음
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { Post } = require("./Model/Post.js");

app.listen(port, () => {
  // 데이테베이스 연결 시도
  mongoose
    .connect(
      `mongodb+srv://kanghyew0n:${process.env.SERVER_DB_PW}@cluster0.uoxanxt.mongodb.net/Community?retryWrites=true&w=majority`
    )
    .then(() => {
      console.log(`Example app listening on port ${port}`);
      console.log(`Connecting mongoDB...`);
    })
    .catch((err) => {
      // console.log 에서 자바스크립트 변수를 사용하는 방법 (`${}`)
      console.log(`${err}`);
    });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.post("/api/test", (req, res) => {
  const CommunityPost = new Post({ title: "test", content: "테스트입니다" });
  CommunityPost.save().then(() => {
    res.status(200).json({ success: "성콩", text: "hihi" });
  });
});
