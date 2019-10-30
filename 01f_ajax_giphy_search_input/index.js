// XMLHttpRequest na rota search capturando informação do input
// trazer 10 imagens
// apresentar as imagens na div #root

const form = document.querySelector('#gifInput');
console.log(form);

const req = new XMLHttpRequest;
req.open('get', 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC');
req.send();

