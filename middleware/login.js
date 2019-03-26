const db = require("../models");
const loadShopping = require("../middleware/loadAllData");

module.exports = {
  checkPassword: function(data) {
    return new Promise((resolve, reject) => {
      db.Users.findOne({ name: data.name })
        .then(nameReturn => {
          console.log(nameReturn);

          resolve(nameReturn._id)

          // if (nameReturn.password === data.password) {
          //   // console.log("passwords match");
          //   // request to get all shopping data
          //   loadShopping
          //     .pageLoad(nameReturn._id)
          //     .then(shoppingResult => {
          //       // console.log("shopping results");
          //       // console.log(shoppingResult);
          //       resolve(shoppingResult);
          //     })
          //     .catch(err => console.log(err));
          // } else {
          //   // console.log("password is incorrect");
          //   let data = {};
          //   data.errors.password = "Password is incorrect";
          //   resolve(data);
          // }
        })
        .catch(err => console.log(err));
    });
  }
};
