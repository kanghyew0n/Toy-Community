const mongoose = require("mongoose");

const replySchema = new mongoose.Schema(
  {
    reply: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  { collection: "replys", timestamps: true }
);

// 아이디와 일치하는 유저의 정보를 author에 저장하게 함 => type: mongoose.Schema.Types.ObjectId,

const Reply = mongoose.model("Reply", replySchema);

module.exports = { Reply };
