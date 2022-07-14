const express = require("express");
const { Hashtag, Post, Image, Comment, User } = require("../models");
const router = express.Router();
const { Op } = require("sequelize");

router.get("/:hashtag", async (req, res, next) => {
  try {
    const where = {};
    if (parseInt(req.query.lastId, 10)) {
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) };

      //lastId  보다 작은거 10개를 불러온다.
    }
    const posts = await Post.findAll({
      where,
      limit: 10, //10개만 가져옴
      //offset: 0,
      //offset + 1 번 게시물부터 limit+offset한 숫자의 게시물을 가져와라
      //offset 방식은 게시물 추가 혹은 삭제할 때 꼬일수도 있음
      order: [
        ["createdAt", "DESC"],
        [Comment, "createdAt", "DESC"],
      ], //내림차순, 최신게시물부터 가져오기

      include: [
        {
          model: Hashtag,
          where: { name: decodeURIComponent(req.params.hashtag) }, //모든 where 동시에 만족하는 애를 적용시킴
        },
        {
          model: User,
          attributes: ["id", "nickname"],
        },
        { model: Image },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ["id", "nickname"],
            },
          ],
        },
        {
          model: User, //좋아요 누른 사람
          as: "Likers",
          attributes: ["id"],
        },
        {
          model: Post,
          as: "Retweet",
          include: [
            {
              model: User,
              attributes: ["id", "nickname"],
            },
            {
              model: Image,
            },
          ],
        },
      ],
    });
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
