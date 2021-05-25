// Автопроверка модуль 3,  задача - 12


// function countProps(object) {                            
//     let propCount = 0;
  
//     for (const key in object) {
//         console.log(key);
//         if (object.hasOwnProperty(key)) {
//             const len = Object.keys(object).length;
//             propCount = len;
//   };
    
//     };
//   return propCount;
// };
// console.log(countProps({ name: 'Mango', age: 2 }));


// Упрощенное решение

// function countProps(object) {
//   let propCount = 0;
// const len = Object.keys(object).length;
//   propCount = len;
//   return propCount;
// };






// Задача 14 автопроверка

// Задача. Подсчёт свойств 2.0
// Задание
// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно,
//   цикл for...of.

// Тесты
// Объявлена функция countProps(object).
// Вызов countProps({}) возвращает 0.
// Вызов countProps({ name: 'Mango', age: 2 }) возвращает 2.
// Вызов countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }) возвращает 3.
// Функция подсчитывает только собственные свойства объекта.
// Функция использует метод Object.keys() и, возможно, цикл for...of.

// function countProps(object) {
  
//   const keys = Object.keys(object).length;
//   return keys;
// };

// console.log(countProps({}));
// console.log(countProps({ name: 'Mango', age: 2 }));
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));






// Задача 19 с автопроверки.box--active

// Задача. Коллекция значений свойства
// Задание
// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя(ключ)
// свойства.Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта
// в массиве products.Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

// Тесты
// Объявлена функция getAllPropValues(propName).
// Вызов getAllPropValues('name') возвращает ['Радар', 'Сканер', 'Дроид', 'Захват'].
// Вызов getAllPropValues('quantity') возвращает [4, 3, 7, 9].
// Вызов getAllPropValues('price') возвращает [1300, 2700, 400, 1200].
// Вызов getAllPropValues('category') возвращает [].


// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   let allPropValues = [];
  
//     for (const product of products) {
//       if(propName in product) {
//       allPropValues.push(product[propName]);
//       };  
    
//     };
  
//   return allPropValues;


//   2 - е решение надо обезательно разобратся:
  
//    return (!products.length || !(propName in products[0]))? 
//     [] : products.map(i => i[propName]);
// };

// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('category'));






// Задача 20 автопроверка

// Задача. Общая стоимость товара
// Задание
// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName -
//     название товара.Функция должна вернуть общую стоимость(цена * количество) товара с таким
// именем из массива products.

// Тесты
// Объявлена функция calculateTotalPrice(productName).
// Вызов calculateTotalPrice('Бластер') возвращает 0.
// Вызов calculateTotalPrice('Радар') возвращает 5200.
// Вызов calculateTotalPrice('Дроид') возвращает 2800.
// Вызов calculateTotalPrice('Захват') возвращает 10800.
// Вызов calculateTotalPrice('Сканер') возвращает 8100.


// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     let mult = 0;

//     for (const product of products) {
//         if (productName === product['name']) {
//             mult = product['price'] * product['quantity'];
//         };
//     };
//   return mult;
// };

// console.log(calculateTotalPrice('Бластер'));
// console.log(calculateTotalPrice('Радар'));
// console.log(calculateTotalPrice('Дроид'));
// console.log(calculateTotalPrice('Захват'));
// console.log(calculateTotalPrice('Сканер'));






// Задача 30 автопроверка

// Задача. Карточки задач
// Задание
// Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими
// свойствами.

// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.
// Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data.
// В новом объекте должно быть свойство completed, значение которого хранится в одноимённой локальной
// переменной.

// В параметре data гарантированно будет только свойство text, а остальные два, category и priority,
//     могут отсутствовать.Тогда, в новом объекте задачи, в свойствах category и priority должны быть
// значения по умолчанию, хранящиеся в одноимённых локальных переменных.

// Тесты
// Объявлена функция makeTask(data).
// Вызов makeTask({}) возвращает { category: 'Общее', priority: 'Обычный', completed: false }.
// Вызов makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' }) возвращает
// { category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор', completed: false }.
// Вызов makeTask({ category: 'Финансы', text: 'Забрать проценты' }) возвращает
// { category: 'Финансы', priority: 'Обычный', text: 'Забрать проценты', completed: false }.
// Вызов makeTask({ priority: 'Низкий', text: 'Выбрать шампунь' }) возвращает
// { category: 'Общее', priority: 'Низкий', text: 'Выбрать шампунь', completed: false }.
// Вызов makeTask({ text: 'Купить хлеб' }) возвращает
// { category: 'Общее', priority: 'Обычный', text: 'Купить хлеб', completed: false }.


