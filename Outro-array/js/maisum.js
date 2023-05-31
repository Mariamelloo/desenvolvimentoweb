const body = document.getElementsByTagName('body')[0];

const div = document.createElement('div');
const imagem = document.createElement('img');

imagem.src = sessionStorage.getItem('caminho');

div.appendChild(imagem);
body.appendChild(div);
