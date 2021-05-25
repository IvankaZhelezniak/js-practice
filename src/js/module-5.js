// Модуль 5, занятие - 9.
// Время 32:00  
// Функция конструктор отличается от обычной функции:
//    -  назва с большой буквы;
//    -  и она не отвечает на вопрос 'что сделать?', назва - существительное в единственном числе


// оператор new  создает где-то в памяти пустой обьект при вызове функции контсруктора
// например:  const myCar = new Car();

// Время 1:30:00   пример плагина счетчика





// Задача - 7  ,  автопроверка

// Конструктор строк
// Задание
// С помощью Function Declaration напиши функцию-конструктор StringBuilder, которая принимает один 
// параметр baseValue - произвольную строку, которая записывается на создаваемый объект в 
// свойство value.

// Добавь методы на прототип:

// getValue() - возвращает текущее значение свойства value.
// padEnd(str) - получает парметр str (строку) и добавляет её в конец значения свойства value объекта,
//  который вызывает этот метод.
// padStart(str) - получает парметр str (строку) и добавляет её в начало значения свойства value 
// объекта, который вызывает этот метод.
// padBoth(str) - получает парметр str (строку) и добавляет её в начало и в конец значения свойства 
// value объекта, который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, 
// в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// Тесты
// Объявлена функция StringBuilder(baseValue).
// Вызов StringBuilder.prototype.hasOwnProperty('getValue') возвращает true.
// Вызов StringBuilder.prototype.hasOwnProperty('padEnd') возвращает true.
// Вызов StringBuilder.prototype.hasOwnProperty('padStart') возвращает true.
// Вызов StringBuilder.prototype.hasOwnProperty('padBoth') возвращает true.
// В результате вызова new StringBuilder('.') значение переменной builder это объект.
// Вызов StringBuilder.prototype.isPrototypeOf(builder) возвращает true.
// У объекта builder есть свойство value.
// Первый вызов builder.getValue(), сразу после инциализации экземпляра, возвращает строку '.'.
// Второй вызов builder.getValue(), после вызова builder.padStart('^'), возвращает строку '^.'.
// Третий вызов builder.getValue(), после вызова builder.padEnd('^'), возвращает строку '^.^'.
// Четвёртый вызов builder.getValue(), после вызова builder.padBoth('='), возвращает строку '=^.^='.



// function StringBuilder(baseValue, value) {
//   this.baseValue = baseValue;
//   this.value = value;
// };

// StringBuilder.prototype.getValue = function () {
//   return this.baseValue;
// };
// StringBuilder.prototype.padEnd = function (str) {
//   return this.baseValue += str;
// };

// StringBuilder.prototype.padStart = function (str) {
//   return this.baseValue = str + this.baseValue;
// };

// StringBuilder.prototype.padBoth = function (str) {
//   return this.baseValue = str + this.baseValue + str;
// };
// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='







// Задача 11 - автопроверка

// Приватные свойства
// Инкапсуляция - это концепция позволяющая скрыть внутренние детали класса. Пользователь класса 
// должен получать доступ только к публичному интерфейсу - набору публичных свойств и методов класса.

// В классах инкапсуляция реализуется приватными свойствами, доступ к которым можно получить только 
// внутри класса. Это одно из отличий классов и функций-конструкторов - в классах легко объявить 
// приватные свойства.

// Допустим почта пользователя должна быть недоступна из вне, то есть приватна. Добавляя к имени 
// свойства символ # мы делаем его приватным. Объявление приватного свойства до инциализации в 
// конструкторе - обязательно.

// class User {
//   // Необязательное объявление публичных свойств
//   name;
//   // Обязательное объявление приватных свойств
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({ name: 'Манго', email: 'mango@mail.com' });

// mango.changeEmail('mango@supermail.com');
// console.log(mango.getEmail()); // mango@supermail.com
// console.log(mango.#email); // Будет ошибка, это приватное свойство
// Методы класса также могут быть приватными, то есть доступны только в теле класса. Для этого 
// перед их именем необходимо поставить символ #.

// Задание
// Выполни рефакторинг класса Car так, чтобы свойство brand было приватным и добавь два метода
//  для публичного интерфейса, для чтения и изменения этого свойства.

