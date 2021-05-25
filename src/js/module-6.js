// Метод map:    Пример  ( время 20:00) обновляем один элемент массивам по id с массива обьектов. 
// Нужно найти єлемнт массива по id (это будет обьект) и подменить значение свойства этого обьекта.



// нахождение уникальных элементов через filter()
// Как то так

// const a = [ 1, 5, 1, 6, 4, 5, 2, 5, 4, 3, 1, 2, 6, 6, 3, 3, 2, 4 ];

// const unique = a.filter(function(itm, i, a) {
//     return i === a.indexOf(itm);
// });

// console.log(unique);


// // С синтаксисом ES6

// const list = [1, 3, 4, 1, 2, 1, 3, 3, 4, 1];
// const list1 = list.filter((x, i, a) => a.indexOf(x) === i)
// console.log(list1);


// // С синтаксисом ES5

// const list1 = list.filter(function (x, i, a) { 
//     return a.indexOf(x) === i; 
// });
// console.log(list1);





// 1:24:50 собираем все теги из твитов через reduce аккумулятор - массив)   занятие 11

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const allTags = tweets.reduce((tags, tweet) => {
//   return [...tags, ...tweet.tags];
// }, []);

// или так в одну строку

// const allTags = tweets.reduce((tags, tweet) => [...tags, ...tweet.tags], []);

// console.log(allTags);


// 1:36:10 ведем статистику тегов  
// должно вернуть такой обьект cо статистикой, сколько каких тегов, например nodejs: 3 тега ввели

// {
//     nodejs: 3,
//     js: 3,
//    react: 2,         
// };

// на каждой итерации нужно создать новый обьект аккумулятора

// const tagsStats = allTags.reduce((acc, tag) => {
//     console.log(acc);

//     if (acc[tag]) {
//         return {
//             ...acc,
//             [tag]: acc[tag] += 1
//         };
//     };

//     return {
//         ...acc,
//         [tag]: 1
//     }
// }, {});

// console.log(tagsStats);


// более короткую запись делаем   (время  1:49:00 с видео)

// const tagsStats = allTags.reduce((acc, tag) => ({
//         ...acc,
//         [tag]: acc[tag] ? acc[tag] += 1 : 1
//     }), {});

// console.log(tagsStats);





// Задача 9 автопроверка

// Задание
// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент,
//   значение которого это чётное число, добавляя к нему значение параметра value.

// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а
// создавала, наполняла и возвращала новый массив с обновлёнными значениями.

// Тесты
// Объявлена функция changeEven(numbers, value).
// Функция changeEven не изменяет значение параметра numbers.
// Вызов changeEven([1, 2, 3, 4, 5], 10) возвращает новый массив [1, 12, 3, 14, 5].
// Вызов changeEven([2, 8, 3, 7, 4, 6], 10) возвращает новый массив [12, 18, 3, 7, 14, 16].
// Вызов changeEven([17, 24, 68, 31, 42], 100) возвращает новый массив [17, 124, 168, 31, 142].
// Вызов changeEven([44, 13, 81, 92, 36, 54], 100) возвращает новый массив [144, 13, 81, 192, 136, 154].
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.


// function changeEven(numbers, value) {
//   const newArray = [];
  
//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//       number += value;
//     };
//     newArray.push(number);
//   });
//   return newArray;
// };

// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// console.log(changeEven([17, 24, 68, 31, 42], 100));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));





// Задача 16 автопроверка

// В переменной allCourses хранится массив всех посещаемых предметов, которые могут повторяться.
// Задача заключается в том, чтобы сделать новый массив, в котором будут только уникальные предметы,
//   то есть без повторений.

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );
// Используя array.indexOf(course) выполняем поиск первого совпадения текущего элемента course и
// получаем его индекс в оригинальном массиве всех курсов.В параметре index хранится индекс текущего
// элемента course при переборе массива методом filter.

// Если результат indexOf() и значение index равны - это уникальный элемент, потому что это первый
// раз когда такое значение встречается в массиве и на текущей итерации фильтр обрабатывает именно его.

// # Массив всех курсов
// ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];
// Для элемента 'математика' под индексом 0:

// indexOf() вернёт 0, потому что ищет первое совпадение.
// Значение параметра index будет 0.
// Они равны, значит это уникальный элемент.
// Для элемента 'математика' под индексом 3:

// indexOf() вернёт 0, потому что ищет первое совпадение.
// Значение параметра index будет 3.
// Они не равны, значит это повторяющийся - не уникальный элемент.
// Задание
// Дополни код так, чтобы в переменной allGenres был массив всех жанров книг(свойство genres) из
// массива books, а в переменной uniqueGenres массив уникальных жанров - без повторений.

// Тесты
// Объявлена переменная books.
// Значение переменной books это массив объектов.
// Объявлена переменная allGenres.
// Значение переменной allGenres это массив['приключения', 'историческое', 'фантастика', 'мистика',
//   'ужасы', 'мистика', 'приключения'].
// Объявлена переменная uniqueGenres.
// Значение переменной uniqueGenres это массив['приключения', 'историческое', 'фантастика',
//   'мистика', 'ужасы'].
// Для вычисления значения переменной allGenders использован метод flatMap().
// Для вычисления значения переменной uniqueGenres использован метод filter().


// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика', 'мистика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика', 'приключения']
//     }
//   ];

//   const allGenres = books.flatMap(book => book.genres);
//   const uniqueGenres = allGenres.filter((genres, i, allGenres) => allGenres.indexOf(genres) === i );




// Задача 17 автопроверка

// Метод filter() и массив объектов

// При работе с массивом объектов выполняется фильтрация по значению какого - то свойства.В результате
// получается новый массив отфильтрованных объектов.

//   Например, есть массив студентов с баллами за тест.Необходимо отфильтровать лучших(балл выше 80),
//     худших(балл ниже 50) и средних студентов(балл от 50 до 80).

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
//   { name: 'Хьюстон', score: 64 },
// ];

// const best = students.filter((student) => student.score >= HIGH_SCORE);
// console.log(best); // Массив объектов с именами Манго и Киви

// const worst = students.filter((student) => student.score < LOW_SCORE);
// console.log(worst); // Массив с одним объектом Аякс

// // В коллбек-функции удобно деструктуризировать свойства объекта
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average); // Массив объектов с именами Поли и Хьюстон


