import m from "mithril";
// get User list
var UserList = require("./views/UserList");
// add route views for User form
var UserForm = require("./views/UserForm");
// For layout view
var Layout = require("./views/Layout");

// We can add routing by changing the m.mount call to a m.route call:
// m.mount(document.body, UserList);

// Route the path to bind the user list
m.route(document.body, "/list", {
  "/list": {
    render: function() {
      return m(Layout, m(UserList));
    }
  },
  "/edit/:id": {
    render: function(vnode) {
      return m(Layout, m(UserForm, vnode.attrs));
    }
  }
});
