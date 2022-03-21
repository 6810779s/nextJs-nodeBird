// const { DataTypes } = require("sequelize/dist");
// const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      //id:{} 기본적으로 mysql에서 생성해줌.
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    { charset: "utf8mb4", collate: "utf8mb4_general_ci" } //한글, 이모티콘 저장
  );
  Comment.associate = (db) => {
    db.Comment.belongsTo(db.User); //User id 라는 컬럼을 자동 생성해줌
    db.Comment.belongsTo(db.Post); //post id 라는 컬럼을 자동 생성해줌
  };
  return Comment;
};
