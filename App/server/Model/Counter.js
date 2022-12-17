const mongoose = require("mongoose");

const counterSchema = new mongoose.Schema({
  name: String,
  postNum: Number,
  userNum : Number
}, {collection : "counter"} );

const Counter = mongoose.model("Counter", counterSchema);

module.exports = { Counter };
// https://velog.io/@wngud4950/AWS-multer-s3-upload-%EC%98%A4%EB%A5%98
// multer-s3(3) 버전과 aws 버전 (2) 이 안맞아서 => s3를 다운그레이드 해주었당
// npm i multer-s3@^2 --save
