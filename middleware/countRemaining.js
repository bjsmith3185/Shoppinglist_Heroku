
// returns the number of items without strike-thru

module.exports = {

    count: function(storeList) {
        return new Promise((resolve, reject) => {

            let count = 0;
            for (var q = 0; q < storeList.length; q++) {
              if (storeList[q].strikeThru === false) {
                // console.log("this one is false")
                // console.log(action.val)
                count++;
              }
            }

            resolve(count)

        })
    }

}