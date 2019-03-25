const shopping = require("../controllers/shoppingController");
const users = require("../controllers/usersController");
const list = require("./storeList");
const count = require("./countRemaining");
const storeNames = require("./storeNames");
// ADDS item in shopping model

module.exports = {
  newItem: function(userId, data) {
    return new Promise((resolve, reject) => {
    //   console.log(data);
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
            //   console.log(userResult);
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
                        //   console.log(returnData)

                          resolve(returnData);

                        })
                        .catch(err => console.log(err));
                    })
                    .catch(err => console.log(err));
                })
                .catch(err => console.log(err));
            })
            .catch(err => console.log(err));

          //   shopping
          //     .findAll()
          //     .then(allResult => {
          //       // make store array here
          //       storeNames
          //         .nameList(allResult)
          //         .then(storeNames => {

          //           // get shopping list for the store above
          //         //   shopping
          //         //     .findByStore(data.store)
          //         //     .then(storeResult => {
          //         //       count
          //         //         .count(storeResult)
          //         //         .then(countResult => {
          //         //           let returnData = {
          //         //             myStore: data.store,
          //         //             allList: allResult,
          //         //             storeList: storeResult,
          //         //             countRemaining: countResult,
          //         //             storeNames: storeNames
          //         //           };
          //         //           resolve(returnData);
          //         //         })
          //         //         .catch(err => console.log(err));
          //         //     })
          //         //     .catch(err => console.log(err));
          //         })
          //         .catch(err => console.log(err));
          //     })
          //     .catch(err => console.log(err));

          // list.storeList(dbresult.store)
          // .then(listResult => {
          //     // console.log("what is in ner")
          //     // console.log(listResult)
          //     resolve(listResult)
          // })
          // .catch((err) => console.log(err))
        })
        .catch(err => console.log(err));
    });
  }
};
