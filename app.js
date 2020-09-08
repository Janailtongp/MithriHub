var m = require("mithril")


import Index from "./views/index"
import Account from "./views/account"
import Details from "./views/details"

var root = document.body

m.route(root, "/search", {
    "/search": Index,
    "/profile": Account,
    "/details": Details,
})
