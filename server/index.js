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
const { Counter } = require("./Model/Counter.js");

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

app.post("/api/post/submit", (req, res) => {
  let temp = req.body;
  Counter.findOne({ name: "counter" })
    .exec()
    .then((counter) => {
      temp.postNum = counter.postNum; // postNum을 추가해줌
      const CommunityPost = new Post(temp);
      CommunityPost.save().then(() => {
        // updateOne : 하나의 doc을 업데이트 하기위한 메소드 => 쿼리 두개 받음
        // ({어떤 doc을 업데이트 할 것 인지}, {어떻게 업데이트 할 것 인지})
        // $inc : 증가시키는 함수
        Counter.updateOne({ name: "counter" }, { $inc: { postNum: 1 } }).then(
          () => {
            res.status(200).json({ success: true });
          }
        );
      });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
  // Counter를 findOne 하는 과정 / CommunityPost를 만들고 저장하는 과정 / Counter를 updateOne하는 과정까지 에러 발생하면 catch 문에서 잡힘!
});

app.post("/api/post/list", (req, res) => {
  Post.find() // 데이터베이스에서 document를 찾는 명령어
    .exec() // find 이후 찾은 명령어를~
    .then((doc) => {
      // 200번 코드와 함께 postList라는 이름으로 docc을 보내준다.
      res.status(200).json({ success: true, postList: doc });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

app.post("/api/post/detail", (req, res) => {
  Post.findOne({ postNum: Number(req.body.postNum) })
    .exec()
    .then((doc) => {
      console.log(doc);
      res.status(200).json({ success: true, post: doc });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

app.post("/api/post/edit", (req, res) => {
  let temp = {
    title: req.body.title,
    content: req.body.content,
  };
  // $set => doc을 완전히 새로운 정보로 교체
  Post.updateOne({ postNum: Number(req.body.postNum) }, { $set: temp })
    .exec()
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});


app.post("/api/post/delete", (req, res) => {
  Post.deleteOne({ postNum: Number(req.body.postNum) })
    .exec()
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});
