const Sequelize = require("sequelize");
const comment = require("./comment");
const hashtag = require("./hashtag");
const image = require("./image");
const post = require("./post");
const user = require("./user");

console.log("env:", process.env.NODE_ENV);

const env = process.env.NODE_ENV || "development";
console.log("env??:", env);
const config = require("../config/config")[env];
console.log("config??:", config);
const db = {};
console.log("env:", process.env.NODE_ENV);
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
db.Comment = comment;
db.Hashtag = hashtag;
db.Image = image;
db.Post = post;
db.User = user;

Object.keys(db).forEach((modelName) => {
  db[modelName].init(sequelize);
});

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