// Задание
// Используя метод filter() дополни код так, чтобы:

// В переменной topRatedBooks получился массив книг рейтинг которых(свойство rating) больше либо
// равно значению переменной MIN_RATING.

// В переменной booksByAuthor получился массив книг написанных автором с именем(свойство author)
// которое совпадает со значением в переменной AUTHOR.

// Тесты
// Объявлена переменная books.
// Значение переменной books это массив объектов.
// Объявлена переменная MIN_RATING.
// Значение переменной MIN_RATING это число 8.
// Объявлена переменная AUTHOR.
// Значение переменной AUTHOR это строка 'Бернард Корнуэлл'.
// Объявлена переменная topRatedBooks.
// Значение переменной topRatedBooks это массив книг с рейтингов выше 8.
// Объявлена переменная booksByAuthor.
// Значение переменной booksByAuthor это массив книг автор которых 'Бернард Корнуэлл'.
// Для перебора массива books использован метод filter().


// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.title && book.author === AUTHOR);




// Задача 18 автопроверка

// Задача. Пользователи с цветом глаз
// Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.


// Задание
// Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив пользователей
// у которых цвет глаз(свойство eyeColor) совпадает со значением параметра color.

// Тесты
// Объявлена переменная getUsersWithEyeColor.
// Переменной getUsersWithEyeColor присвоена стрелочная функция с параметрами (users, color).
// Для перебора параметра users используется метод filter().

// Если значение параметра color это 'blue', функция возвращает массив объектов пользователей с 
// именами Moore Hensley, Sharlene Bush и Carey Barr.
// Если значение параметра color это 'green', функция возвращает массив объектов пользователей с 
// именами Ross Vazquez и Elma Head.
// Если значение параметра color это 'brown', функция возвращает массив объектов пользователей с 
// именами Blackburn Dotson и Sheree Anthony.
// Если значение параметра color это любая другая строка, функция возвращает пустой массив.
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.

