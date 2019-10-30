// fetch da imagem
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] usar o método fetch() para a url da API Giphy
// [] transformar o dado recebido
// [] apresentar <img>
// [] usar async/await, then(), .catch(), arrow function

const request = new XMLHttpRequest()
const urlRequest = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&limit=4&offset=0"

request.onreadystatechange = mostraGif;
request.open('GET', urlRequest);
request.send();



function mostraGif() {
    if (request.readyState === 4 && request.status === 200) {
        const response = request.response
        const json = JSON.parse(response)
        
        const url = json.data.images.original.url

        let img = document.getElementById("imagem")
        img.setAttribute('src', url)
        // const atributo = 
        // document.getElementById("imagem")
        // document.setAttribute(urlRequest)
    } else {
        
    }
}


