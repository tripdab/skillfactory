/* Задание 2: Напишите функцию, которая принимает на входе любое число
(но не больше 1 000), определяет, является ли оно простым, и выводит,
простое число или нет. Если введено больше 1 000, то выводится сообщение,
что данные неверны. Обратите внимание на числа 0 и 1. */

let randNum = prompt("Введите число от 2 до 1000");

function isPrimeNumber(num){
  if((num < 2) || (num > 1000)){
    return 'Не верно! Поробуйте ещё раз...';
  } else {
    for(let i = 2; i < num; i++){
      if(num % i === 0) {
        return 'составное';
      }
    }
    return 'простое';
  }
}

let result = isPrimeNumber(randNum);
alert(`Число ${randNum} - ${result}`);