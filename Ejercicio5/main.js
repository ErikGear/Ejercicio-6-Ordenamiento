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
      let tmp2 = undefined;

      if (
        collection[i][j] > collection[i + 1][j] ||
        collection[i][j + 1] > collection[i + 1][j + 1]
      ) {
        tmp = collection[i][j];
        collection[i][j] = collection[i + 1][j];
        collection[i + 1][j] = tmp;

        tmp2 = collection[i][j + 1];
        collection[i][ j + 1 ] = collection[i + 1][j + 1];
        collection[i+1][j+1] = tmp2;

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

ordenamientoBurbuja(coordenadas);

imprimirCoordenadas(coordenadas);
