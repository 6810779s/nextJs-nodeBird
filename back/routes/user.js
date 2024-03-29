const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const { User, Post, Comment, Image } = require("../models");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
const passport = require("passport");
const db = require("../models");
const { Op } = require("sequelize");

router.get("/", async (req, res, next) => {
  console.log(req.headers);
  try {
    if (req.user) {
      const fullUserWithoutPassword = await User.findOne({
        where: { id: req.user.id },
        // attributes: ["id", "nickname", "email"], id,nickname,email 정보 가져오기
        attributes: { exclude: ["password"] }, //비밀번호 빼고 가져오기
        include: [
          {
            model: Post,
            attributes: ["id"],
          },
          {
            model: User,
            as: "Followings",
            attributes: ["id"],
          },
          {
            model: User,
            as: "Followers",
            attributes: ["id"],
          },
        ],
      });

      res.status(200).json(fullUserWithoutPassword);
    } else {
      res.status(200).json(null);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/followers", isLoggedIn, async (req, res, next) => {
  //GET user/followers
  try {
    const user = await User.findOne({
      where: {
        id: req.user.id,
      },
    });

    if (!user) {
      return res.status(403).send("존재하지 않는 사용자 입니다.");
    }
    const followers = await user.getFollowers({
      limit: parseInt(req.query.limit, 10),
    });
    res.status(200).json(followers);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/followings", isLoggedIn, async (req, res, next) => {
  //GET user/followings
  try {
    const user = await User.findOne({
      where: {
        id: req.user.id,
      },
    });
    if (!user) {
      return res.status(403).send("존재하지 않는 사용자 입니다.");
    }

    const followings = await user.getFollowings({
      limit: parseInt(req.query.limit, 10),
    });
    res.status(200).json(followings);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/:userId", async (req, res, next) => {
  try {
    const fullUserWithoutPassword = await User.findOne({
      where: { id: req.params.userId },
      // attributes: ["id", "nickname", "email"], id,nickname,email 정보 가져오기
      attributes: { exclude: ["password"] }, //비밀번호 빼고 가져오기
      include: [
        {
          model: Post,
          attributes: ["id"],
        },
        {
          model: User,
          as: "Followings",
          attributes: ["id"],
        },
        {
          model: User,
          as: "Followers",
          attributes: ["id"],
        },
      ],
    });
    if (fullUserWithoutPassword) {
      res.status(200).json(fullUserWithoutPassword);
      
    } else {
      res.status(404).json("존재하지 않는 사용자 입니다.");
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/:userId/posts", async (req, res, next) => {
  try {
    const where = { UserId: req.params.userId };
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

router.post("/login", isNotLoggedIn, (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      // info는 클라이언트 에러
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      const fullUserWithoutPassword = await User.findOne({
        where: { id: user.id },
        // attributes: ["id", "nickname", "email"], id,nickname,email 정보 가져오기
        attributes: { exclude: ["password"] }, //비밀번호 빼고 가져오기
        include: [
          {
            model: Post,
            attributes: ["id"],
          },
          {
            model: User,
            as: "Followings",
            attributes: ["id"],
          },
          {
            model: User,
            as: "Followers",
            attributes: ["id"],
          },
        ],
      });
      return res.status(200).json(fullUserWithoutPassword);
    });
  })(req, res, next); //미들웨어 확장
});

router.post("/logout", isLoggedIn, (req, res, next) => {
  req.logout();
  req.session.destroy();
  res.send("ok");
});

router.post("/", isNotLoggedIn, async (req, res, next) => {
  try {
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    const exNickname = await User.findOne({
      where: {
        nickname: req.body.nickname,
      },
    });
    if (exUser) {
      return res.status(403).send("이미 사용중인 이메일 입니다.");
    } else if (exNickname) {
      return res.status(403).send("이미 사용중인 닉네임 입니다.");
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10); //10~12 보안 정도
    await User.create({
      email: req.body.email,
      password: hashedPassword,
      nickname: req.body.nickname,
    });
    // res.setHeader("Access-Control-Allow-Origin", "http://localhost:3060");
    res.status(201).send("ok"); //201은 생성 완료됨.
  } catch (error) {
    console.error(error);
    next(error); //next에러 한방에 처리
  }
});

router.patch("/nickname", isLoggedIn, async (req, res, next) => {
  try {
    const exNickname = await User.findOne({
      where: {
        nickname: req.body.nickname,
      },
    });
    if (exNickname) {
      return res.status(403).send("이미 사용중인 닉네임 입니다.");
    }

    await User.update(
      { nickname: req.body.nickname },
      { where: { id: req.user.id } }
    );
    res.status(200).json({ nickname: req.body.nickname });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.patch("/:userId/follow", isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.userId,
      },
    });
    if (!user) {
      return res.status(403).send("존재하지 않는 사용자 입니다.");
    }
    await user.addFollowers(req.user.id);
    res.status(200).json({
      UserId: parseInt(req.params.userId, 10),
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete("/:userId/follow", isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.userId,
      },
    });
    if (!user) {
      return res.status(403).send("존재하지 않는 사용자 입니다.");
    }
    await user.removeFollowers(req.user.id);
    res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

/*
res.status중 숫자 의미
200번대 성공
300번대 리다이렉트
400번대 클라이언트 에러
500번대 서버 에러
*/

module.exports = router;
