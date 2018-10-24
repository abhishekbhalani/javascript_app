// src/models/User.js
var m = require("mithril");

// User object to export to root js
var User = {
  list: [],
  current: {},
  // Load List function to get all the user list from API
  loadList: function() {
    return m
      .request({
        method: "GET",
        url: "https://rem-rest-api.herokuapp.com/api/users",
        withCredentials: true
      })
      .then(function(result) {
        User.list = result.data;
      });
  },
  // Load function to get user by Id
  load: function(id) {
    return m
      .request({
        method: "GET",
        url: "https://rem-rest-api.herokuapp.com/api/users/" + id,
        withCredentials: true
      })
      .then(function(result) {
        User.current = result;
      });
  },
  // Save action to save user data
  save: function() {
    return m
      .request({
        method: "PUT",
        url: "https://rem-rest-api.herokuapp.com/api/users/" + User.current.id,
        data: User.current,
        withCredentials: true
      })
      .then(function(result) {
        alert("successfully user data saved.");
        m.route.set("/list");
      });
  },
  // Cancel action to redirect to main list
  cancel: function() {
    m.route.set("/list");
  }
};

module.exports = User;
