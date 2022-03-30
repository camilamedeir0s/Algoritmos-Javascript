let vetor = [1, 4, 7, 6, 2, 8, 9, 3, 5];

let resultado = quickSort(vetor, 0, vetor.length - 1);

console.log(resultado);

function quickSort(vetor, esq, dir){
  let i = esq;
  let j = dir;
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
  
  if(index-1 > esq){
    quickSort(vetor, esq, index-1);    
  }

  if(index < dir){
    quickSort(vetor, index, dir);
  }
  return vetor;
}