// const userss = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female'
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male'
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male'
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female'
//   }
// ];


// const getUsersWithEyeColor = (users, color) => {
// return users.filter(user => user.name && user.eyeColor === color)
// };

// console.log(getUsersWithEyeColor(userss, 'blue'));
// console.log(getUsersWithEyeColor(userss, 'green'));
// console.log(getUsersWithEyeColor(userss, 'brown'));
// console.log(getUsersWithEyeColor (userss, 'greener'));


// Решено








// const objA = [
//   {
//   number: 1,
//   name: ['Ivanka', 'Alina'],
// },
//   {
//   number: 2,
//   name: ['kolya', 'Vasja'],
//   },
//   {
//   number: 3,
//   name: ['Nika', 'Alina'],
// },
// ];

// console.log(objA.filter((obj) => obj.name.includes('Nika')));






// Задача 20 автопроверка

// Задача.Пользователи с другом

// Массив обьектов пользователей
// Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.

// Задание
// Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив
// пользователей у которых есть друг с именем в параметре friendName.Массив друзей пользователя
// хранится в свойстве friends.

// Тесты
// Объявлена переменная getUsersWithFriend.
// Переменной getUsersWithFriend присвоена стрелочная функция с параметрами (users, friendName).
// Для перебора параметра users используется метод filter().
// Если значение параметра friendName это строка 'Briana Decker', функция возвращает массив объектов
// пользователей с именами Sharlene Bush и Sheree Anthony.
// Если значение параметра friendName это строка 'Goldie Gentry', функция возвращает массив объектов
// пользователей с именами Elma Head и Sheree Anthony.
// Если значение параметра friendName это строка 'Adrian Cross', функция возвращает пустой массив.
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.


// const utilizer = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39
//   },
// ];


// const getUsersWithFriend = (users, friendName) => {
//    return users.filter((user) => user.friends.includes(friendName));
// };

// console.log(getUsersWithFriend(utilizer, 'Briana Decker'));






// Задача 31 автопроверка

// Метод reduce() и массив объектов
// При работе с массивом объектов выполняется редуцирование по значению какого - то свойства.
//   Например, есть массив студентов с баллами за тест.Необходимо получить средний бал.

// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
//   { name: 'Хьюстон', score: 64 },
// ];

// // Название аккумулятора может быть произвольным, это просто параметр функции
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;


// Задание
// Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока,
//   и получить общую сумму этих времён.Рассчитать время для каждого из игроков, можно разделив его время(свойство playtime) на количество игр(свойство gamesPlayed).

// Тесты
// Объявлена переменная players.
// Значение переменной players это массив объектов игроков.
// Объявлена переменная totalAveragePlaytimePerGame.
// Значение переменной totalAveragePlaytimePerGame это число 1023.
// Для перебора массива players используется метод reduce().


// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   const timePerGame = player.playtime / player.gamesPlayed;
//   return total + timePerGame;
// }, 0);

// const averageTimePlay = totalAveragePlaytimePerGame / players.length;

// console.log(averageTimePlay);





// Задача 33 автопроверка

// Задача.Общее количество друзей. 

// Массив обьектов пользователей
// Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.


// Задание
// Дополни функцию getTotalFriendCount(users) так, чтобы она считала и возвращала общее количество
// друзей(свойство friends) всех пользователей из массива users.

// Тесты
// Объявлена переменная getTotalFriendCount.
// Переменной getTotalFriendCount присвоена стрелочная функция с параметром (users).
// Для перебора параметра users используется метод reduce().
// Вызов функции с указанным массивом пользователей возвращает число 14
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.


// const utilizer = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female'
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male'
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male'
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female'
//   },
// ];


// const getTotalFriendCount = users => {
//   return users.reduce((totalCountFriend, friend, i, users) => {
//     return users.flatMap(user => user.friends).length;
//   }, 0);
// };

