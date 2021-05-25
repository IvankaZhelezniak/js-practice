// Берем ссылку на кнопку
// Теперь я на нее могу повесить слушателя события  СОБЫТИЯ КЛИКА (оно составное)

// const targetBtnRef = document.querySelector('.js-target-btn');

// targetBtnRef.addEventListener('click', () => {
//     console.log('Clicked');
// });
// это мы зарегестрировали слушателя
// функцый на клик может быть сколько угодно слушателей

// targetBtnRef.addEventListener('click', () => {
//     console.log('Hello');
// });


// СОЗДАНИЕ И УДАЛЕНИЕ СЛУШАТЕЛЯ. ССЫЛОЧНАЯ ИДЕНТИЧНОСТЬ КОЛБЕКОВ
// Теперь при  клике на кнопку добавить слушателя я буду добавлять слушателя
// на кнопку целевая кнопка
// При клике на эту кнопку выполняй вот эту функцию, а в этой функции внутри
// я повешу слушателя на targetBtnRef, будет функция в функции
// doStuffOnClick  - делать что-нибудь при клике

// const targetBtnRef = document.querySelector('.js-target-btn');
// const addListenerBtnRef = document.querySelector('.js-add-listener');
// const removeListenerBtnRef = document.querySelector('.js-remove-listener');

// const doStuffOnClick = () => {
//     console.log('Click');
// };

// addListenerBtnRef.addEventListener('click', () => {
//     targetBtnRef.addEventListener('click', doStuffOnClick);
// });

// removeListenerBtnRef.addEventListener('click', () => {
//     targetBtnRef.removeEventListener('click', doStuffOnClick);
// });




// ОБЬЕКТ СОБЫТИЯ
// В каждый колбек который Вы передаете в addEventListener по умолчанию 
// будет приходить обьект события - это такой служебный обьект который создается
// браузером и в нем хранятся свойства для каждого типа события.
// Обезательно придет, обьявляем параметр event (событие в переводе)
// Мы можем посмотреть на него MouseEvent (событие мыши)

// Самое интересное здесь MouseEvent  это свойство target (так писать
// event.target - это ссылка на тот элемент на котором произошло событие
// Если мы возмем event.target  это будет ссылка на саму кнопку, на єто обьект.

// Внутри обработчика событий смотреть addEventListener
// Этот механизм addEventListener позволяет нам как будто подключится 
// когда это событие создается и обработать как-то у себя в коде.

// Не мы создаем события мы просто прослушываем. а так он там все есть всегда
// под капотом в браузере создаются

// const targetBtnRef = document.querySelector('.js-target-btn');
// const addListenerBtnRef = document.querySelector('.js-add-listener');
// const removeListenerBtnRef = document.querySelector('.js-remove-listener');

// targetBtnRef.addEventListener('click', (event) => {
//     console.log(event);
//     console.log(event.target);
// });






// СОБЫТИЯ ФОРМ - тип submit (прослушивание addEventListener вешается на саму 
// форму(не на клик кнопочки, не на ентер в инпуте))

// 1-вое это отпрвка формы
// Есть специальное СОБЫТИЕ когда мы нажымаем Enter в каком-то елементе формы
// или если мы нажымаем на кнопку (елемента формы) у которой type="submit"
// происходит ОТПРАВКА ФОРМЫ - тоесть это событие и наз SUBMIT

// Выбираем форму formRef.addEventListener

// ДЕЙСТВИЯ БРАУЗЕРА ПО УМОЛЧАНИЮ  (при нажатии sabmit - отправки формы) - 
// ПЕРЕЗАГРУЖАЕТСЯ СТРАНИЦА
// Когда мы нажымаем на кнопку Зарегистриваться ПЕРЕЗАГРУЖАЕТСЯ СТРАНИЦА
// ОТМЕНЯЕМ -  в любом месте в обработчике в функции пишем - 
// event.preventDefault();  - предотвратить дефолтное поведение. Есть практически
// на любом собитии/, если не хочеш чтобы при клике на ссылку не переходило на
// другую страницу

// Как собрать элементы формы?
// на event есть target (event.target)  - это наша форма. Ссылка на форму.
// А форма это ссылка на дом узел и это обьект. У него есть много прикольных
// штук, свойств.
// Нас интересует СВОЙСТВО ELEMENTS где собираются все интерактивные елементы формы
// тоесть любое: инпут, чекбокс, радио баттон, текст ерия, кнопки и т.д.

// Можем достучатся  console.dir(event.target.elements);

// Делаем так const formElements = event.target.elements;  (это тоже варварский 
// способ)  -  это ХОРОШЫЙ МЕТОД ЕСЛИ НАДО ПРОСТО ПОЛУЧИТЬ ДОСТУП К ЭЛЕМЕНТАМ
// ФОРМЫ (формы API)


// const formRef = document.querySelector('.js-register-form');

// formRef.addEventListener('submit', (event) => {
//     event.preventDefault();
//     console.log(event);
//     console.log('Submit');

//     console.dir(event.target);
//     console.dir(event.target.elements);

//     const formElements = event.target.elements;
//     console.dir(formElements.subscription.value);
// });


