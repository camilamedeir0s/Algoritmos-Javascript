let vetor = [1, 4, 7, 6, 2, 8, 9, 3, 5];

let resultado = quickSort(vetor, 0, vetor.length - 1);

console.log(resultado);

function quickSort(vetor, esquerda, direita){
  let i = esquerda;
  let j = direita;
  let meio = Math.floor((i + j)/2);

  while(i < j){
    while(vetor[i] < vetor[meio]){
      i++;
    }

    while(vetor[j] > vetor[meio]){
      j--;
    }

    if(i <= j){
      let temp = vetor[i];
      vetor[i] = vetor[j];
      vetor[j] = temp;
      i++;
      j--;
    }
  }
  
  let index = i;
  
  if(index-1 > esquerda){
    quickSort(vetor, esquerda, index-1);    
  }

  if(index < direita){
    quickSort(vetor, index, direita);
  }
  return vetor;
}
