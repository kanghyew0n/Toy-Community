const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    postNum: Number,
    image: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    replyNum: {
      type: Number,
      default: 0,
    },
  },
  { collection: "posts" }
);

// 아이디와 일치하는 유저의 정보를 author에 저장하게 함 => type: mongoose.Schema.Types.ObjectId,

const Post = mongoose.model("Post", postSchema);

module.exports = { Post };