// ЕСЛИ НУЖНО СОБРАТЬ ОБЬЕКТ НА БЕКЕНД ОТПРАВИТЬ (собрать все значения формы) -
// есть конструктор FormData

// const formRef = document.querySelector('.js-register-form');

// formRef.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const formRef = event.target;
//     const formData = new FormData(formRef);

//     const submittedData = {};

//     formData.forEach((value, key) => {
//         console.log('Value: ', value);
//         console.log('Key: ', key);

//         submittedData[key] = value;
//     });

//     console.log(submittedData);
// });



// Если нужно просто достучатся до какого-то элемента формы, что-бы что потом
// с ним что-то сделать проверить и т.д  console.log(formRef.elements);
// а так берем доступ к отдельному єлементу его значению, например
// console.log(formRef.elements.password.value);

// const formRef = document.querySelector('.js-register-form');

// formRef.addEventListener('submit', (event) => {
//     event.preventDefault();

//   console.log(formRef.elements);
//   console.log(formRef.elements.password.value);
// });





// СОБЫТИЯ ИНПУТОВ (input) - событий много
// Мы разберем 4

// 2 типа события для input есть: 

//  1 - это change (изменение) для чекбоксам, радиобатонов, селектов.
// для текстового поля(text) и для(textarea), срабатывает
// тогда когда элемент теряет фокус. Событие change нецелесообразно использовать
// в таком формате инпутов, лучше использовать focus/
// В этом событии есть type, target, value этого инпута
// target - это ссылка на наш инпут и берем значение value у него

// (1)  Когда использовать собітие change
// У нас есть инпут и кнопка зарегестрироватся как Аноним
//  nameLabelRef.textContent = event.target.value;

// Если хотим что-бы сразу менялось значение заменяем событие change на input

// 2 -  событие input для тексового поля ввода
// для текстового поля(text) и для(textarea)


// const inputRef = document.querySelector('.js-input');
// const nameLabelRef = document.querySelector('.js-button > span')

// inputRef.addEventListener('change', (event) => {
//     console.log(event);
//     console.log(event.target.value);
//     console.log('Hello');

//     nameLabelRef.textContent = event.target.value;
// });


// (2)  Когда использовать событие change? Прекрасно используется на чекбоксах,
// радиобатонах, селектах.
// У нас на кнопке есть атрибут disabled значит что она віключена на нее клацать
// нельзя.

// И так, когда я нажымаю на label у меня происходит событие change на 
// checkbox. Почему? Потому что лейбл связан с чекбоксом, инпут стоит внутри
// лейбла они связаны.

// У checkbox есть такая штука внутри target есть такое СВОЙСТВО как checked - 
// ВЫБРАН ИЛИ НЕВЫБРАН (checked) оно или true или false как флажок.
// И как раз его можно использовать для того что-бі сделать эту кнопку активную
// или неактивную.
// Тоесть если у нас не checked (!checked) кнопка не активная, если checked активная.

// Получаем ссылку на кнопку. И пишем внутри функции обработки чекбокса - 
//  btnRef.disabled. Потому что disabled добавляется свойством на обьект узла
// Меняем значение disabled на кнопке

// const btnRef = document.querySelector('.js-button');
// const inputRef = document.querySelector('.js-input');
// const nameLabelRef = document.querySelector('.js-button > span')
// const licenseRef = document.querySelector('.js-license');

// inputRef.addEventListener('input', (event) => {
//     nameLabelRef.textContent = event.target.value;
// });

// licenseRef.addEventListener('change', (event) => {
//     console.log(event);

//     btnRef.disabled = !event.target.checked;
// });





// СОБЫТИЯ focus и blur
// focus - получил фокус
// blur - потерял фокус

// Пример

// const btnRef = document.querySelector('.js-button');
// const inputRef = document.querySelector('.js-input');
// const nameLabelRef = document.querySelector('.js-button > span')
// const licenseRef = document.querySelector('.js-license');

// inputRef.addEventListener('focus', (event) => {
//     console.log('Получил фокус!');
// });

// inputRef.addEventListener('blur', (event) => {
//     console.log('Потерял фокус!');
// });

// inputRef.addEventListener('input', (event) => {
//     nameLabelRef.textContent = event.target.value;
// });

// licenseRef.addEventListener('change', (event) => {
//     console.log(event);

//     btnRef.disabled = !event.target.checked;
// });




// У нас уже относительно много кода и глаза уже ребят потому что мы инлайним
// события, инлайним колбеки, это не очень хорошо.
// Когда у функции колбек будет 50 строк кода то будет очень тежело читать.
// Делаем рефакторинг. Функции записуем у переменные. Выносим отдельными функциями.

// Если мы делаем так то у нас есть 3 чётко ограниченых блока:
// 1) выбор ссылок на мои элементы на DOM (document.querySelector)
// 2) блок колбеков функций слушателей
// 3) блок регистрации слушателей addEventListener('focus',

// Код стал более структуированый

// const btnRef = document.querySelector('.js-button');
// const inputRef = document.querySelector('.js-input');
// const nameLabelRef = document.querySelector('.js-button > span')
// const licenseRef = document.querySelector('.js-license');

