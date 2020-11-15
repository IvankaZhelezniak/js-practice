// const clients = ['Mango', 'Poly', 'Ajax'];
//     // это сверху масив с его значениями

// // Указывая в скобках индекс элемента мы получаем его значение
// console.log(clients[0]); // Mango
// console.log(clients[1]); // Poly
// console.log(clients[2]); // Ajax





// const clients = ['Mango', 'Poly', 'Ajax'];

// // Значение элемента можно заменить
// clients[0] = 'Kiwi';
// console.log(clients[0]); // Kiwi

// // Или добавить
// clients[3] = 'Alex';
// console.log(clients[3]); // Alex

// console.log(clients); // ["Kiwi", "Poly", "Ajax", "Alex"]





// Массыв из 6 элементов

// const numbers = [1, 2, 3, 4, 5, 6];


// Допустим у нас будут друзья
// Мы зделали колекцию элементов, если мы выведем в консоль то мы увидим что в консоль 
// в скобках (4) ['Mango', 'Kiwi', 'Poly', 'Ajax'], если нажмем на 4 то размвернётся 
// поэлементно и мы увидим 0: 'Mango' 1: "Kiwi" 2: 'Poly' 3: 'Ajax' и длинну length: 4
// Что это такое  -  элементы массива индексируются, когда мы добавляем элемент в массив
// этому элементу присваится индекс, тоесть это такой ключ идентификатор для него внутри этого
// массива, груба говоря это его позиция. Эти ключи начинаются с нуля.
// Тоесть первый индекс это ноль (0)
// Когда говорим 1 элемент массива то индекс у него 0
// Индекс всегда менше чем номер элемента

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.log(friends);



// С помощью индексов можно достучатся и получить значение элемента.
// Как это делать? Пишем имя переменной в которой лежит массив (friends), потом
// ставим вплотную [] и  пишем в скобках индекс, допустим [0]
// На место такого выражения вернется значение элемента, тоесть это можно записать в 
// переменную или прямо сразу передать в консоль лог и это выведется в терминал.


// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// friends[0];
// console.log(friends);



// тоесть это можно записать в 
// переменную или прямо сразу передать в консоль лог и это выведется в терминал.
// Я говорю, пожалуйста иди найди мне переменную friends и если это массив попытайся 
// взять у него элемент с индексом 0

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.log(friends[0]);



// взять у него элемент с индексом 2  - это будем 3 элемент Poly

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.log(friends[2]);



// ЗНАЧЕНИЕ МОЖНО перезаписать
// const это не константа , это просто переменная в которую нельзя записать другое значение.
// Но то значение которое уже есть в этой переменнной можно изменить, и всякие примитивные
//  типы данных вроде числа или строки изменять нельзя, а вот МАССИВ МОЖНО ИЗМЕНЯТЬ
// Это ещё все тот же массив будет но в нем можно поменять элемент - это называется
// сложный тип данных.
// Я просто говорю на 2 индекс замени постав туда 'Chelsy'


// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.log(friends);
// console.log(friends[2]);

// friends[2] = 'Chelsy';

// console.log(friends);
// console.log(friends[2]);



// Массив один из сложных типом
// Насамом деле эсть один смложный тип это обьекты



// ДЛИННА МАСИВА

// У каждого масива есть длинна length - динамическое значение
// меняется console.log(friends.length);
// и на это место возвращается количество элементов в массиве, сейчас это 4


// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.log(friends);
// console.log(friends[2]);

// friends[2] = 'Chelsy';

// console.log(friends);
// console.log(friends[2]);

// console.log(friends.length);




// Можно добавить 5-тый элемент под 4 индексом - поставить конго
// посмотрим длинну после этой операции console.log(friends.length);
// и теперь длинна будет 5 элементов в массиве

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.log(friends);
// console.log(friends[2]);

// friends[2] = 'Chelsy';

// console.log(friends);
// console.log(friends[2]);

// console.log(friends.length);

// friends[4] = 'Kongo';
// console.log(friends);
// console.log(friends.length);





// Еще вариант:  если добавить 666 элементом (friends[666] = 'Kongo';), а что будет со 
// всеми остальными, мы тогда увидим что у него индекс теперь 666, все которые с 4 индекса
// по 666 будет записано как empty * 662
// Если мы попробуем до них достучатся console.log(friends[600]);  то получим
// неопределено  - undefined. 
// В парктике не применяется, никогда не бывает массивов с дырками


// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.log(friends);
// console.log(friends[2]);

// friends[2] = 'Chelsy';

// console.log(friends);
// console.log(friends[2]);

// console.log(friends.length);

// friends[666] = 'Kongo';
// console.log(friends);
// console.log(friends.length);

// console.log(friends[600]);





// ИТЕРАЦИЯ ПО МАССИВУ

// С помощью цикла можна перебрать массив, тоеть пройтись по каждому элементу.
// for(let i=0) потом нужно какое то условие, нам нужно зделать итерацый столько сколько
// элементов в массиве, именно как раз у нас элементов в массиве вернет friends.length
// тоесть можем сказать - до тех пор пока i  менше чем friends.length; i += 1;
// i  выведу в консоль лог 

