var m = require("mithril")

var Profile = {
    response: '',
    oninit: function(vnode)
    {
        m.request({
            method: "GET",
            url: "https://api.github.com/users/"+vnode.attrs.user,
        })
        .then(function(data) 
        {       
                Profile.response = m("ul", {style:Profile.css.head},[
                    Profile.head_func(data.login, data.avatar_url, data.name, data.bio),                  
                    m('p', m("a",{href: "#!/search"}, "Início" )),
                    m('h3',  "Lista de repositórios ("+ data.public_repos+")" ),
                  
                ]) 
        }, 
        function (erro)
        {
            console.log(erro)
            Profile.response = m("main",[
            Profile.erro_func()
                ])
        })
    },
    view: function () 
    {
        return m("div.profile", [
            Profile.response
        ])
    },

    head_func: (user, url, name, bio) =>
        {
            return [
                    m("h1.title", "MithriHub - @"+user),

                    m("img", {src: url, title:user, style: Profile.css.photo}),

                    m("h3",'Nome completo: '),
                    m('p', name == null? 'Não definido': name),

                    m("h3",'Bio: '),
                    m("p", bio == null ? 'Não definida': bio),
                ]
        },

    erro_func: () =>
    {
        return [
            m("h1.title",{style:Profile.css.head}, "Usuário não encontrado"),
            m('p',{style:Profile.css.head}, m("a",{href: "#!/search"}, "Voltar" )),
        ]
    },
    css:{
        photo:{
            width: '200px',
            height: '200px',
            borderRadius: '100px',
        },
        head:{
            textAlign: 'center'
        }
    }
}

export default Profile