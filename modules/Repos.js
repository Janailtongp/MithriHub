var m = require("mithril")

var Repos = {
    response: [],
    oninit: function(vnode)
    {
        m.request({
            method: "GET",
            url: "https://api.github.com/users/"+vnode.attrs.user+"/repos",
        })
        .then(function(data) 
        {   
            var prov =[]
            for(let i in data){
                prov.push(
                    m("li", [
                        m("a", {href:"#!/details?url="+data[i].url+"&user="+vnode.attrs.user}, data[i].name)
                    ])       
                )
            }
            Repos.response = prov
        },  
        function (erro)
        {
            console.log(erro)
        })
    },
    view: () =>{
        return m("ul", {style: Repos.css.list},[
            Repos.response
        ])
    },
    css:{
        list:{
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '200px',
        },
        
    }
   
}

export default Repos