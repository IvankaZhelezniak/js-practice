const btn = document.querySelector("#btn");

// event - это и есть обьект события который автоматически 
// передается первым аргументом, мы можем называть его как угодно, 
// хоть qwerty, но чаще всего он называется или e, evt или event

const handleClick = event => {
  console.log("event: ", event); //откройте консоль чтобы увидеть весь объект целиком

  console.log("event type: ", event.type); // event type:  click

  // будет window, так как мы используем стрелочную функцию, 
  // которая использует внешний контекст 
  // Если использовать обычную функцию то this будет самим элементом 
  // button и равен currentTarget
  console.log("this: ", this); 
  console.log("target: ", event.target); // <button id="btn">CLICK ME!</button>
};

btn.addEventListener("click", handleClick);