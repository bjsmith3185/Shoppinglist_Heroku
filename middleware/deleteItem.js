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
        shopping
          .remove(shopping_id)
          .then(dbresult => {
            // check if there are any items remaining after removing this one.
            shopping.findByStore(findResult.store).then(byCurrentStore => {
              if (byCurrentStore.length >= 1) {
                list
                  .storeList(findResult.store)
                  .then(listResult => {
                    return resolve(listResult);
                  })
                  .catch(err => console.log(err));
              } else {
                // call to shoppings collection to see if anything else is left
                shopping
                  .findAll()
                  .then(allResults => {
                    // send this to make storename array
                    storeNames
                      .nameList(allResults)
                      .then(allStores => {
                        setMyStore
                          .checkMyStore(allStores, user_id)
                          .then(setStore => {
                            list
                              .storeList(setStore.myStore)
                              .then(results => {
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
