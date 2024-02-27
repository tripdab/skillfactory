/* Задание 3 - Дана строка. Необходимо вывести в консоль перевёрнутый вариант.
Например, "Hello" -> "olleH". */

let string = "I love JavaScript";
let result = string
.split("")
.reverse()
.join("")
console.log(result);