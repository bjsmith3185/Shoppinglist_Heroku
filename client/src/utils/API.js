import axios from "axios";


export default {

  // =========== route /populate/....

  populateUser: function () {
    return axios.post("/populate/users");
  },

  populateShopping: function () {
    return axios.post("/populate/shopping");
  },

  
  // =============== shopping

  updateShoppingList: function (data) {
    return axios.post('./api/shopping', data)
  },

  getListItems: function () {
    return axios.get('./api/shopping');
  },

  deleteItem: function (id) {
    return axios.delete('./api/shopping/' + id)
  },

  checkOff: function (id, data) {
    console.log("api")
    return axios.put('./api/shopping/' + id, data)
  },


};