// console.log(getTotalFriendCount(utilizer));





// Задача 36 автопроверка

// Свой порядок сортировки строк
// Для сортировки строк в алфавитном порядке, по возрастанию или убыванию, используется метод строк
// localeCompare().

// firstString.localeCompare(secondString)
// Он вызывается на строке которую нужно сравнить(firstString) с той, что передана ему как
// аргумент(secondString).

// 'a'.localeCompare('b'); // -1
// 'b'.localeCompare('a'); // 1
// 'a'.localeCompare('a'); // 0
// 'b'.localeCompare('b'); // 0
// Возвращает отрицательное значение если firstString должна быть перед secondString.
// Возвращает положительное значение больше нуля если firstString должна быть после secondString.
// Если строки одинаковы, возвращается ноль.
// Это удобно использовать при сортировке строк, так как метод sort() ожидает такие же значения от
// коллбек - функции.

// const students = ['Вика', 'Андрей', 'Олег', 'Юля', 'Борис', 'Катя'];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // ['Андрей', 'Борис', 'Вика', 'Катя', 'Олег', 'Юля']

// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Вика', 'Борис', 'Андрей']


// Задание
// Онлайн бибилиотеке необходимо отображать книги отсортированные по автору, в алфавитном и обратном
// алфавитном порядке.Дополни код так, чтобы в переменной authorsInAlphabetOrder получилась
// отсортированная по алфавиту копия массива authors, а в переменной authorsInReversedOrder копия
// отсортированная в обратном алфавитном порядке.

// Тесты
// Объявлена переменная authors.
// Значение переменной authors это массив['Ли Танит', 'Бернард Корнуэлл', 'Роберт Шекли',
//   'Федор Достоевский', 'Говард Лавкрафт'].
// Объявлена переменная authorsInAlphabetOrder.
// Значение переменной authorsInAlphabetOrder это массив['Бернард Корнуэлл', 'Говард Лавкрафт',
//   'Ли Танит', 'Роберт Шекли', 'Федор Достоевский'].
// Объявлена переменная authorsInReversedOrder.
// Значение переменной authorsInReversedOrder это массив['Федор Достоевский', 'Роберт Шекли',
//   'Ли Танит', 'Говард Лавкрафт', 'Бернард Корнуэлл'].
// Использован метод sort().


// const authors = [
//     'Ли Танит',
//     'Бернард Корнуэлл',
//     'Роберт Шекли',
//     'Федор Достоевский',
//     'Говард Лавкрафт'
//   ];
  
//   const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
//   const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
  
// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);





// Задача 37 автопроверка

// Сортировка объектов
// При работе с массивом объектов сортировка выполняется по числовому или строчному значению
// какого - то свойства.Например, есть группа студентов с баллами за тест.Необходимо отсортировать
// массив объектов по возрастанию и убыванию количества баллов, и по имени студента.

// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
// ];

// const inAscendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// const inDescendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );


// Задание
// Дополни код так, чтобы:

// В переменной sortedByAuthorName получился массив книг отсортированный по имени автора в алфавитном
// порядке.
// В переменной sortedByReversedAuthorName получился массив книг отсортированный по имени автора в
// обратном алфавитном порядке.
// В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
// В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.
// Тесты
// Объявлена переменная books.
// Значение переменной books это исходный массив объектов книг.
// Объявлена переменная sortedByAuthorName.
// Значение переменной sortedByAuthorName это массив книг отсортированный по имени автора в
// алфавитном порядке.
// Объявлена переменная sortedByReversedAuthorName.
// Значение переменной sortedByReversedAuthorName это массив книг отсортированный по имени автора
// в обратном алфавитном порядке.
// Объявлена переменная sortedByAscendingRating.
// Значение переменной sortedByAscendingRating это массив книг отсортированный по возрастанию рейтинга.
// Объявлена переменная sortedByDescentingRating.
// Значение переменной sortedByDescentingRating это массив книг отсортированный по убыванию рейтинга.
// Для перебора массива books используется метод sort().


// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
// ];

// const sortedByAuthorName = [...books].sort((firstAuthor, secondAuthor) => firstAuthor.author.localeCompare(secondAuthor.author));
// const sortedByReversedAuthorName = [...books].sort((firstAuthor, secondAuthor) => secondAuthor.author.localeCompare(firstAuthor.author));
// const sortedByAscendingRating = [...books].sort((firstRating, secondRating) => firstRating.rating - secondRating.rating);
// const sortedByDescentingRating = [...books].sort((firstRating, secondRating) => secondRating.rating - firstRating.rating);

// console.log(sortedByAuthorName);





// Задача 39 автопроверка

// Задача. Сортировка по количеству друзей
// Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.


// Задание
// Дополни функцию sortByDescendingFriendCount(users) так, чтобы она возвращала массив пользователей
// отсортированный по убыванию количества их друзей(свойство friends).

// Тесты
// Объявлена переменная sortByDescendingFriendCount.
// Переменной sortByDescendingFriendCount присвоена стрелочная функция с параметром (users).
// Значение параметра users не изменяется.
// Для перебора параметра users использован метод sort().
// Вызов функции с указанным массивом пользователей возвращает новый массив пользователей
// отсортированный по убыванию количества их друзей.
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.


// const userss = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female'
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male'
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male'
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female'
//   },
// ];

// const sortByDescendingFriendCount = users => {
//      return [...users].sort((firstFriend, secondFriend) => secondFriend.friends.length - firstFriend.friends.length);
// };

// console.log(sortByDescendingFriendCount(userss));





// Задача 41 автопроверка

// Цепочки методов (чейнинг, chaining)
// Есть массив объектов с именами, баллами и посещаемыми предметами каждого студента.

// const students = [
//   { name: 'Манго', score: 83, courses: ['математика', 'физика'] },
//   { name: 'Поли', score: 59, courses: ['информатика', 'математика'] },
//   { name: 'Аякс', score: 37, courses: ['физика', 'биология'] },
//   { name: 'Киви', score: 94, courses: ['литература', 'информатика'] },
// ];
// Необходимо получить массив их имён отсортированный по возрастанию баллов за тест.Для этого мы
// отсортируем копию массива методом sort(), после чего методом map() составим массив значений
// свойства name из сортированного массива.

// const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
// const names = sortedByAscendingScore.map((student) => student.name);

// console.log(names); // ['Аякс', 'Поли', 'Манго', 'Киви']
// Проблема в том, что у нас появляются промежуточные переменные после каждой операции кроме
// финальной.Переменная sortedByAscendingScore лишняя и необходима только для хранения промежуточного
// результата.

// Избавиться от таких «мёртвых» переменных можно группируя вызовы методов в цепочки.Каждый
// следующий метод будет выполняться на результате работы предыдущего.

// const names = [...students]
//   .sort((a, b) => a.score - b.score)
//   .map((student) => student.name);

// console.log(names); // ['Аякс', 'Поли', 'Манго', 'Киви']
// Делаем копию исходного массива перед сортировкой.
// На копии вызываем метод sort().
// К результату работы метода sort() применяем метод map().
// Переменной names присваивается результат работы метода map().
// Получим сортированный по алфавиту массив уникальных посещаемых предметов.

// const uniqueSortedCourses = students
//   .flatMap((student) => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .sort((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses); // ['биология', 'информатика', 'литература', 'математика', 
// 'физика']
// На исходном массиве вызываем flatMap() и делаем разглаженный массив всех курсов.
// К результату метода flatMap() применяем метод filter() для фильтрации уникальных элементов.
// На результате метода filter() вызываем sort().
// Переменной uniqueSortedCourses присваивается результат работы метода sort().
// Цепочка методов может быть произвольной длины, но обычно не более 2 - 3 операций.Во - первых,
//   перебирающие методы используются для сравнительно простых операций над коллекцией.Во - вторых,
//   вызов каждого последующего метода, это дополнительный перебор массива, что при достаточном
// количестве, может сказаться на производительности.
  

