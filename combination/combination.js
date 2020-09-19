const users = [
  { id: 1, name: "Алексей" },
  { id: 2, name: "Сергей" },
  { id: 3, name: "Олег" },
  { id: 4, name: "Татьяна" },
  { id: 5, name: "Тимофей" },
];

function factorial(arg) {
  return (arg <= 1 && 1) || (arg *= factorial(arg - 1));
}

function getNumberCombinations(elem, amount) {
  return factorial(elem) / (factorial(amount) * factorial(elem - amount));
}

function combination(index, k, arr) {
  let res = [0];
  let result = [];
  const n = arr.length;
  let s = 0;
  for (let t = 1; t <= k; t++) {
    let j = res[t - 1] + 1;
    while (j < n - k + t && s + getNumberCombinations(n - j, k - t) <= index) {
      s += getNumberCombinations(n - j, k - t);
      j++;
    }
    res.push(j);
    result.push(arr[j - 1]);
  }
  return result;
}

function byChunk(arr, index) {
  if (index === 0) {
    console.log(`Введите индекс больше 0`);
    return;
  }
  if (arr.length < index) {
    console.log(
      `Заданный индекс не может превышать количество перебираемых элементов`
    );
  } else {
    console.log(
      `...выводим ${getNumberCombinations(
        arr.length,
        index
      )} сочетаний по ${index} элемента(-ов)`
    );
    for (let i = 0; i < getNumberCombinations(arr.length, index); i++) {
      console.log(...combination(i, index, arr));
    }
  }
}

byChunk(users, 4);


