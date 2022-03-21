// const { DataTypes } = require("sequelize/dist");
// const { sequelize } = require(".");

const d = require("d");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User", //mysql에서는 users 테이블 생성
    {
      //id:{} 기본적으로 mysql에서 생성해줌.
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
      nickname: { type: DataTypes.STRING(20), allowNull: false },
      password: { type: DataTypes.STRING(100), allowNull: false },
    },
    { charset: "utf8", collate: "utf8_general_ci" } //한글 저장
  );
  User.associate = (db) => {
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Comment);
    db.User.belongsToMany(db.Post, { through: "Like", as: "Liked" });
    db.User.belongsToMany(db.User, {
      through: "Follow", //through는 테이블 이름을 바꿔줌
      as: "Followers",
      foreignKey: "FollowingId", //foreignKey는 컬럼의 어떤 id인지 알려줌
    });
    db.User.belongsToMany(db.User, {
      through: "Follow",
      as: "Followings",
      foreignKey: "FollowerId",
    });
  };
  return User;
};
