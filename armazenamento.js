export function salvarNoLocalStorage(){
    localStorage.setItem(chave, JSON.stringify(valor))
    console.log("Salvo com sucesso")
    return
}

export function carregarDoLocalStorage(chave){
    return JSON.parse(localStorage.getItem(chave))
}