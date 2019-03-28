const db = require("../models");

module.exports = {
  create: function(data) {
    return db.Users.create(data);
  },

  update: function(id, data) {
    return db.Users.findOneAndUpdate({ _id: id }, data, { new: true });
  },

  findById: function(id) {
    return db.Users.findById({ _id: id });
  }

};