// "use strict";
// Строгий режым (писать в первую строку каждого js файла)
// Если подключен атрибут type ="module" в тег script в html то записывать "use strict" не нужно

// let hobby = "Рыбалка";
// 10
// console.log(hobby);




// Получение данных, вывод данных

// const shouldRenew = confirm("Хотите продлить подписку?");
// console.log(shouldRenew);


// const userInput = prompt("Введите число 10");
// console.log(userInput);




// Все текстовые поля всегда возвращают строку, у нас есть promt(Введите число),
// но на самом деле это строка - потому что PROMPT всегда вернет строку - string

// const userInput = prompt("Введите число 10");
// console.log(typeof userInput);




// Строки. Методы строк. Преобразование в нужный регистр toLowerCase

// const superValue = "qwerty";

// const userInput = prompt("Веди то что надо");
// console.log(userInput);

// const normalizedInput = userInput.toLowerCase();
// console.log(normalizedInput);

// console.log(superValue === normalizedInput);




// Логические операторы

// 1- Числовой отрезок и вхождение значения в отрезок - логическое И - &&

// const number = 20;
// const isInRange = number > 10 && number < 30;
// true && true  -  тогда на выходе будет true
// console.log(`Число ${number} попадает в отрезок от 10 до 30? `, isInRange);

// Логическое ИЛИ - or  ||

// const number = 5;
// const isInRange = number < 10 || number > 30;
// true  - Если есть хотя бы один true, (все остальное даже не вычисляет) значит условие выполниется, 

// console.log(`Число ${number} попадает в отрезок до 10 или после 30? `, isInRange);

// 2-  Возможность открыть живой чат online и не dnd  (проверка множественного условия)
//  Логическое НЕ (!) - это просто переключатель да или нет true  false

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log('canOpenChat: ', canOpenChat);


// Проверка подписки пользователя при доступе к контенту

// const subscription = 'free';
// const canAccessContent = subscription === 'pro' || subscription === 'vip';
// console.log('canAccessContent: ', canAccessContent);

// Все эти операторы используются для каких-то множенственных логических условий




// Операторы ветвления
// Если условие 5>3 выполняется (true) тогда тело в таких скобках {} тоже выполняется
// if - если условие 5>10 не выполняется (false) то тело вообще не выполняется
// Если 

// console.log('before');

// if (5 > 3) {
//     // тело
//     console.log('inside');
// }

// console.log('after');



// Примеры

// let balance = 10000;
// const payment = 2000;

// console.log(`Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средст на счету`);

// // if (balance >= payment) {
// //     console.log('Hello');
// // }

// if (balance >= payment) {
//     // balance = balance - payment;  -  ещё можна записать так, это две абосютно аналогичные записи
//     balance -= payment;
//     console.log('Все хорошо! Снимаем деньги, спасибо за покупку!');
//     console.log(`На счету осталось ${balance} кредитов `);
// }

// console.log('tfcvfe');


// Если у человека 100 кредитов а он накупил на 2000, надо его оповестить как-то

// let balance = 100;
// const payment = 2000;

// console.log(`Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средст на счету`);

// if (balance >= payment) {
//     // balance = balance - payment;  -  ещё можна записать так, это две абосютно аналогичные записи
//     balance -= payment;
//     console.log('Все хорошо! Снимаем деньги, спасибо за покупку!');
//     console.log(`На счету осталось ${balance} кредитов `);
// } else {
//     console.log('На счету недостаточно средст для проведения операции');
// }
// console.log('операция завершена');


// if...else  if  и скидка  (пишем скидку)

// const totalExpenses = 5100;
// let discount = 0;

// if (totalExpenses >= 100 && totalExpenses < 1000) {
//     discount = 2;
//     console.log('Бронзовый партнер, скидка 2%');
// } else if (totalExpenses >= 1000 && totalExpenses < 5000) {
//     discount = 5;
//     console.log('Серебряный партнер, скиндка 5%');
// } else if (totalExpenses >= 5000) {
//     discount = 10;
//     console.log('Золотой партнер, скидка 10%');
// } else {
//     console.log('У Вас ещё нет партнерской скидки');
// }

// console.log(`Офрмляем заказ со скидкой ${discount}% `);


// Как будет высчитыватся discount?

// const totalExpenses = 20000;
// Добавляем сумму на которую мы сейчас что-то купили (лежит в корзине на 500 кредитов товара)
// const payment = 500;
// let discount = 0;

// if (totalExpenses >= 100 && totalExpenses < 1000) {
//     discount = 0.02;
//     console.log('Бронзовый партнер, скидка 2%');
// } else if (totalExpenses >= 1000 && totalExpenses < 5000) {
//     discount = 0.05;
//     console.log('Серебряный партнер, скиндка 5%');
// } else if (totalExpenses >= 5000) {
//     discount = 0.1;
//     console.log('Золотой партнер, скидка 10%');
// } else {
//     console.log('У Вас ещё нет партнерской скидки');
// }

// const finalAmount = payment - payment * discount;
// console.log(finalAmount);

// console.log(`Оформлен заказ на сумму ${finalAmount} со скидкой ${discount * 100}% `);





// Область видимости

// Перменная mango обявленна в глобальной области видимости
// const name = 'mango';
// console.log(name);