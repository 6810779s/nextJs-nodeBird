const config = {
  server: process.env.NODE_APP_API,

  options: {
    database: process.env.DA_NAME,
    encrypt: false,
  },
  authentication: {
    type: "default",
    options: {
      userName: process.env.DB_USER,
      password: process.env.DB_PWD,
    },
  },
  /*
 ,options: {
   debug: {
     packet: true,
     data: true,
     payload: true,
     token: false,
     log: true
   },
   database: 'DBName',
   encrypt: true // for Azure users
 }
 */
};

module.exports = config;
