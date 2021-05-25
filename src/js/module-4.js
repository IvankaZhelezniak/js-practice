
// Модуль 4, занятие 7 - callback - функции и замыкания(Репета 22)

// 1 - Пример "Отложенный вызов: регистрация событий"   минута 20 с видео. 

// С помощью document.querySelector мы можем получить ссылку на какой-то элемент нашего html
// через клас и это будет просто обьект с кучей свойств и методов... - это просто ссылка на обьект.
// Мы хотим что-бы при клике на кнопку выводился какой-то консоль и ещё что делалось (нужно повесить
// слушателя собития на эту кнопку обьект). 

// Что-бы зарегестрировать слушателя события мы берем и вызываем на этом обьекте метод 
// addEventListenet(),  1 парметр это будет событие на котором мы хотим что-бы выполнился кусочек
// кода

// const buttonRef = document.querySelector('.js-button');
// buttonRef.addEventListener();                             



// 2 - пример  "Отложенный вызов (таймер): интервал",  минута 36.   setTimeout(); - для регистрации 
// функции которая выполнится например через 2 сек.
// setTimeout(function, 2000);   2000 - это количество милисекунд когда она будет вызвана, 
// это как счетчик, таймер



// 3- пример. Работа с бекендом(Отложенный вызов http-запрос) минута 40.



// Пример - 4. Занятие 8. Время:  1:29:30   ДЕЛАЕМ СЧЕТЧИК - уменшаем и увеличивем числа по 
// нажатию на кнопки






// Задача 4 автопроверка

// Задание
// Необходимо написать логику обработки заказа пиццы.Выполни рефакторинг метода order так, чтобы он
// принимал вторым и третим параметрами два колбэка onSuccess и onError.

// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, метод order должен возвращать
// результат вызова колбэка onError, передавая ему аргументом строку 'В ассортименте нет пиццы с 
// названием < имя пиццы >.'
// Если в свойстве pizzas есть пицца с названием из параметра pizzaName, метод order должен возвращать
// результат вызова колбэка onSuccess, передавая ему аргументом имя заказанной пиццы.
// После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов.Пожалуйста ничего там
// не меняй.

// Тесты
// Метод order объявляет три параметра.
// Вызов pizzaPalace.order('Аль Копчино', makePizza, onOrderError) возвращает
// 'Ваш заказ принят. Готовим пиццу Аль Копчино.'.
// Вызов pizzaPalace.order('Четыре нарезона', makePizza, onOrderError) возвращает
// 'Ваш заказ принят. Готовим пиццу Четыре нарезона.'.
// Вызов pizzaPalace.order('Биг майк', makePizza, onOrderError) возвращает
// 'Ошибка! В ассортименте нет пиццы с названием Биг майк.'.
// Вызов pizzaPalace.order('Венская', makePizza, onOrderError) возвращает
// 'Ошибка! В ассортименте нет пиццы с названием Венская.'.


// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//     order(pizzaName, onSuccess, onError) {
//         for (const pizza of this.pizzas) {
//             if (pizzaName === pizza) {
//                 return onSuccess(pizzaName);
//              };
//         };
//         return onError(pizzaName);
//   },
// };
// // Пиши код выше этой строки

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! В ассортименте нет пиццы с названием ${error}.`;
// }

// // Вызовы метода с колбэками
// console.log(pizzaPalace.order('Аль Копчино', makePizza, onOrderError));
// console.log(pizzaPalace.order('Четыре нарезона', makePizza, onOrderError));
// console.log(pizzaPalace.order('Биг майк', makePizza, onOrderError));
// console.log(pizzaPalace.order('Венская', makePizza, onOrderError));








// Задача 7 автопроверка

// Сервису приготовления и доставки еды требуется функция генерации сообщений о статусе заказа.

// Дополни функцию composeMessage(position) так, чтобы она возвращала строку в формате
// 'Готовим <блюдо> для <почта>. Ваш заказ <позиция>-й в очереди.' Позиция это значение параметра
// position - позиция элемента в массиве(на единицу больше чем индекс).

// Не объявляй дополнительные параметры функции composeMessage(position).
// Используй call для вызова функции в контексте одного объекта-заказа.
// Используй this в теле функции для доступа к свойствам объекта - заказа в контексте которого она была
// вызывана.
// Дополни код так, чтобы в переменной messages получился массив сообщений о статусе заказов из
// массива orders с помощью цикла for.

// Тесты
// Объявлена переменная orders.
// Значение переменной orders это исходный массив объектов-заказов.
// Объявлена функция composeMessage(position).
// У функции composeMessage объявлен один параметр position.
// В теле функции composeMessage используется this.
// Функция composeMessage вызывается методом call внутри цикла for.
// Объявлена переменная messages.
// Значение переменной messages это массив['Готовим Burger для solomon@topmail.ua. Ваш заказ 1-й в 
// очереди.', 'Готовим Pizza для artemis@coldmail.net.Ваш заказ 2 - й в очереди.', 'Готовим Taco
// для jacob@mail.com.Ваш заказ 3 - й в очереди.'].


// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//    { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// // Пиши код ниже этой строки

// function composeMessage(position) {
//    return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// };

// const messages = [];

//      for (let i = 0; i < orders.length; i += 1) {
//         const order = orders[i];
//         const message = composeMessage.call(order, i + 1);
//         messages.push(message);

//       //   или делаем в одну строку
//       //   messages.push(composeMessage.call(orders[i], i + 1));
// };

// console.log(messages);







// Задача 10 - автопроверка

// Задание
// Сервису рассылки электронной почты необходимо добавить логирование действий для сбора статистики.
// Функция logAndInvokeAction(email, action) ожидает почту и действие которое нужно выполнить -
//    ссылку на метод объекта service.Сбор статистики симулируется логированием строки.Разберись и
// дополни код так, чтобы он работал верно.

// Тесты
// Объявлена переменная service.
// Значение переменной service это оригинальный объект.
// Объявлена функция logAndInvokeAction(email, action).
// Переменной firstInvoke присвоена строка 'Почта kiwi@mail.uk добавлена в рассылку.'.
// Первый вызов logAndInvokeAction с почтой kiwi@mail.uk и методом service.subscribe привязан к
// объекту service.
// Переменной secondInvoke присвоена строка 'Почта poly@hotmail.de удалена из рассылки.'.
// Второй вызов logAndInvokeAction с почтой poly@hotmail.de и методом service.unsubscribe привязан
// к объекту service.


// const service = {
//   mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
//   subscribe(email) {
//     this.mailingList.push(email);
//     return `Почта ${email} добавлена в рассылку.`;
//   },
//   unsubscribe(email) {
//     this.mailingList = this.mailingList.filter((e) => e !== email);
//     return `Почта ${email} удалена из рассылки.`;
//   },
// };

// function logAndInvokeAction(email, action) {
//   console.log(`Выполняем действие с ${email}.`);
//   return action(email);
// }

// const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
// console.log(firstInvoke);
// // Почта kiwi@mail.uk добавлена в рассылку.

// console.log(service.mailingList);
// /* ['mango@mail.com', 
//     'poly@hotmail.de', 
//     'ajax@jmail.net', 
//     'kiwi@mail.uk']*/
// const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
// console.log(secondInvoke);
// // Почта poly@hotmail.de удалена из рассылки.

// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']