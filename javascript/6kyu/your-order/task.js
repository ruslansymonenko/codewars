function order(words){
  if (words.length <= 0){
    return ""
  }

  const wordsArr = words.split(' ');

  const wordsIndexes = wordsArr.reduce((acc, item, index) => {
    acc[index] = parseInt(item.match(/\d+/)[0]);
    return acc;
  }, {});

  function sortKeysByValues(obj) {
    return Object.entries(obj)
      .sort(([, valA], [, valB]) => valA - valB)
      .map(([key]) => Number(key));
  }

  const wordsOrder = sortKeysByValues(wordsIndexes);
  const orderedArr = wordsOrder.map(i => wordsArr[i]);

  return orderedArr.join(' ');
}

const str = "is2 Thi1s T4est 3a"

console.log(order(str));

