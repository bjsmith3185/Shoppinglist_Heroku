const db = require("../models");

module.exports = {
  checkPassword: function(data) {
    return new Promise((resolve, reject) => {
      db.Users.findOne({ name: data.name })
        .then(nameReturn => {
          let returnData = {
            userId: nameReturn._id
          };
          return resolve(returnData);
        })
        .catch(err => {
          console.log(err);
          return resolve(err);
        });
    });
  }
};
