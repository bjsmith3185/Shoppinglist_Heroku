const users = require('../controllers/usersController');
const storeList = require('./storeList')

// updates the slected store in the users model
// takes in storeName and user_id
module.exports = {

    setStore: function(user_id, storeName) {
        return new Promise((resolve, reject) => {
        //    console.log("???")
        //    console.log(storeName)
            users.update(user_id, storeName)
            .then(dbresult => {
                // console.log(dbresult)

                storeList.storeList(dbresult.myStore)
                .then(storeResult => {

                    let data = {
                        myStore: dbresult.myStore,
                        storeList: storeResult.storeList,
                        countRemaining: storeResult.countRemaining
                    }
                    // console.log(data)

                    resolve(data)
                })
                .catch((err) => console.log(err))
            })
            .catch((err) => console.log(err))
        })
    }
}



















