const db = require("../models");

module.exports = {
  create: function(data) {
    // console.log("is this here?????");
    // console.log(data);
    return db.Users.create(data);
  },

  update: function(id, data) {
    // console.log("look here")
    // console.log(data)
    return db.Users.findOneAndUpdate(
      { _id: id },
      data,
      { new: true }
    );
  },

  findById: function(id) {
    return db.Users.findById({ _id: id });
  },

 











  // findAll: function () {
  //   return db.Pictures
  //     .find({})
  //     .populate({
  //       path: 'notes',
  //       // populate the notes value in pictures model
  //       // then populate the author value in comments model
  //       populate: { path: 'author' }
  //     });
  // },

  // findByPicture: function (id) {
  //   return db.Pictures
  //     .findById({ _id : id })
  // },

  // update: function (id, data) {
  //   return db.Pictures
  //     .findOneAndUpdate({ _id: id }, data , { new : true })
  // },

  // remove: function (id) {
  //   return db.Pictures
  //   .remove({_id : id})
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
