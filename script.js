let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX= document.getElementById("icone-x")

const abrirFecharMenu = () => {
    if (menu.classList.contains("menu-fechado")) 
    {
        menu.classList.remove("menu-fechado")
        menu.style.display = "flex"

        iconeX.style.display = "inline"
        iconeBarras.style.display = "none"
    }

    else {
        menu.classList.add("menu-fechado")
        menu.style.display = "none"

        iconeX.style.display = "none"
        iconeBarras.style.display = "inline"

    }
}

window.onresize = () => {
    menu.classList.remove("menu-fechado")
    menu.style.display = "flex"

    iconeX.style.display = "inline"
    iconeBarras.style.display = "none"
}

const solicitarOrcamento = (event) => {
    // Pegar valores dos inputs
    let valorNome = document.getElementById("campo-nome").value
    let valorEmail = document.getElementById("campo-email").value
    let valorTelefone = document.getElementById("campo-telefone").value

    // Organizar objeto com os valores
    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        Telefone: valorTelefone
    }

    // Enviar requisicao para a api
    // 127.0.0.1 = localhost
    // Método HTTP POST - Create -> Cadastrar ou criar 
    fetch("http://localhost:3000/contatos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })
    .then(resposta => {
        console.log(resposta)

        // Limpar os campos (inputs)
        document.querySelector("#contato form").reset()

        // Mostrar alert com msg de sucesso
        alert("Solicitação cadastrada")
    })
    .catch(erro => {
        // CASO ERRO - alert com msg erro
        console.error(erro)
        alert("Erro na requisição")
    })

    event.preventDefault()
}
