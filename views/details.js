var m = require("mithril")
import Repository from "../modules/Repository.js"
import Profile from "../modules/Profile"

var Details = {
    view(vnode) {
        return m("main", [
            m(Profile, {user:vnode.attrs.user}),
            m(Repository, {url:vnode.attrs.url}),
        ])
    }
}

export default Details