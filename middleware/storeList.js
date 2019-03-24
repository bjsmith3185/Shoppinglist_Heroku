const shopping = require('../controllers/shoppingController')
const count = require('./countRemaining')
// returns a specific list for the store passed in 

module.exports = {

    storeList: function(storeName) {
        return new Promise((resolve, reject) => {
            shopping.findByStore(storeName)
            .then(dbresults => {

                // get countRemaining
                count.count(dbresults)
                .then(countResult => {

                    // added myStore value here
                    let data = {
                        countRemaining: countResult,
                        storeList: dbresults,
                        myStore: storeName
                    }
                    resolve(data)
                })
                .catch((err) => console.log(err))

            })
            .catch((err) => console.log(err))
        })
    }

}