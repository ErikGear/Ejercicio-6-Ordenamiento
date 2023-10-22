const coordenadas = [
  [7, 3],
  [2, 2],
  [1, 0],
  [4, 3]
];

function ordenamientoBurbuja(collection) {
  for (let i = 0; i < collection.length - 1; i++) {
    for (let j = 0; j < collection[i].length - 1; j++) {
      let tmp = undefined;

      if (collection[i][j] > collection[i][j + 1]) {
        tmp = collection[j];
        collection[j] = collection[j + 1];
        collection[j + 1] = tmp;
      }
    }
  }
}

function imprimirCoordenadas(coordenadas) {
  for (let i = 0; i < coordenadas.length; i++) {
    for (let j = 0; j < coordenadas[i].length; j++) {
      console.log(`Coordenada: [${i}][${j}], Elemento: ${coordenadas[i][j]}`);
    }
  }
}


