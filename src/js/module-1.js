// 31 задача:

// const courseTopic = 'JavaSript для начинающих';

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[23];

// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);



// 32 задача:

// function getSubstring(string, length) {
//   const substring = string.slice(0, length);

//   return substring;
// }
// console.log(getSubstring('Привет мир', 3));
// console.log(getSubstring('Привет мир', 6));
// console.log(getSubstring('Привет мир', 8));
// console.log(getSubstring('Привет мир', 10));
// console.log(getSubstring('Привет мир', 0));



// 33 задача:

function formatMessage(message, maxLength) {
  let result;
// Пиши код ниже этой строки
if(message.length <= maxLength) {
  result = message;
}else if(message.length > maxLength) {
  result = message.slice(0, maxLength);
}
// Пиши код выше этой строки
  return result;
}
formatMessage('Curabitur ligula sapien', 16);
formatMessage('Curabitur ligula sapien', 23);
formatMessage('Vestibulum facilisis purus nec', 20);
formatMessage('Vestibulum facilisis purus nec', 30);
formatMessage('Nunc sed turpis a felis in nunc fringilla', 15);
formatMessage('Nunc sed turpis a felis in nunc fringilla', 41)