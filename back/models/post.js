// const { DataTypes } = require("sequelize/dist");
// const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      //id:{} 기본적으로 mysql에서 생성해줌.
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    { charset: "utf8mb4", collate: "utf8mb4_general_ci" } //한글, 이모티콘 저장
  );
  Post.associate = (db) => {
    db.Post.belongsTo(db.User); //post.addUser, post.getUser, post.setUser
    //belongsTo가 생기는 곳에 UserId:{}라는 컬럼이 생긴다.
    db.Post.belongsToMany(db.Hashtag, { through: "PostHashtag" }); //post.adHashtags
    db.Post.hasMany(db.Comment); //post.addComments, post.getComments
    db.Post.hasMany(db.Image); //post.addImages, post.getImages
    db.Post.belongsToMany(db.User, { through: "Like", as: "Likers" }); //post.addLikers, post.removeLikers
    db.Post.belongsTo(db.Post, { as: "Retweet" }); //post.addRetweet
    // postId컬럼에서 retweetId이름으로 바뀜
  };
  return Post;
};
