const shopping = require('../controllers/shoppingController')
const list = require('./storeList')
// updates the strikeThru value in shopping model
// takes in shopping_id and value of true/false
module.exports = {

    delete: function(shopping_id) {
        return new Promise((resolve, reject) => {
            // let data = {
            //     strikeThru: value
            // }
            shopping.findById(shopping_id)
            .then(findResult => {
                // console.log(findResult.store)
                shopping.remove(shopping_id)
                .then(dbresult => {
                    // console.log("see if store name is here")
                    // console.log(dbresult)
    
                    // may need to send store name with originial
                    // request from api
    
    
                    list.storeList(findResult.store)
                    .then(listResult => {
    
                        resolve(listResult)
                    })
                    .catch((err) => console.log(err))
      
                })
                .catch((err) => console.log(err))

            })

            
        })
    }
}