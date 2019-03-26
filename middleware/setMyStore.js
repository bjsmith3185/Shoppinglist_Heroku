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

        users.update(user_id, NewMyStore)
        .then(newStore => {
            resolve(NewMyStore)
        })
        .catch((err) => console.log(err))








    //   // this one is for no items remaining
    //   if (stores.storeList.length === 0) {
    //     // console.log("no list items now")
    //     let newStore = {
    //       myStore: ""
    //     };
    //     users
    //       .update(user_id, newStore)
    //       .then(dbresult => {
    //         // console.log("myStore updated")
    //         resolve(newStore);
    //       })
    //       .catch(err => console.log(err));
    //   }
    // // //   // this one is if there is only one store, check it is same as mystore
    // // //   else if ( stores.storeList.length === 1 ) {
            

    // // //   }
    // //   // this one is when myStore is empty but there are others
    // //   else if (stores.storeList.length >= 1) {
    // //     for (var i = 0; i < stores.storeList.length; i++ ) {
    // //         if (stores.storeList[i] === myStore) {

    // //         }

    // //     }


    // //   }
    // //   // or just return the original myStore
    //   else {
    //     let originalStore = {
    //       myStore: myStore
    //     };

    //     resolve(originalStore);
    //   }
    });
  }
};
