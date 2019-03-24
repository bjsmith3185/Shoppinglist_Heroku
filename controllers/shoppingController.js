const db = require("../models");

module.exports = {

  create: function (data) {
    // console.log("shopping-controller")
    // console.log(data)
    return db.Shopping.create(data)
  },


  findAll: function () {
    console.log("findall")
    return db.Shopping
      .find({})
      .sort({ 'store' : 1 })
      // .populate({
      //   path: 'notes',
      //   // populate the notes value in pictures model
      //   // then populate the author value in comments model
      //   populate: { path: 'author' }
      // });
  },

    update: function (id, data) {
    return db.Shopping
      .findOneAndUpdate({ _id: id }, data , { new : true })
  },

  remove: function (id) {
    return db.Shopping
    .remove({_id : id})
  },

  findByStore: function(store) {
    // console.log("in findbystore")
    // console.log(store)
    return db.Shopping
    .find({ store: store})
  },

  findById: function(id) {
    return db.Shopping
    .findOne({ _id: id})
  },






  // findByPicture: function (id) {
  //   return db.Pictures
  //     .findById({ _id : id })
  // },

  
  


  

  // removeAll: function () {
  //   return db.Pictures
  //   .deleteMany({})
  // },

  // addNote: function (id, data) {
  //   // console.log("!!!!!!!!!!!!")
  //   // console.log(data)
  //   return db.Pictures
  //   .findOneAndUpdate({ _id: id }, { $push : { notes : data } }, { new : true } )
  //   .populate({
  //     path: 'notes',
  //     // populate the notes value in pictures model
  //     // then populate the author value in comments model
  //     populate: { path: 'author' }
  //   });
  // },

  
};
