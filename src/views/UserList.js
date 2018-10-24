// src/views/UserList.js
var m = require("mithril");
var User = require("../models/User");

module.exports = {
  oninit: User.loadList,
  view: function() {
    return m(
      ".user-list",
      User.list.map(function(user, index) {
        return m(
          "a.user-list-item",
          {
            href: "/edit/" + user.id,
            oncreate: m.route.link,
            class: index % 2 === 0 ? "alt" : ""
          },
          user.firstName + " " + user.lastName
        );
      })
    );
  }
};
