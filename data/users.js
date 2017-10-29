const bcrypt = require("bcrypt-nodejs");
const saltRounds = 10;
const password1 = "123456";
const password2 = "123456";
const password3 = "123456";
const uuidV1 = require('uuid/v1');
const hash1 =bcrypt.hashSync(password1);
const hash2 =bcrypt.hashSync(password2);
const hash3 =bcrypt.hashSync(password3);

const users = [
  { _id: uuidV1(), 
    username: "YunzheXu", 
    firstName: "Yunzhe", 
    lastName: "Xu",
    authority: "normal",
    hashedPassword: hash1, 
  },
   { _id: uuidV1(), 
    username: "HaominZhang", 
    firstName: "Haomin", 
    lastName: "Zhang",
    authority: "normal",
    hashedPassword: hash2, 
  },
    { _id: uuidV1(), 
    username: "ZhiyuGuo", 
    firstName: "Zhiyu", 
    lastName: "Guo",
    profession: "normal",
    hashedPassword: hash3, 
  },
 ]

 let exportedMethods={
   findByUsername(username, done) {
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        if (user.username === username) {
        return done(null, user);
      }
    }
    return done(null, null);
},

    findById (_id, done) {
      for (let i = 0; i < users.length; i++) {
          let user = users[i];
          if (user._id === _id) {
          return done(null, user);
        }
      }
      return done(null, null);
  }
 }

 module.exports = exportedMethods;