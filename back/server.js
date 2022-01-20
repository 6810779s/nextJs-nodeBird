const config = require("./lib/config");
const Connection = require("tedious").Connection;
const Request = require("tedious").Request;
const TYPES = require("tedious").TYPES;

const information = [];

const connection = new Connection(config);
// connection.on("connect", function (err) {
//   if (err) {
//     console.log("err:", err);
//   } else {
//     console.log("Connected");
//     executeStatement();
//   }
// });
// const content = "select * from [guidancepro].[dbo].[user_testDB]";
// const content_update = `update [guidancepro].[dbo].[user_testDB] set UserName='eun' where UserName like N'eunhee'`;
const executeStatement = (content) => {
  console.log("dd1");
  request = new Request(content, (err, rowCount) => {
    if (err) {
      console.log(err);
    } else {
      console.log(rowCount + "rows");
    }
    connection.close();
  });

  request.on("row", (columns) => {
    const a = {};
    columns.forEach((column) => {
      if (column.value === null) {
        console.log(null);
      } else {
        const value = column.value;

        a[column.metadata.colName] = value;
      }
    });
    information.push(a);
    console.log("information", information);
  });

  request.on("done", function (rowCount, more) {
    console.log(rowCount + " rows returned");
  });

  // Close the connection after the final event emitted by the request, after the callback passes
  request.on("requestCompleted", function (rowCount, more) {
    connection.close();
  });
  connection.execSql(request);
};

// connection.connect();

module.exports = { connection, executeStatement };
