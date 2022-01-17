const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  //Post , /post
  res.json("작성완료");
});

router.delete("/", (req, res) => {
  //Delete , /post
  res.send("삭제완료");
});

module.exports = router;
