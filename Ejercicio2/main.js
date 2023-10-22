const caracteres = ["b", "h", "w", "e", "a"];

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

ordenamientoBurbuja(caracteres);
console.log(caracteres);
