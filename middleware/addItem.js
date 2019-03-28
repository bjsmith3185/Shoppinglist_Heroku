const shopping = require("../controllers/shoppingController");
const users = require("../controllers/usersController");
const list = require("./storeList");
const storeNames = require("./storeNames");
// ADDS item in shopping model

module.exports = {
  newItem: function(userId, data) {
    return new Promise((resolve, reject) => {
      // update the shopping collection with new item
      shopping
        .create(data)
        .then(dbresult => {
          // update the users collection with myStore value
          let newStore = {
            myStore: data.store
          };
          users
            .update(userId, newStore)
            .then(userResult => {
              // create the list of all items
              shopping
                .findAll()
                .then(shoppingAll => {
                  // create list of store names
                  storeNames
                    .nameList(shoppingAll)
                    .then(storeNames => {
                      // create store list and count
                      list
                        .storeList(data.store)
                        .then(specificList => {
                          let returnData = {
                            myStore: data.store,
                            allList: shoppingAll,
                            storeList: specificList.storeList,
                            countRemaining: specificList.countRemaining,
                            storeNames: storeNames
                          };

                          resolve(returnData);
                        })
                        .catch(err => console.log(err));
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