// Используя цикл мы можем вот этот счетчик использовать значение счетчика как значение 
// ИНДЕКСА на каждой итереции, i будет индекс элемента массива
// Значение счетчика i  - это значение индекса

// С помощью цикла можна массив заполнить чем-то допустим, как вывести так и заполнить
// но заполнять мы будем позже


// Это цыкл for - здесь мы получаем доступ к индексу

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// for (let i = 0; i < friends.length; i += 1) {
//     console.log(i);

//     console.log(friends[i]);
// }




// Если доступ к индексу не нужен (бывают такие случаи) - мы можем использовать более краткий
// цыкл где не нужно записывать вот это логическое условие let i = 0; i < friends.length; i += 1
// тоесть for...of записывается так
// friend - это просто переменная в которой будут хранится элементы , это тоже самое что
// и friends[i] только это сделает его за вас уже. Если колекцыя во множественном числе 
// friends то переменная будет в единственном friend.

// Получили то же самое 'Mango', 'Kiwi', 'Poly', 'Ajax' - можно перебирать с помощью for..of


// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// for (const friend of friends) {
//     console.log(friend);
// }





/*   ИНСТРУКЦИИ break и continue

Допустим мы делаем поиск по нашим друзьям
по имени например в соц сетях ищеш друга или где-то в сервере и  надо зделать поиск в 
этом массиве
Нам надо массив поэлементно перебрать и поэлементно сравнить - если мы хотим в нем что-то найти
Первое что мы делаем начинаем с индекса
*/


// Но при этом у нас не заканчивается цикл - очень важно
// Цыкл перебирается до конца массива, потому что мы явно указали i < friends.length;
// У нас здесь i используется (наш счетчик) только для того что-бы, ну как бы
// получить доступ к элементу, там мы не записываем и не хотим его изменить, поэтому
// в данном случае мы можем просто перезаписать на for...of


// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// const nameToFind = 'Poly';
// let message;

// for (let i = 0; i < friends.length; i += 1) {
//     const friend = friends[i];

//     if (nameToFind === friend) {
//         console.log(Нашли такого друга);
//     }

// }




// в данном случае мы можем просто перезаписать на for...of  (здесь итераторы под капотом)
// если новичок знает что такое ИТЕРАТОРЫ он офицыально принят на работу

// Это поиск какого-то элемента внутри колекции


// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// const nameToFind = 'Poly';
// let message;

// for (const friend of friends) {
//     if (nameToFind === friend) {
//         console.log('Нашли такого друга');
//     }
// }





// Нам нужно записать каку-то строку в зависимости от условия, тоесть мы message (Нашли такого друга)
// выводим в конце. В противном случае если такого друга нее нашли else записываем такого 
// друга нет/
// ПОЧЕМУ ВЫБИВАЕТ - такого друга нет?????
// Цыкл перебирает массив до конца
// Нам надо прервать цыкл по условию поставить break


// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// const nameToFind = 'Poly';
// let message;

// for (const friend of friends) {
//     if (nameToFind === friend) {
//         message = 'Нашли такого друга';
//         break;
//     } else {
//         message = 'Такого друга нет';
//     }
// }

// console.log(message);




// else  у нас бесполезен результат тот же - можем не писать else


// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// const nameToFind = 'Poly';
// let message;

// for (const friend of friends) {
//     if (nameToFind === friend) {
//         message = 'Нашли такого друга';
//         break;
//     }

//     message = 'Такого друга нет';
// }

// console.log(message);




// Зачем нам каждый раз на каждой интерации записывать в message какое-то значение - 
// есть такой алгоритмик мышление от обратного, тоесть мы можем сделать пердпрложение что
// мы сначала говорим - что такого друга нет, мы буквально вот сразу говорим в
// let message = 'Такого друга нет';
// и потом внутри нашего цыкла только в случае если мы его нашли мы записываем что мы 
// его нашли
// И так получается довольно чистый код
// Это называется - ПРЕДПОЛОЖЕНИЕ ОТ ОБРАТНОГО
// Когда сразу предполагаеш что чего-то там нету а потом внутри твоего перебора внутри
// цикла если условие выполнилось ты нашел друга, ты перезаписываеш значение этой переменной


// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// const nameToFind = 'Poly';
// let message = 'Такого друга нет';

// for (const friend of friends) {
//     if (nameToFind === friend) {
//         message = 'Нашли такого друга';
//         break;
//     }
// }

// console.log(message);






// МНОГОМЕРНЫЕ МАССИВЫ  - матрицы, как доска, как крестики нолики
// board - доска
// Я могу доску передставить как массив из трьох других массивов (тоесть массив. а первый 
// его элемент это еще один массив)
// В повседневной разработке матриц нет - это олимпиадные задачи и т.п

//  если я перебираю console.log(board[0]);  я получу 1 элемент массива  [1, 2, 3]
// если я хочу получить доступ к числу 5? console.log(board[1][1]);  [1][1] - первое 
// элемент массив по индексу, а потом внутри этого тоже первый индекс и получается 5


// const board = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];

