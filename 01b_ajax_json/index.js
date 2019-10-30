// [] iterar sobre o array e mostrar as três imagens usando for()
// [] iterar sobre o array e mostrar as três imagens usando for...of
// [] iterar sobre o array e mostrar as três imagens usando forEach


const req = new XMLHttpRequest();
req.onreadystatechange = getDados;

function getDados(){
    if (req.readyState === 4 && req.status === 200) {
        const response = request.response;
        const json = JSON.parse(response);
        const data = json.data;
        let obj = data[0]

        const imgSrc = obj.imagem
        img.src = imgSrc;
        div.appendChild(img);
    } else {
        console.log(req.readyState, req.status)
    }
}

const url = '.data/dados.json';
req.open('GET', 'url', true);
req.send;