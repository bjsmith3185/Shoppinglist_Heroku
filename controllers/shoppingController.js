const db = require("../models");

module.exports = {
  create: function(data) {
    return db.Shopping.create(data);
  },

  findAll: function() {
    console.log("findall");
    return db.Shopping.find({}).sort({ store: 1 });
  },

  update: function(id, data) {
    return db.Shopping.findOneAndUpdate({ _id: id }, data, { new: true });
  },

  remove: function(id) {
    return db.Shopping.remove({ _id: id });
  },

  findByStore: function(store) {
    return db.Shopping.find({ store: store });
  },

  findById: function(id) {
    return db.Shopping.findOne({ _id: id });
  }
};