// function handleInputFocus(event) {
// console.log('Получил фокус!');
// }

// function handleInputBlur(event) {
//      console.log('Потерял фокус!');
// }

// function handleInputChange(event) {
//     nameLabelRef.textContent = event.target.value;
// }

// function handleLicenseChange(event) {
//     console.log(event);

//     btnRef.disabled = !event.target.checked;
// }

// inputRef.addEventListener('focus', handleInputFocus);
// inputRef.addEventListener('blur', handleInputBlur);
// inputRef.addEventListener('input', handleInputChange);
// licenseRef.addEventListener('change', handleLicenseChange);





// СОБЫТИЯ КЛАВИАТУРЫ 3 основных события есть:

// 1) keydown - это когда кнопка зажымается вниз.
// 2) keypress - это составное, сначало идет keydown а потом сразу после него 
// keypress. Keypress происходит когда клавиша зажата. 
// Keypress срабатывает только когда нажатие приводит к появлению символа.
// 3) keyup - события розжатия кнопки

// События keydown и keyup срабатывают при нажатии любой клавиши включая служебные.

// Я сейчас на window повешу слушателя с событием keypress
// Есть очень много СВОЙСТ нам интересны 2 -  key и code. (event.key) (event.code)
// Событие Keypress срабатывает только когда нажатие приводит к 
// появлению символа. Если нажымать шифт, контрл, esc, CAPS LOCK
// ничего не будет происходить
// Если не надо отлавливать нажатие служебных клавиш, мы юзаем keypress и все
// хорошо. 
// Если надо обработать нажатие служебных клавиш - нужно keydown.


// window.addEventListener('keypress', event => {
//     console.log(event);
// });

// window.addEventListener('keydown', event => {
//     console.log(event);
// });



// СВОЙСТВА (event.key) (event.code)
// (event.code) используется для сравнения event.code === 'KeyG'/ Даже если 
// нажмем русскую П на англ раскоадке будет G и функция сработает вивідет ('WIN!!!')
// КАК проверить что-ты нажал esc ?  Попробуем. Тут неважно потому что и в key
// и в code хранится одно значение Escape.

// window.addEventListener('keydown', event => {
//     console.log('Event.key: ', event.key);
//     console.log('Event.code: ', event.code);

//     if (event.code === 'KeyG') {
//         console.log('WIN!!!');
//     };
// });



// Когда у нас происходит ввод каких набудь значений я хочу через keypress 
// (только символьные обрабатывались). Пишем   outputRef.textContent += event.key;
// 
// Юзается для того что-бы получить то что вводит пользователь буквально не в 
// инпут а вокно и куда-то это все нарисовать.


// const outputRef = document.querySelector('.js-output');
// const clearBtnRef = document.querySelector('.js-clear');

// function onKeypress(event) {
//     outputRef.textContent += event.key;
// };

// function onClearOutput() {
//     outputRef.textContent = '';
// };

// window.addEventListener('keypress', onKeypress);
// clearBtnRef.addEventListener('click', onClearOutput);





// СОБЫТИЯ МЫШИ
// Базовые события мыши надо знать

// 1) mouseenter - событие входа мышки на елемент (это как hover ефект) в js
// это mouseenter
// Теперь будем менять цвет при наведении мыши

// 2) mouseleave - мышка уходит с елемента

// mouseenter и mouseleave при наведении не чувствуют детей (игнорит детей)


// const boxRef = document.querySelector('.js-box');

// boxRef.addEventListener('mouseenter', event => {
//     console.log(event);
//     event.target.classList.add('box--active');
// });

// boxRef.addEventListener('mouseleave', event => {
//     event.target.classList.remove('box--active');
// });


// Используем ещё 2 СОБЫТИЯ мыши mouseover и mouseout

// 3) mouseover - работает так, наводиш мышкой на елемент все хорошо, когда 
// мышка наведена над ребенком срабатывает ещё одно событие. Тоесть событие
// mouseover чувствует детей
// 4) mouseout - это когда выходит

// Чашче всего использовать mouseenter и mouseleave

// const boxRef = document.querySelector('.js-box');

// boxRef.addEventListener('mouseover', event => {
//     console.log('OVER!');
//     event.target.classList.add('box--active');
// });



// 5) СОБЫТИЕ МЫШИ mousemove - оно называется chatty event - болтливое событие
// это когда ты хочеш что-бы например желтый квадрат бегал за мышкой.
// .Нужно постоянно при движении курсора что-бы просисходило какое-то 
// событие и что-бы координаты высчитывать.

// mousemove - оно называется chatty event - по производительности бьет дай
// бог. У нас будет отдельное занятие где мы разберем что такое БОЛТЛИВЫЕ
// СОБЫТИЯ и как с ними боротся. Как их тропить их дебаунтить: 2 паттерна

// const boxRef = document.querySelector('.js-box');

// boxRef.addEventListener('mousemove', event => {
//     console.log(event);
// });





// ДЕЛАЕМ МОДАЛЬНОЕ ОКНО

// МАСТЕРСКАЯ: МОДАЛЬНОЕ ОКНО.