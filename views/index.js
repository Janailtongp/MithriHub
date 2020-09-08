var m = require("mithril")
import Headbar from "../modules/Headbar.js"


var Index = {
    view() {
        return m("main", [
            m(Headbar),
        ])
    }
}

export default Index