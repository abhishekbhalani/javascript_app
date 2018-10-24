// src/views/Layout.js
var m = require("mithril");

module.exports = {
  view: function(vnode) {
    return m(".container-fluid.no-pad", [
      m("main.layout", [
        m("nav.menu.navbar navbar-default navbar-fixed-top", [
          m("a[href='/list']", { oncreate: m.route.link }, "User List")
        ]),
        m("section", vnode.children)
      ]),
      m("footer", "© 2018 Shine Softwares")
    ]);
  }
};
