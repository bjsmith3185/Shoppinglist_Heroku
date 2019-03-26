const shopping = require("../controllers/shoppingController");
const list = require("./storeList");
const setMyStore = require("./setMyStore");
const storeNames = require("./storeNames");
// updates the strikeThru value in shopping model
// takes in shopping_id and value of true/false
module.exports = {
  delete: function(shopping_id, user_id) {
    return new Promise((resolve, reject) => {
      shopping.findById(shopping_id).then(findResult => {
        // console.log(findResult.store)
        shopping
          .remove(shopping_id)
          .then(dbresult => {
            // check if there are any items remaining after removing this one.

            shopping.findByStore(findResult.store).then(byCurrentStore => {
              console.log("by current store");
              console.log(byCurrentStore);
              if (byCurrentStore.length >= 1) {
                console.log("ther are still items left");
                list
                  .storeList(findResult.store)
                  .then(listResult => {
                    return resolve(listResult);
                  })
                  .catch(err => console.log(err));
              } else {
                console.log("all items for this store are gone");

                // call to shoppings collection to see if anything else is left
                shopping
                  .findAll()
                  .then(allResults => {
                    console.log("all shopping results");
                    console.log(allResults);
                    // send this to make storename array
                    storeNames
                      .nameList(allResults)
                      .then(allStores => {
                        console.log("new all stores array");
                        console.log(allStores);

                        setMyStore
                          .checkMyStore(allStores, user_id)
                          .then(setStore => {
                            console.log(setStore);
                            list
                              .storeList(setStore.myStore)
                              .then(results => {
                                console.log("this is the return data");
                                console.log(results);
                                return resolve(results);
                              })
                              .catch(err => console.log(err));
                          })
                          .catch(err => console.log(err));
                      })
                      .catch(err => console.log(err));
                  })
                  .catch(err => console.log(err));
              }
            });
          })
          .catch(err => console.log(err));
      });
    });
  }
};
