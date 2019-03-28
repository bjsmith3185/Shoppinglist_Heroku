import axios from "axios";

export default {
  // =========== route /populate/....

  populateUser: function() {
    return axios.post("/populate/users");
  },

  populateShopping: function() {
    return axios.post("/populate/shopping");
  },

  //============ system

  loadData: function(user_id) {
    // console.log(user_id)
    return axios.get("/api/system/load/" + user_id);
  },

  strikeThru: function(shopping_id, data) {
    return axios.put("/api/system/strike/" + shopping_id, data);
  },

  deleteItem: function(item, user) {
    return axios.delete("/api/system/delete/" + item + "/" + user);
  },

  selectStore: function(user_id, data) {
    return axios.put("/api/system/setstore/" + user_id, data);
  },

  addItem: function(user, data) {
    // console.log(data)
    return axios.post("/api/system/addItem/" + user, data);
  },

  logIn: function(data) {
    // console.log(data)
    return axios.put("/api/system/login", data);
  },


  // =============== shopping

  updateShoppingList: function(data) {
    return axios.post("./api/shopping", data);
  },

  getListItems: function() {
    return axios.get("./api/shopping");
  },


  //==================== User

  signOut: function(id) {
    return axios.put("/api/users/signout/" + id);
  }

  
};
