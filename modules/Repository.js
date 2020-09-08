var m = require("mithril")

var Repository = {
    response: [],
    oninit: function(vnode)
    {
        m.request({
            method: "GET",
            url: vnode.attrs.url, 
        })
        .then(function(data) 
        {   
            Repository.response = m('nav', {style:Repository.css.custton},[
                m("h2", data.full_name),
                m("p", data.description == null ? 'Sem descrição': data.description),
                m("p", "Linguagem: "+ (data.language == null ? 'Não detectada': data.language)),
                m("p",  "Clone: <"+data.clone_url+">"),
                m("a", {href: "#!/profile?user="+data.owner.login},  "Voltar"),
            ])
        },  
        function (erro)
        {
            console.log(erro)
        })
    },
    view: () =>{
        return m("ul", [
            Repository.response
        ])
    },
    css:{
        custton:{
            textAlign: 'center'
        }
    }
}

export default Repository