'use strict';

let btnType = document.querySelector('#btn_type');
let answer = document.querySelector('#answer');
let btnArgs = document.querySelector('#btn_args');
let btnCompare = document.querySelector('#btn_compare');
let btnFactorial = document.querySelector('#btn_factorial');
let btnConcut = document.querySelector('#btn_concut');
let btnSqure = document.querySelector('#btn_square');

btnType.addEventListener('click', typeFunction);
btnArgs.addEventListener('click', countArguments);
btnCompare.addEventListener('click', compareNumber);
btnFactorial.addEventListener('click', factorialNumb);
btnConcut.addEventListener('click', concutNumber);
btnSqure.addEventListener('click', areaOfRectangle);


// 1)Напиши всі можливі варіанти створення функцій.

function typeFunction() {
   let kindOffunction = [
      "Function Declaration",
      "Function Expression",
      "Arrow Function ",
   ];
   for (let i = 0; i < kindOffunction.length; i++) {
      answer.innerHTML += `<p>${i + 1}). ${kindOffunction[i]}</p> `;
   }
   document.getElementById('btn_type').onclick = function () {
      document.getElementById('answer').hidden = true;
   }
}

// 2. Створи функцію, яка буде виводити кількість переданих їй аргументів.
function countArguments(a, b, c, d, e, f) {
   alert(`Количествоа аргументов функции: ${countArguments.length}`);
}

// 3.Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге;
// 1 - якщо перше число більше, ніж друге;
// 0 - якщо числа рівні.
function compareNumber() {
   let number1 = +prompt('Введите первое число которое будет сравниваться:');
   let number2 = +prompt('Введите второе число которое будет сравниваться:');
   let result1 = -1;
   let result2 = 1;
   let result3 = 0;
   if (number1 < number2) {
      alert(`Результат : ${result1} `);
   }
   else if (number1 > number2) {
      alert(`Результат : ${result2} `);
   }
   else if (number1 === number2) {
      alert(`Результат : ${result3}`);
   }
   else {
      alert(`Вы ввели не число!`);
   }
}
// 4.Напиши функцію, яка обчислює факторіал переданого їй числа.
function factorialNumb() {
   let factorialNum = +prompt('Введи число для знаходження факторіала');

   function factorial(n) {
      return (n !== 1) ? n * factorial(n - 1) : 1;
   }
   alert(`Факториал вашего введенного числа = ${factorial(factorialNum)}`);
}
// 5.Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число.
// Наприклад: цифри 1, 4, 9 перетворяться в число 149.
function concutNumber() {
   let namb1 = +prompt('Введите число №1: ');
   let namb2 = +prompt('Введите число №2: ');
   let namb3 = +prompt('Введите число №3: ');
   let result = +[namb1, namb2, namb3].join("");
   alert(`Ваш результат: ${result}`);
   console.log(typeof (result));
}
// 6.Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу.
//  Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
function areaOfRectangle() {
   let rectangleWidth = +prompt('Введите ширину прямогугольника:');
   let rectangleLength = +prompt('Введите длинну прямогугольника:');
   if (!rectangleLength || !rectangleWidth) {
      let res = ((rectangleWidth ** 2) || (rectangleLength ** 2));
      alert(`Площадь квадрата равна : ${res}`);
   }
   else {
      let res = (rectangleWidth * rectangleLength);
      alert(`Площадь прямоугольника равна : ${res}`);
   }
}



