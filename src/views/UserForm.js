// src/views/UserForm.js
var m = require("mithril");
var User = require("../models/User");

// Export module with user form
module.exports = {
  oninit: function(vnode) {
    User.load(vnode.attrs.id);
  },
  view: function() {
    return m(
      "form",
      {
        onsubmit: function(e) {
          e.preventDefault();
          User.save();
        },
        onreset: function(e) {
          e.preventDefault();
          User.cancel();
        }
      },
      [ /* Set up form control with placeholder */
        m("label.control-label", "First name"),
        m("input.input[type=text][placeholder=First name]", {
          oninput: m.withAttr("value", function(value) {
            User.current.firstName = value;
          }),
          value: User.current.firstName
        }),
        m("label.control-label", "Last name"),
        m("input.input[placeholder=Last name]", {
          oninput: m.withAttr("value", function(value) {
            User.current.lastName = value;
          }),
          value: User.current.lastName
        }),
        m("button.button[type=submit][class=btn-primary]", "Save"),
        m("span[class='spacing']", ""),
        m("button.button[type=reset][class=btn-default]", "Cancel")
      ]
    );
  }
};
