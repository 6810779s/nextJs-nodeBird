// const { DataTypes } = require("sequelize/dist");
// const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  const Hashtag = sequelize.define(
    "Hashtag",
    {
      //id:{} 기본적으로 mysql에서 생성해줌.
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    { charset: "utf8mb4", collate: "utf8mb4_general_ci" } //한글, 이모티콘 저장
  );
  Hashtag.associate = (db) => {
    db.Hashtag.belongsToMany(db.Post, { through: "PostHashtag" });
  };

  //복잡한 관계를 위한 실용적인 툴 =====> erd
  return Hashtag;
};
