// Задача 9 с автопроверки

// Задача: Крайние элементы массива
// Задание
// Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов
// произвольной длины.Функция должна возвращать массив из двух элементов - первого и последнего
// элемента параметра array.

// Тесты
// Объявлена функция getExtremeElements(array)
// Вызов getExtremeElements([1, 2, 3, 4, 5]) возвращает [1, 5]
// Вызов getExtremeElements(["Earth", "Mars", "Venus"]) возвращает ["Earth", "Venus"]
// Вызов getExtremeElements(["apple", "peach", "pear", "banana"]) возвращает ["apple", "banana"]



// function getExtremeElements(array) {
//  return [array[0], array[array.length - 1]];
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));




// Задача 11 с автопроверки

// Задача: гравировка украшений
// Задание
// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки,
//   в зависимости от количества слов и цены за слово.

// Объявлена функция calculateEngravingPrice(message, pricePerWord).Эта функция принимает строку,
//   состоящую из слов разделённых только пробелами(параметр message) и цену гравировки одного
// слова(параметр pricePerWord).

// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

// Тесты
// Объявлена функция calculateEngravingPrice(message, pricePerWord)
// Вызов calculateEngravingPrice("JavaScript is in my blood", 10) возвращает 50
// Вызов calculateEngravingPrice("JavaScript is in my blood", 20) возвращает 100
// Вызов calculateEngravingPrice("Web-development is creative work", 40) возвращает 160
// Вызов calculateEngravingPrice("Web-development is creative work", 20) возвращает 80



// function calculateEngravingPrice(message, pricePerWord) {
//    let words = message.split(' ');
//  return words.length * pricePerWord;
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));





// Задача 18 с автопроверки

// Задача: сумма чисел (цикл for)
// Задание
// Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и 
// возвращает сумму всех целых чисел от единицы и до этого числа. Например, если number равно 3, 
// то сумма это 1 + 2 + 3, то есть 6.

// Тесты
// Объявлена функция calculateTotal(number)
// Вызов функции calculateTotal(1) возвращает 1
// Вызов функции calculateTotal(3) возвращает 6
// Вызов функции calculateTotal(7) возвращает 28
// Вызов функции calculateTotal(18) возвращает 171
// Вызов функции calculateTotal(24) возвращает 300
// Вызов функции calculateTotal() со случайным числом возвращает правильное значение


// function calculateTotal(number) {
//  let sum = 0;
//     for (let i = 0; i <= number; i += 1) { 
//         console.log(i);
//     sum += i; 
//   } 
//   return sum;
// };

// console.log(calculateTotal(3));




// Задача 21 с автопроверки

// Задача: поиск самого длинного слова
// Задание
// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую
// только из слов разделённых пробелом(параметр string) и возвращает самое длинное слово в этой строке.

// Тесты
// Объявлена функция findLongestWord(string)
// Вызов функции findLongestWord("The quick brown fox jumped over the lazy dog") возвращает jumped
// Вызов функции findLongestWord("Google do a roll") возвращает Google
// Вызов функции findLongestWord("May the force be with you") возвращает force
// Вызов функции findLongestWord() со случайной строкой возвращает правильное значение


// function findLongestWord(string) {
//  const splitedArr = string.split(' ');
//   let longest = splitedArr[0];
  
//   for(let i = 0; i < splitedArr.length; i += 1) {
//     if(splitedArr[i].length > longest.length) {
//       longest = splitedArr[i];
//     }
//   }

// return longest;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));






// Задача 22 с автопроверки

// Метод push()
// Метод push() позволяет добавить один или несколько элементов в конец массива, без необходимости
// указывать индексы добавляемых элементов.

// const planets = ["Earth", "Mars", "Venus"];
// planets.push("Jupiter");
// planets.push("Saturn", "Uranus", "Neptune");

// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']
// Задание



// Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых
// чисел от значения min до max.

// Тесты
// Объявлена функция createArrayOfNumbers(min, max)
// Вызов функции createArrayOfNumbers(1, 3) возвращает [1, 2, 3]
// Вызов функции createArrayOfNumbers(14, 17) возвращает [14, 15, 16, 17]
// Вызов функции createArrayOfNumbers(29, 34) возвращает [29, 30, 31, 32, 33, 34]
// Вызов функции createArrayOfNumbers() со случайными min и max возвращает правильный массив
// В цикле for использовался метод push


// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//  for(let i = min; i <= max; i += 1) {
//  numbers.push(i); 
//     };
//   return numbers;
// };

// console.log(createArrayOfNumbers(14, 17));







// Задача 23 с автопроверки


// Задача: фильтрация массива чисел
// Задание
// Напиши функцию filterArray(numbers, value), которая принимает массив чисел(параметр numbers)
// и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше
// чем значение параметра value(число).

// Тесты
// Объявлена функция filterArray(numbers, value)
// Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
// Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
// Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
// Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
// Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]
// Вызов функции filterArray() со случайным массивом и числом возвращает правильный массив
// В цикле for использовался метод push

    
//     function filterArray(numbers, value) {
// const newArray = [];
  
//   for(i = 0; i < numbers.length; i += 1) {
//    if(numbers[i] > value) {
//     newArray.push(numbers[i]); 
//       };
//         };
// return newArray;
// };
    
// console.log(filterArray([1, 2, 3, 4, 5], 3));
    




// Задача 24 с автопроверки


// Метод includes(value) проверяет есть ли в массиве элемент со значением value и возвращает 
// true или false соответственно.Область применения этого метода сводится к ситуациям, когда 
// необходимо проверить есть ли элемент в массиве и не важна его позиция(индекс).

// const planets = ['Земля', 'Марс', 'Венера'];

// console.log(planets.includes('Земля')); // true
// console.log(planets.includes('земля')); // false
// console.log(planets.includes('Венера')); // true
// console.log(planets.includes('Юпитер')); // false



// Задание
// Функция checkFruit(fruit) принимает строку с названием фрукта(параметр fruit), и проверяет есть
// ли такой фрукт в массиве fruits.

// Дополни код функции так, что если:

// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.


// Тесты
// Объявлена функция checkFruit(fruit).
// Вызов checkFruit('слива') возвращает true.
// Вызов checkFruit('мандарин') возвращает false.
// Вызов checkFruit('груша') возвращает true.
// Вызов checkFruit('Груша') возвращает false.
// Вызов checkFruit('яблоко') возвращает true.
// Вызов функции checkFruit() со случайным словом возвращает правильное значение boolean.
// В функции использовался метод includes.



// function checkFruit(fruit) {
//   const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

//   return console.log(fruits.includes(fruit)); // Дополни эту строку
// };

// checkFruit('яблоко');





// Задача 25 автопроверка


// Задача: общие элементы
// Задание
// Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.

// Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они 
// присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.

// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной 
// длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, 
// которые присутствуют в обоих исходных массивах.

// Тесты
// Объявлена функция getCommonElements(array1, array2)
// Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2]
// Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2]
// Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3]
// Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40]
// Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает []
// Вызов функции getCommonElements() со случайными двумя массивами возвращает правильный массив
// В цикле for использовались методы includes и push


// function getCommonElements(array1, array2) {
//   const newArray = [];

//   for (let i = 0; i <= array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       newArray.push(array1[i]);
//     }
//   }
//   return newArray;
// }




// Задача 29 автопроверка

// Задача: чётные числа
// Задание
// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от
// start до end.Чётным считается число которое делится на 2 без остатка(10 % 2 === 0).

// Тесты
// Объявлена функция getEvenNumbers(start, end)
// Вызов функции getEvenNumbers(2, 5) возвращает [2, 4]
// Вызов функции getEvenNumbers(3, 11) возвращает [4, 6, 8, 10]
// Вызов функции getEvenNumbers(6, 12) возвращает [6, 8, 10, 12]
// Вызов функции getEvenNumbers(8, 8) возвращает [8]
// Вызов функции getEvenNumbers(7, 7) возвращает []
// Вызов функции getEvenNumbers() со случайными start и end возвращает правильный массив




// function getEvenNumbers(start, end) {
// const arrayEvenNumbers = [];
  
//   for (let i = start; i <= end; i += 1) {
//       if (i % 2 === 0) {
//      arrayEvenNumbers.push(i);
//       };
//     };
//  return arrayEvenNumbers;
// };
  
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(6, 12));





// Пример с модуля 

// Находим самое маленькое число с масива

// const numbers = [51, 45, 18, 13, 7, 85, 19, 100];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }
// console.log(smallestNumber);