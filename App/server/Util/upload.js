const AWS = require("aws-sdk");
const endpoint = new AWS.Endpoint("https://kr.object.ncloudstorage.com");
const region = "kr-standard";
const path = require("path");
const config = require("../config/key.js");

const multer = require("multer");
const multerS3 = require("multer-s3");

const access_key = config.ACCESS_KEY;
const secret_key = config.SECRET_KEY;

const S3 = new AWS.S3({
  endpoint: endpoint,
  region: region,
  credentials: {
    accessKeyId: access_key,
    secretAccessKey: secret_key,
  },
});

function setUpload(bucket) {
  const upload = multer({
    storage: multerS3({
      s3: S3,
      bucket: bucket,
      acl: "public-read-write",
      key: function (req, file, cb) {
        let extension = path.extname(file.originalname);
        cb(null, Date.now().toString() + extension);
      },
    }),
  }).single("file");

  return upload;
}

module.exports = setUpload;
