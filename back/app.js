const express = require("express");
const postRouter = require("./routes/post");
const userRouter = require("./routes/user");
const postsRouter = require("./routes/posts");
const hashtagRouter = require("./routes/hashtag");
const db = require("./models");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const passportConfig = require("./passport");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");
const app = express();

dotenv.config();

db.sequelize
  .sync()
  .then(() => {
    console.log("db연결 성공!");
  })
  .catch(console.error);

passportConfig();

//get: url페이지에 직접 나타냄. locolhost:3065/post 가능
//post,delete: 생성/삭제, url페이지에서 출력되지 않음 , locolhost:3065/post 불가능, 포스트맨에서 확인 가능.

app.use(morgan("dev"));
app.use(
  cors({
    //origin:true 혹은 아래와 같이 쓰면 됨.
    origin: true, //원래 사이트 설정을 해서 서버는 origin주소만 데이터 전송 허용하겠다 를 의미.
    credentials: true, //쿠키를 같이 전달하고 싶으면 true로
  })
);
app.use("/", express.static(path.join(__dirname, "uploads")));
app.use(express.json()); //프론트에서 json형식으로 데이터를 보냈을때 req.body를 json형식으로 넣어줌
app.use(express.urlencoded({ extended: true })); //form submit방식을 썼을때 urlencoded방식으로 넘어옴.
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("hello express");
});

app.get("/", (req, res) => {
  res.send("hello api");
});

app.use("/post", postRouter);
app.use("/user", userRouter);
app.use("/posts", postsRouter);
app.use("/hashtag", hashtagRouter);

app.listen(process.env.PORT, () => {
  console.log(`${process.env.PORT}포트에서 서버 실행`);
});
