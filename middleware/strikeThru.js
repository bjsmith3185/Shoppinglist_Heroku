const shopping = require('../controllers/shoppingController')
const list = require('./storeList')
// updates the strikeThru value in shopping model
// takes in shopping_id and value of true/false
module.exports = {

    strike: function(id, value) {
        return new Promise((resolve, reject) => {
            // let data = {
            //     strikeThru: value
            // }

            shopping.update(id, value)
            .then(dbresult => {

                list.storeList(dbresult.store)
                .then(listResult => {

                    resolve(listResult)
                })
                .catch((err) => console.log(err))
  
            })
            .catch((err) => console.log(err))
        })
    }
}
