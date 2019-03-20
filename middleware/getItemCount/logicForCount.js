const shopping = require("../../controllers/shoppingController");

module.exports = {
  remainingItems: function() {
    return new Promise((resolve, reject) => {
      shopping.findAll().then(dbresult => {
        console.log("dbresult############");
        // console.log(dbresult)

        let count = 0;
        // console.log(returnData)

        for (var i = 0; i < dbresult.length; i++) {
          if (!dbresult.strikeThru) {
            count++;
          }
        }

        let returnData = {
          list: dbresult,
          countRemaining: count
        };

        console.log(returnData);
        resolve(returnData);
      });
    }).catch(err => console.log(err));
  }
};
