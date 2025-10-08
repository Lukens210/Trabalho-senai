import { carregarDoLocalStorage, salvarNoLocalStorage } from "./armazenamento.js"

const url = "https://api.thedogapi.com/v1/breeds"
const chaveApi = "live_IEGuYVES2pOJb0a5mjQizgiV8yTLGKgJZGAzH5JIeMQekbndcxa0HJdi39fxqW9A"

const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": chaveApi
})

const resquestOpitions = {
    method: "GET",
    headers: headers,
    redirect: "follow"
}

fetch(url)
.then(res => res.json())
.then(dados => console.log(dados))
.catch(erro => console.log(erro.messsage))

//Cadastro
const secao_Cadastro = document.getElementById
("secao_cadastro")
const form_Cadastro = document.getElementById
("form_cadastro")
const btnCadastro = document.getElementById
("cadastrar_usuario")
//Login
const secao_Login = document.getElementById("secao_login")
const form_Login = document.getElementById("form_login ")
// LOCALSTORAGE
function salvarDados(chave, dados){
    localStorage.setItem(chave, dados)
}
function resgatarDados(chave){
    return JSON.parse(localStorage.getItem(chave))
}
/*EVENTOS*/
form_Cadastro.addEventListener("submit", (e)=>{
    evento.preventDEfault()
    const formPreenchido = evento.target
    const email = formPreenchido.email.value.trim().toLowerCase()
    const usuario = formPreenchido.usuario.value.trim().toLowerCase()
    const senha = formPreenchido.senha.value.trim().toLowerCase()

    const usuarioCadastrado = {email, usuario, senha, logado: false}
    console.log(usuarioCadastrado)
    salvarNoLocalStorage("usuario", usuarioCadastrado)
    formPreenchido.reset()
})
form_login.addEventListener("submit", (evento)=>{
    evento.preventDefault()

    const formPreenchido = evento.target

    const usuario = formPreenchido.usuario.value.trim().toLowerCase()
    const senha = formPreenchido.senha.value.trim().toLowerCase()

    const usuarioDoSistema = carregarDoLocalStorage("usuario")
    if(usuarioDoSistema.usuario == usuario && usuarioDoSistema.senha == senha){
        salvarNoLocalStorage("usuario", {...usuarioDoSistema, logado:true})
        window.location.href= "./dashboard.html"
        console.log("Login realizado com sucesso!")
    }else{
        console.log("Usuario ou senha incorretos")
    }
    })
/*
    Link para ver o preview do projeto:
        http://localhost:5500
*/