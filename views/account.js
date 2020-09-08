var m = require("mithril")
import Profile from "../modules/Profile"
import Repos from "../modules/Repos"

var Account = {
    view(vnode) {
        return m("main", [
            m(Profile, {user:vnode.attrs.user}),
            m(Repos, {user:vnode.attrs.user})
        ])
    }
}

export default Account