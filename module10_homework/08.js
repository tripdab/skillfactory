/* Задание 8: Создайте произвольный массив Map.
Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
Используйте шаблонные строки. */

let friends = new Map();
  friends.set("Rachel Green", "Jennifer Aniston");
  friends.set("Phoebe Buffay", "Lisa Kudrow");
  friends.set("Ross Geller", "David Schwimmer");
  friends.set("Monica Geller", "Courteney Cox");
  friends.set("Joey Tribbiani", "Matt LeBlanc");
  friends.set("Chandler Bing", "Matthew Perry");

for (let friend of friends.keys()){
  console.log(friend + " is " + friends.get(friend));
}