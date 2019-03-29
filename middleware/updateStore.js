const users = require("../controllers/usersController");
const storeList = require("./storeList");
const storeNames = require("./storeNames");
const shopping = require("../controllers/shoppingController");

// updates the slected store in the users model
// takes in storeName and user_id
module.exports = {
  setStore: function(user_id, storeName) {
    return new Promise((resolve, reject) => {
      users
        .update(user_id, storeName)
        .then(dbresult => {
          shopping
            .findAll()
            .then(resultAll => {
              storeList
                .storeList(dbresult.myStore)
                .then(storeResult => {
                  storeNames
                    .nameList(resultAll)
                    .then(allData => {
                      storeResult.storeNames = allData;
                      resolve(storeResult);
                    })
                    .catch(err => console.log(err));
                })
                .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    });
  }
};
