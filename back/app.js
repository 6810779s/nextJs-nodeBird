const express = require("express");
const app = express();
const postRouter = require("./routes/posts");
/*
자주쓰이는 용어
app.get 가져오다
app.post 생성하다
app.put 전체수정
app.delete 제거
app.patch 부분 수정
app.options 찔러보기, 요청 보낼 수 있는지 없는지 서버에 찔러보기
app.head 헤더만 가져오기

애매하면 그냥 post사용하면 됨. 팀원끼리 타협해서 사용하면 됨.
*/
app.get("/", (req, res) => {
  res.send("hello express");
});

app.get("/", (req, res) => {
  res.send("hello api");
});
app.get("/posts", (req, res) => {
  res.json([
    { id: 1, content: "hello" },
    { id: 2, content: "hello2" },
    { id: 3, content: "hello3" },
    { id: 4, content: "hello4" },
  ]);
});

app.use('/post',postRouter); //

app.listen(3002, () => {
  console.log("3002포트에서 서버 실행");
});
