const express = require("express");
const router = express.Router();
// const multer = require("multer");

const { Post } = require("../Model/Post.js");
const { Counter } = require("../Model/Counter.js");
const { User } = require("../Model/User.js");

const setUpload = require("../Util/upload.js");

router.post("/submit", (req, res) => {
  let temp = {
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
  };
  Counter.findOne({ name: "counter" })
    .exec()
    .then((counter) => {
      temp.postNum = counter.postNum; // postNum을 추가해줌
      User.findOne({ uid: req.body.uid })
        .exec()
        .then((userInfo) => {
          temp.author = userInfo._id;
          const CommunityPost = new Post(temp);
          CommunityPost.save().then(() => {
            // updateOne : 하나의 doc을 업데이트 하기위한 메소드 => 쿼리 두개 받음
            // ({어떤 doc을 업데이트 할 것 인지}, {어떻게 업데이트 할 것 인지})
            // $inc : 증가시키는 함수
            Counter.updateOne(
              { name: "counter" },
              { $inc: { postNum: 1 } }
            ).then(() => {
              res.status(200).json({ success: true });
            });
          });
        });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
  // Counter를 findOne 하는 과정 / CommunityPost를 만들고 저장하는 과정 / Counter를 updateOne하는 과정까지 에러 발생하면 catch 문에서 잡힘!
});

router.post("/list", (req, res) => {
  let sort = {};
  if (req.body.sort === "최신순") {
    sort.createdAt = -1;
  } else {
    sort.replyNum = -1;
  }

  Post.find({
    $or: [
      { title: { $regex: req.body.search } },
      { content: { $regex: req.body.search } },
    ],
  }) // 데이터베이스에서 document를 찾는 명령어
    .populate("author") // ref를 가지고 author 내용이 채워짐!
    .sort(sort)
    .skip(req.body.skip)
    .limit(5) // 한번 부를때 오는 데이터 수
    .exec() // find 이후 찾은 명령어를~
    .then((doc) => {
      // 200번 코드와 함께 postList라는 이름으로 docc을 보내준다.
      res.status(200).json({ success: true, postList: doc });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

router.post("/detail", (req, res) => {
  Post.findOne({ postNum: Number(req.body.postNum) })
    .populate("author")
    .exec()
    .then((doc) => {
      console.log(doc);
      res.status(200).json({ success: true, post: doc });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

router.post("/edit", (req, res) => {
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

router.post("/delete", (req, res) => {
  Post.deleteOne({ postNum: Number(req.body.postNum) })
    .exec()
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

/* 로컬 이미지 저장
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "image/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage }).single("file");
*/

router.post(
  "/image/upload",
  setUpload("toy-community/post"),
  (req, res, next) => {
    res.status(200).json({ success: true, filePath: res.req.file.location });
  }
);

module.exports = router;
