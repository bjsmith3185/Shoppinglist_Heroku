const users = require("../controllers/usersController");
// // takes in the array of stores
// // if myStore is not equal to one of these
// // myStore is updated to match position [0]

module.exports = {
  checkMyStore: function(stores, user_id, myStore) {
    return new Promise((resolve, reject) => {
      let NewMyStore = {
        myStore: stores[0]
      };
      users
        .update(user_id, NewMyStore)
        .then(newStore => {
          resolve(NewMyStore);
        })
        .catch(err => console.log(err));
    });
  }
};