// console.log(board[1][1]);






// МЕТОДЫ МАССИВА


// Один лайфхак, как посмотреть есть ли такой метод у массива, где посмотреть методы
// массива?

// Просто выводим массив console.log([]);  В консоле будет стрелочка маленькая возле скобок
// массива, нажимаем на них.  У него есть такое странное свойство __proto__ называется.
// Насамом деле это ПРОТОТИПНОЕ НАСЛЕДОВАНИЕ, мы будем это учить, протипы этого обьекта и т.д.
// Тут можна увидеть все методы массива или у сложного типа есть.
// Если Вы не уверены есть ди такой метод можна так посмотреть.



// МЕТОД   PUSH  -  добавляет элементы в конец массива

// Можно в массив добавлять по индексам но это очень неудобно и никто это не пользуется
// Мы делаем такой массив const numbers = [1, 2, 3];  я хочу добавить к нему новый элемент
// я хочу добавить его в конец масива  и вызываем numbers.push (4) и сюда передаем
// элемент который хотим добавить, в нашем случае это элемент (4)

// Метод push принимает значение которое Вы хотите добавить в массив и добавляет его в конец
// тоеть последним элементом,  можно передавать несколько элементов (4,5,6)

// Этот метод push используется относительно часто

//Эсть ещё метод pop - он удаляет с конца, вызывается без ничего бустые скобки 
// numbers.pop();  -  он берет самый кнрайний элемент самый последний и просто его удаляет
// из массива.  Сколько раз мы этот pop вызовем столько элеметов с конца и удалятся.


// const numbers = [1, 2, 3];

// numbers.push(4, 5, 6);
// console.log(numbers);

// numbers.pop();
// numbers.pop();
// numbers.pop();
// console.log(numbers);





// ПРИМЕР с методом push

// Пользователь что-то нам вводит, вот у нас было когда то возвести в степень,
// а теперь нужно написать такое: сумировать все числа которые введёт пользователь.
// В html документ подключаем поле для ввода и две кнопки.

// Первое получаем ссылку на элемент ввода
// Делаем клик на кнопку добавить в массив и переводим ее в число потому что на выходе строка
// А потом берем наш numbers и в него делаем push
// И потом консолить каждый раз numbers что-бы видеть что с ним происходит console.log(numbers);
// Что-бы очищать введеное значение восле нажатия на кнопки можем сделать следующее
// Мы value можем перезаписывать, тоесть 

// Использование метода push понятно, мы пушим и набываем массив числами
// А потом при клаке на кнопку Посчитать сумму, мы берем вот этот массив numbers.push(value);
// и считаем сумму
// Вешаем слушателя события на эту кнопку calcBtn.addEventListener

// и теперь мы имеем доступ к этому numbers потому что он обьвлен в глобальной области
// видимости и получаем к нему доступ.
// КАК сделать сумму всех элементов в массиве???  - ПЕРЕБРАТЬ ЕГО ЦИКЛ (логично)
// Просто перебрать циклом весь массив и создать какую то переменную в которой будем
// хранить total (в переводе общее), тоесть это алгоритмика.
// Ок, мне нужно посчитать общую сумму, значит мне куда-то надо записать эту общую сумму
// делаем let total = 0;
// потом при клике на кнопку Посчитать сумму calcBtn перебрать массив const numbers = [];
// Надо в массив что-то добавить а потом считать
// Мы можем внутри этого for на каждой итерации к нашому total добавлять значение этого
// элемента
// total = total + number
// Тоесть мы можем взять массив чисел перебрать его поэлементно и что-то сделать с каждым
// элементом в данном случае посчитать сумму



// const valueInputRef = document.querySelector('.js-value');
// const addValueBtn = document.querySelector('.js-add-value');
// const calcBtn = document.querySelector('.js-calculate');
// const numbers = [];
// let total = 0;

// addValueBtn.addEventListener('click', function() {
//     const value = Number(valueInputRef.value);

//     numbers.push(value);
//     valueInputRef.value = '';
//     console.log(numbers);
    
// })

// calcBtn.addEventListener('click', function() {
//     for (const number of numbers) {
//         console.log(number);
//           total += number;
//     }
    
//     console.log('Totoal: ', total);
// })






// МЕТОДЫ split() и join()

// Есть несколько методов и у строки и у массива для того что-бы работать вместе

// Представим у нас есть такая вот строка const title = 'Top 10 benefits of React framework';
// и мне необходимо ее по разделителю разбить в массив
// split - разбить от английского
// Мы пишем console.log(title.split(' ')) и разделяем по разделителю у нас это 
// пробел - пустая строка ' '
// Сделало нам массив где каждое слово вынесено отдельным элементом, сделало 6 слов тоесть
// массив из шести элементов

// Можна поставить любой разделитель - тире и т.д. лиш бы он был одиноковым

// Так работает метод split() - метод строки, берет строку и разбавает в массив по 
// разделителю


// const title = 'Top 10 benefits of React framework';

// console.log(title.split(' '));



// Есть ещё метод join() - соединение, который работет наоборот, берет массив и соединяет
// его значение в строку