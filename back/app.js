const express = require("express");
const app = express();
const { executeStatement, connection } = require("./server");

app.listen(8080, function () {
  console.log("listening on 8080");
});
const information = [];
app.get("/", (req, res) => {
  const content = "select * from [guidancepro].[dbo].[user_testDB]";
  connection.on("connect", function (err) {
    if (err) {
      console.log("err:", err);
    } else {
      console.log("Connected");
      res.send("express");
      executeStatement(content);
    }
  });
  connection.connect();
});

app.get("/welcome", (req, res) => {
  res.send(information);
});
