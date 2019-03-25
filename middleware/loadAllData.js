const shopping = require("../controllers/shoppingController");
const users = require("../controllers/usersController");
const count = require("./countRemaining");
const storeNames = require("./storeNames");

module.exports = {
  pageLoad: function(id) {
    // console.log("in load alldata middleware");
    // console.log(id);
    return new Promise((resolve, reject) => {
      // takes in user._id but we dong have one yet

      users
        .findById(id)
        .then(userResult => {
          shopping
            .findAll()
            .then(allResult => {
              // make store array here
              storeNames
                .nameList(allResult)
                .then(storeNames => {
                  // if no store is set for user.myStore
                  let myTempStore = "";
                  if (!userResult.myStore) {
                    // console.log("no user myStore saved");
                    myTempStore = storeNames[0];
                    // console.log(myTempStore);
                  } else {
                    myTempStore = userResult.myStore;
                  }

                  // get shopping list for the store above
                  shopping
                    .findByStore(myTempStore)
                    .then(storeResult => {
                      count
                        .count(storeResult)
                        .then(countResult => {
                          let returnData = {
                            myStore: myTempStore,
                            allList: allResult,
                            storeList: storeResult,
                            countRemaining: countResult,
                            name: userResult.name,
                            userId: userResult._id,
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
