/* Задание 6 - Дан массив. Проверить, одинаковые ли элементы в массиве
и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах,
а обо всех. Проверить, все ли элементы в массиве одинаковые. */

const arr = ["a", "b", "c", "d", "f", "g"];

let theSame = true;
for(let i = 0; i < arr.length - 1; i++){
    for(let j = i + 1; j < arr.length; i++){
      if(typeof(arr[i]) !== typeof(arr[j])){
        theSame = false;
      }
    }
  }
  if (theSame) {
      console.log("array is the same");
  } else {
      console.log("array is not the same")
  }