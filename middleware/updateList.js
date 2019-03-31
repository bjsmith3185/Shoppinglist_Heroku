const shopping = require("../controllers/shoppingController");
const users = require("../controllers/usersController");
const storeList = require("../middleware/storeList");
const storeNames = require("./storeNames");

module.exports = {
  edit: function(id, data) {

    return new Promise((resolve, reject) => {
      // update the shopping collection
      let user_id = data.userInfo.userId;
      let currentStore = data.userInfo.myStore;

      shopping
        .update(id, data.data)
        .then(updated => {
          shopping
            .findAll()
            .then(allList => {
              // create a store name list
              storeNames
                .nameList(allList)
                .then(nameList => {
                  // check to see if the current myStore still exists
                  let useOldStore = false;
                  nameList.forEach(store => {
                    if (store === currentStore) {
                      // current store matches
                      useOldStore = true;
                    }
                  });
                  let userStore;
                  if (!useOldStore) {
                    // the current store doesnt exist
                    userStore = data.data.store;
                    users
                      .update(user_id, { myStore: data.data.store })
                      .then(userUpdated => {})
                      .catch(err => console.log(err));
                  } else {
                    userStore = currentStore;
                  }
                  storeList
                    .storeList(userStore)
                    .then(myStoreList => {
                      myStoreList.storeNames = nameList;
                      return resolve(myStoreList);
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
