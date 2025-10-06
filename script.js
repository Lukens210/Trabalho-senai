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