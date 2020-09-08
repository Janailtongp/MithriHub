var m = require("mithril")

var Headbar = {
    search: '',
    view: () => { 
        return m("nav", [
            m("h1", { style: Headbar.css.title }, "MithriHub"),
            m("div", { style: Headbar.css.form }, [
                m("input", {
                    type: "text",
                    name: "search",
                    id: "search",
                    placeholder: "Search user",
                    oninput: function(event) { Headbar.search = event.target.value},
                    value: Headbar.search,
                    style: Headbar.css.textInput
                    
                }),
            m('button', { style: Headbar.css.githubButton , onclick: function () { m.route.set("/profile", {user: Headbar.search}) } }, 'Search')
            ]),
        ])
    },

    css:{
        title:{
            backgroundColor: '#eee',
            textAlign: 'center'
        },
        form:{
            textAlign: 'center' 
        },
        textInput:{
            width: '300px',
            padding: '10px',
            borderRadius: '5px'
        },
        githubButton:{
            backgroundColor: '#4CAF50',
            color: "#fff",
            padding: '10px',
            borderRadius: '5px'
        }
    }

}

export default Headbar