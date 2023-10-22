const numeros = [9, 3, 1, 6, 5, 88, -1, 2, 7];

function ordenamientoBurbuja(collection) {
  for (let i = 0; i < collection.length - 1; i++) {
    for (let j = 0; j < collection.length - 1; j++) {
      let tmp = undefined;

      if (collection[j] > collection[j + 1]) {
        tmp = collection[j];
        collection[j] = collection[j + 1];
        collection[j + 1] = tmp;
      }
    }
  }
}

function ordenamientoInsercion(collection) {
  let posicion = undefined;
  let valorPosicion = undefined;
  for (let i = 1; i < collection.length; i++) {
    posicion = i;
    valorPosicion = collection[i];
    while (posicion > 0 && collection[posicion - 1] > valorPosicion) {
      collection[posicion] = collection[posicion - 1];
      posicion--;
    }
    collection[posicion] = valorPosicion;
  }
}

function ordenamientoBurbujaDescendente(collection) {
  for (let i = 0; i < collection.length - 1; i++) {
    for (let j = 0; j < collection.length - 1; j++) {
      let tmp = undefined;

      if (collection[j] < collection[j + 1]) {
        tmp = collection[j];
        collection[j] = collection[j + 1];
        collection[j + 1] = tmp;
      }
    }
  }
}

ordenamientoBurbujaDescendente(numeros);
console.log(numeros);
