// return an array of store names

module.exports = {
  nameList: function(list) {
    return new Promise((resolve, reject) => {
      let names = [];
      names = list.map(item => item.store);
      let uniqueNames = [...new Set(names)];

      resolve(uniqueNames);
    });
  }
};
