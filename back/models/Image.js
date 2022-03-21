// const { DataTypes } = require("sequelize/dist");
// const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    "Image",
    {
      //id:{} 기본적으로 mysql에서 생성해줌.
      src: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
    },
    { charset: "utf8", collate: "utf8_general_ci" } //한글저장
  );
  Image.associate = (db) => {
    db.Image.belongsTo(db.Post);
  };
  return Image;
};