// Задание
// Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке,
//   рейтинг книг которых больше значения переменной MIN_BOOK_RATING.

// Тесты
// Объявлена переменная books.
// Значение переменной books это исходный массив объектов.
// Объявлена переменная MIN_BOOK_RATING.
// Значение переменной MIN_BOOK_RATING это число 8.
// Объявлена переменная names.
// Значение переменной names это массив['Бернард Корнуэлл', 'Говард Лавкрафт', 'Ли Танит',
//   'Роберт Шекли'].
// Нет объявленых переменных кроме books, MIN_BOOK_RATING и names.
// Используется цепочка методов filter, map, sort.


// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
// ];
// const MIN_BOOK_RATING = 8;

// const names = books.filter(book => book.rating > MIN_BOOK_RATING).sort((firstAuthor, secondAuthor) => firstAuthor.author.localeCompare(secondAuthor.author)).map(book => book.author);




// Задача 42 автопроверка

// Задача.Пользователи и друзья

// Задание
// Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала массив имён
// пользователей отсортированный по возрастанию количества их друзей(свойство friends).

// Тесты
// Объявлена переменная getNamesSortedByFriendCount.
// Переменной getNamesSortedByFriendCount присвоена стрелочная функция с параметром (users).
// В теле функции используется цепочка методов.
// Значение параметра users не изменяется.
// Вызов функции с указанным массивом пользователей возвращает массив['Moore Hensley',
//   'Sharlene Bush', 'Elma Head', 'Sheree Anthony', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson'].
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.


const userss = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male'
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female'
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male'
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female'
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
    isActive: true,
    balance: 3951,
    gender: 'male'
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
    isActive: false,
    balance: 1498,
    gender: 'male'
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female'
  },
];

// const getNamesSortedByFriendCount = users => {
//   return [...users].sort((firstFriend, secondFriend) =>
//     firstFriend.friends.length - secondFriend.friends.length).map(user => user.name);
// };

// console.log(getNamesSortedByFriendCount(userss));



// Задача 43  масив обьектов тот же

// Задача. Имена друзей

// Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён друзей
//   (свойство friends) отсортированный по алфавиту.

// Тесты
// Объявлена переменная getSortedFriends.
// Переменной getSortedFriends присвоена стрелочная функция с параметром (users).
// В теле функции используется цепочка методов в правильном порядке.
// Значение параметра users не изменяется.
// Вызов функции с указанным массивом пользователей возвращает массив['Adrian Cross', 'Aisha Tran',
//   'Briana Decker', 'Eddie Strong', 'Goldie Gentry', 'Jacklyn Lucas', 'Jordan Sampson',
//   'Linda Chapman', 'Marilyn Mcintosh', 'Naomi Buckner', 'Padilla Garrison', 'Sharron Pace',
//   'Solomon Fokes'].
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.


// const getSortedFriends = users => {
//   return users.flatMap(user => user.friends).filter((user, i, users) =>
//     users.indexOf(user) === i).sort((firstNameFriend, secondNameFriend) =>
//       firstNameFriend.localeCompare(secondNameFriend));
// };

// console.log(getSortedFriends(userss));




// Задача 44 Задача. Общий баланс.  массив обьектов тот же сверху

// Задание
// Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий баланс
// пользователей(свойство balance), пол которых(свойство gender) совпадает со значением параметра
// gender.

// Тесты
// Объявлена переменная getTotalBalanceByGender.
// Переменной getTotalBalanceByGender присвоена стрелочная функция с параметрами (users, gender).
// В теле функции используется цепочка методов в правильном порядке.
// Значение параметра users не изменяется.
// Если значение параметра gender это строка 'male', функция возвращает число 12053.
// Если значение параметра gender это строка 'female', функция возвращает число 8863.
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.


// const getTotalBalanceByGender = (users, gender) => {
//    return users.filter(user => user.gender === gender).reduce((totalBalance, user) => {
//      return totalBalance + user.balance;
//    }, 0);
// };
// console.log(getTotalBalanceByGender(userss, 'male'));

