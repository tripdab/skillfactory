/* Задание 7: Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и,
например, знаки, null и так далее. */

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'a', 'b', 'c', null];
let even = 0;
let odd = 0;
let other = 0;

for(let i = 0; i < arr.length; i++){
  if((arr[i] === 0) || (typeof(arr[i]) !== 'number')) {
    other++;
  } else if (arr[i] % 2 === 0){
    even++;
  } else {
    odd++;
  }
}

console.log('Even is ' + even);
console.log('Odd is ' + odd);
console.log('Other is ' + other);