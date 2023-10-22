const palabras = ["adios", "hola", "maximo", "uno", "despedida"];

function ordenamientoBurbuja(collection) {
  for (let i = 0; i < collection.length - 1; i++) {
    for (let j = 0; j < collection.length - 1; j++) {
      let tmp = undefined;

      if (collection[j].length > collection[j + 1].length) {
        tmp = collection[j];
        collection[j] = collection[j + 1];
        collection[j + 1] = tmp;
      }
    }
  }
}

ordenamientoBurbuja(palabras);

console.log(palabras);