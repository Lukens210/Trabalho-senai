import { salvarNoLocalStorage, carregarDoLocalStorage } from "./armazenamento.js";

function verificarSeEstaLogado(){
    const usuarioLogado = carregarDoLocalStorage ("usuario")
    if(usuarioLogado.logado == true){
        return
    }else{
        window.location.href = "index.html"
    }
}