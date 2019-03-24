const shopping = require('../controllers/shoppingController')
const list = require('./storeList')
// ADDS item in shopping model

module.exports = {

    newItem: function(data) {
        return new Promise((resolve, reject) => {

            shopping.create(data)
            .then(dbresult => {

                // what ever store was just added
                // return the list for that store

                list.storeList(dbresult.store)
                .then(listResult => {
                    // console.log("what is in ner")
                    // console.log(listResult)
                    resolve(listResult)
                })
                .catch((err) => console.log(err))
  
            })
            .catch((err) => console.log(err))
        })
    }
}