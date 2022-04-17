const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const { User, Post } = require("../models");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
const passport = require("passport");
const db = require("../models");

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
    if (exUser) {
      return res.status(403).send("이미 사용중인 아이디 입니다.");
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
    const followers = await user.getFollowers();
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
    const followings = await user.getFollowings();
    res.status(200).json(followings);
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