// function makeTask(data) {
//   const completed = false;
//   const category = 'Общее';
//   const priority = 'Обычный';
  
//  return {completed, category, priority, ...data};
  
// };

// console.log(makeTask({}));
// console.log(makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' }));







// Задача 41 автопроверка

// Задача. Расширяем инвентарь
// Задание
// Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем
// может быть и другими характеристиками.Поэтому теперь в свойстве potions будет храниться массив
// объектов со следующими свойствами.

// {
//   name: 'Дыхание дракона',
//   price: 700
// }
// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк,
//     а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
//     updatePotionName(oldName, newName) - обновляет свойство name объекта - зелья с названием oldName
// на newName в массиве potions.
    
// Тесты
// Объявлена переменная atTheOldToad.
// Значение переменной atTheOldToad это объект.
// Значение свойства atTheOldToad.getPotions это метод объекта.
// Вызов метода atTheOldToad.getPotions() для исходного объекта возвращает
// [{ name: 'Зелье скорости', price: 460 }, { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 }].

// Значение свойства atTheOldToad.addPotion это метод объекта.

// Для исходного объекта после вызова метода atTheOldToad.addPotion({ name: 'Невидимка', price: 620 }),
//     в массиве potions последним элементом будет этот объект.
// Для исходного объекта после вызова метода atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 }),
//     в массиве potions последним элементом будет этот объект.
// Значение свойства atTheOldToad.removePotion это метод объекта.
// Для исходного объекта после вызова метода atTheOldToad.removePotion('Дыхание дракона'),
//     в свойстве potions будет массив[{ name: 'Зелье скорости', price: 460 },
//         { name: 'Каменная кожа', price: 520 }].
// Для исходного объекта после вызова метода atTheOldToad.removePotion('Зелье скорости'),
//     в свойстве potions будет массив[{ name: 'Дыхание дракона', price: 780 },
//         { name: 'Каменная кожа', price: 520 }].
// Значение свойства atTheOldToad.updatePotionName это метод объекта.
// Для исходного объекта после вызова метода atTheOldToad.updatePotionName('Дыхание дракона',
//     'Полиморф'), в свойстве potions будет массив[{ name: 'Зелье скорости', price: 460 },
//         { name: 'Полиморф', price: 780 }, { name: 'Каменная кожа', price: 520 }].
// Для исходного объекта после вызова метода atTheOldToad.updatePotionName('Каменная кожа',
//     'Зелье неуязвимости'), в свойстве potions будет массив[{ name: 'Зелье скорости', price: 460 },
//         { name: 'Дыхание дракона', price: 780 }, { name: 'Зелье неуязвимости', price: 520 }].



// const atTheOldToad = {
//   potions: [
//     { name: 'Зелье скорости', price: 460 },
//     { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 },
//     ],
    
//   getPotions() {
//     return this.potions;
//   },
//     addPotion(newPotion) {
    
//         for (const potion of this.potions) { 
//             if (potion.name === newPotion.name) { 
//                 return `Зелье "${potion.name}" уже есть в инвентаре!`;
//             };
//         };

//     return this.potions.push(newPotion);
//   },
//     removePotion(potionName) {
//         for(let i = 0; i < this.potions.length; i += 1) {
//           const potion = this.potions[i];
//           if (potionName === potion.name) {
//            return this.potions.splice(i, 1);
//           };
//       };
      
//       return `Зелье "${potionName}" нет в инвентаре!`;
//   },
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       const potion = this.potions[i];
//       if (oldName === potion.name) {
//         return potion.name = newName;
//       };
//     };
      
//     return `Зелье "${oldName}" нет в инвентаре!`;
//   },
// };

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: 'Невидимка', price: 620 }));
// console.log(atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 }));
// console.log(atTheOldToad.addPotion({ name: 'Зелье скорости', price: 460 }));
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'));
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.removePotion('Дыхание дракона'));
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.removePotion('Дыхание кошки'));
// console.log(atTheOldToad.removePotion('Зелье скорости'));
// console.log(atTheOldToad.getPotions());







// Задача с примера Ашот модуль 3 ПРАКТИКА 1:35:00

// напишите функцию которая принимает как параметр обьект и формирует обьекты
// в новом массиве в формате[key, value]

// const objData = {
//     name: 'John',
//     surName: 'Stones',
//     age: 25,
//     hobby: 'football',
//     merried: false,
// };