// getBrand() - возвращает значение приватного свойства brand.
// changeBrand(newBrand) - изменяет значение приватного свойства brand на newBrand.
// Тесты
// Объявлен класс Car.
// Свойство brand в классе Car объявлено приватным.
// Конструктор класса принимает объект со свойствами brand, model и price.
// В результате вызова new Car({ brand: 'Audi', model: 'Q3', price: 36000 }) получится объект 
// { model: 'Q3', price: 36000 }.
// В результате вызова new Car({ brand: 'BMW', model: 'X5', price: 58900 }) получится объект 
// { model: 'X5', price: 58900 }.
// В результате вызова new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }) получится объект 
// { model: 'Murano', price: 31700 }.
// У экземпляра нет публичного свойства brand.
// Метод getBrand() возвращает значение приватного свойства brand.
// Метод changeBrand('Honda') изменяет значение приватного свойства brand на 'Honda'.



// class Car {
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   };
  
//   getBrand() {
//     return this.#brand;
//   };
  
//   changeBrand(newBrand) {
//     return this.#brand = newBrand;
//   };
// };






// Задача 12 - автопроверка

// Задача. Хранилище 2.0
// Задание
// Выполни рефакторинг заменив функцию-конструктор Storage на класс с методами. Сделай так, чтобы
//  свойство items было приватным.

// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, 
// в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// Тесты
// Объявлен класс Storage.
// Свойство items в классе Storage объявлено приватным.
// Конструктор класса принимает свойство items.
// Вызов Storage.prototype.hasOwnProperty('getItems') возвращает true.
// Вызов Storage.prototype.hasOwnProperty('addItem') возвращает true.
// Вызов Storage.prototype.hasOwnProperty('removeItem') возвращает true.
// В результате вызова new Storage([ 'Нанитоиды', 'Пролонгер', 'Антигравитатор' ]) значение 
// переменной storage это объект.
// Вызов Storage.prototype.isPrototypeOf(storage) возвращает true.
// У объекта storage нет свойства items.
// Первый вызов storage.getItems(), сразу после инциализации экземпляра, возвращает массив 
// ["Нанитоиды", "Пролонгер", "Антигравитатор"].
// Второй вызов, storage.getItems(), после вызова storage.addItem('Дроид'), возвращает массив 
// ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"].
// Третий вызов storage.getItems(), после вызова storage.removeItem('Пролонгер'), возвращает массив 
// ["Нанитоиды", "Антигравитатор", "Дроид"].


// function Storage(items) {
//   this.items = items;
// }

// Storage.prototype.getItems = function () {
//   return this.items;
// };

// Storage.prototype.addItem = function (newItem) {
//   this.items.push(newItem);
// };

// Storage.prototype.removeItem = function (item) {
//   const itemIndex = this.items.indexOf(item);
//   this.items.splice(itemIndex, 1);
// };


// class Storage {
//   #items;
//   constructor( items) {
//   this.#items = items;
//   }
  
//   getItems() {
//     return this.#items;
//   }
  
//   addItem(newItem) {
//       this.#items.push(newItem);
//   }
  
//   removeItem(item) {
//     const itemIndex = this.#items.indexOf(item);
//   this.#items.splice(itemIndex, 1);
//   }
// }

// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]








// Задача 12 - автопроверка


// Задача. Конструктор строк 2.0
// Задание
// Выполни рефакторинг заменив функцию-конструктор StringBuilder на класс с методами. Сделай так, 
// чтобы свойство value было приватным.

// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности,
//  в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.



// function StringBuilder(baseValue) {
//   this.value = baseValue;
// }

// StringBuilder.prototype.getValue = function () {
//   return this.value;
// };

// StringBuilder.prototype.padEnd = function (str) {
//   this.value += str;
// };

// StringBuilder.prototype.padStart = function (str) {
//   this.value = str + this.value;
// };

// StringBuilder.prototype.padBoth = function (str) {
//   this.padStart(str);
//   this.padEnd(str);
// };




// class StringBuilder{
//     #value;
//     constructor(baseValue) {
// this.#value = baseValue;
//     };

// getValue() {
//  return this.#value;
// };
// padEnd(str) {
//    return this.#value += str;
// };
// padStart(str) {
//   this.#value = str + this.#value;
// };
// padBoth(str) {
//  this.padStart(str);
//   this.padEnd(str);
// };
// };

// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='