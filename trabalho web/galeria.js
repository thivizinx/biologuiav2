const imagens=[
  'imgs-vetor/biologiaa.png',
  'imgs-vetor/CIENCIA.jpg',
  'imgs-vetor/cienciastec.png',
  'imgs-vetor/download.jpg'
];
let contador=0;
let botaoIR = document.querySelector('#ir');
let botaoVoltar = document.querySelector('#voltar');
let img = document.querySelector('#ciencia');

botaoIR.addEventListener('click',function(){
  contador++;
  if(contador>3){
  contador=0;}
  img.src=imagens[contador];
});

botaoVoltar.addEventListener('click',function(){
  contador--;
  if(contador<0){
  contador=3;}
    img.src=imagens[contador];
});
