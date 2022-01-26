// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// const { array } = require("joi");



// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);



// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// const lastElement = friends.length - 1;

// for (let i = 0; i <= lastElement; i += 1) {
//   console.log(friends[i]);
//   friends[i] += '-1';
// }
// console.table(friends);

// for (const friend of friends) {
//   console.log(friend);
// }



// Выносим варианты в массив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "apple";
// Проверяем наличие элемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }




// let farm = {
//   meat: 2,
//   eggs: 6,
//   milk: 3
// };
// let [egg, milk] = Object.values(farm);
// console.log(egg);
// вернет 2








                                      // ---- Задача 1 -----

// Это собесного типа задача)
// Итак, у нас есть число, например  const number = 123456789
// Нужно сделать из него массив - [1,2,3,4,5,6,7,8,9]
// Но есть условие - нам нельзя использовать приведение к строке, и внутри массива будут числа


// Работает с обьявлением переменной const - так надо по задаче

// const number = 123456789;

// function getNumbers(num) {
// 	let res = []
// 	let base = 10
// 	let currNum = Math.abs(num)
// 	do {
// 		let baseShiftedNum = Math.floor(currNum / base)
// 		let diff = currNum - baseShiftedNum * base
// 		res.unshift(diff)
// 		currNum = baseShiftedNum
// 	} while (currNum > 0)
// 	return res
// }


// console.log(getNumbers(number));



// Работает с обьявлением переменной let

// let number = 123456789;
// const digits = [];
// while (number > 0) {
//     digits.push(number % 10);
//     number = Math.floor(number / 10);
// }
// digits.reverse();
// console.log(digits);



// Забавное введение в рекурсию. Этот ответ принимает число и возвращает массив числовых цифр.
// Он не преобразует число в строку в качестве промежуточного шага.

// Учитывая n = 1234 ,

// n % 10 вернет первую (правую) цифру, 4
// n / 10 вернет 123 с некоторым остатком
// Используя Math.floor , мы можем отрезать оставшуюся часть
// Повторяя эти шаги, мы можем сформировать весь результат
// Теперь нам просто нужно построить условие рекурсии,

// Если число уже состоит из одной цифры (n < 10), верните массив singleton этой цифры
// в противном случае (индуктивное) число равно 10 или больше; повторите и добавьте к первой цифре
// const digits = (n = 0) =>
//   n < 10
//     ? [ n ]
//     : [ ... digits (Math.floor (n / 10)), n % 10 ]

// console.log (digits ())        // [ 0 ]
// console.log (digits (1))       // [ 1 ]
// console.log (digits (12))      // [ 1, 2 ]
// console.log (digits (123))     // [ 1, 2, 3 ]
// console.log (digits (11234))   // [ 1, 2, 3, 4 ]

// console.log (digits (123456789012))
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2 ]




                            //  -----ЗАДАЧА 2 ---

// const allUsers = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]


// Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей у которых есть друг с именем в параметре
// friendName.Массив друзей пользователя хранится в свойстве friends.



// const getUsersWithFriend = (users, friendName) => {
//     return users.filter(user => user.friends.includes(friendName));
// };
// console.log(getUsersWithFriend(allUsers, "Briana Decker"));



// Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей (свойство friends). У нескольких пользователей
// могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.


// const getFriends = (users) => {
//    const allFriends = users.flatMap(user => user.friends);
//     const arrayAllFriend = allFriends.filter((friend, index, array) => array.indexOf(friend) === index);
//     return arrayAllFriend;
// };
// console.log(getFriends(allUsers));




// ЗАДАЧА. ОБЩЕЕ КОЛИЧЕСТВО ДРУЗЕЙ
// Дополни функцию getTotalFriendCount(users) так, чтобы она считала и возвращала общее количество друзей(свойство friends) всех
//  пользователей из массива users.

// const getTotalFriendCount = users => {
//    return users.reduce((total, user) => {
//        return total += user.friends.length;
//    }, 0);
// };
// console.log(getTotalFriendCount(allUsers))





                          //  ---- ЗАДАЧА 3 ----
      
      // todo Заметки

// Напиши класс Notes, который управляет коллекцией заметок в свойстве items.
// Заметка - это объект со свойствами text и priority. Добавь классу статическое свойство Priority, в котором будет храниться объект с приоритетами.
// Добавь методы addNote(note), removeNote(text) и updateNote(text, newPriority).


class Notes {
    static Priority = {
        LOW: 'low',
        NORMAL: 'normal',
        HIGH: 'high',
    };

    constructor(items = []) {
        this.items = items;
    }

    addNote(note) {
        this.items.push(note);
    }

    removeNote(text) {
        const item = this.items.find(el => el.text === text);

        if (item) {
            this.items = this.items.filter(el => el.text !== text);
        }
    }

    updateNote(text, newPriority) {
        const element = this.items.find(el => el.text === text);

        if (element) {
            element.priority = newPriority;
        }
    }
}

const myNotes = new Notes([]);

myNotes.addNote({ text: 'Моя первая заметка', priority: Notes.Priority.LOW });

myNotes.addNote({
    text: 'Моя вторая заметка',
    priority: Notes.Priority.NORMAL,
});

myNotes.removeNote('Моя первая заметка');

myNotes.updateNote('Моя вторая заметка', Notes.Priority.HIGH);

myNotes.addNote({ text: 'Моя третья заметка', priority: Notes.Priority.LOW });

myNotes.addNote({
    text: 'Моя четвертая заметка',
    priority: Notes.Priority.LOW,
});

console.log(myNotes.items);