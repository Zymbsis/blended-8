// * Розгалуження: if, if...else, else...if
// TODO: 1 ===================================
// Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.



// if(str.toLocaleLowerCase().startsWith(`a`)){
// console.log(`yes`);
// } else{
//     console.log(`noy`)
// }
// const userName = prompt(`enter your word`);
// if(userName.toLocaleLowerCase().startsWith(`r`)){console.log(`Hello`);

// }else { console.log(`user hello`)}

// let elem = userName.toLocaleLowerCase().startsWith(`r`)? `hello Name` : `hello User`;
// console.log(elem)


// let result = str.toLocaleLowerCase().endsWith(`d`) ? `eys` : `noy`;
// console.log(result)
// let result = str.toLocaleLowerCase().startsWith(`a`);
// console.log(result)


// function poli(str1, str2){
// str1 = str1.toLocaleLowerCase();
// if( str1 === str2){
//     console.log( `yes`);
// }else if ( str1 !== str2){
//     console.log(`noy`)
// }
// }
// console.log(poli(`absa`,`abqsxsa`))

// const myStr = 'abcd';
// if (myStr.toLowerCase().startsWith('a')) {
//   console.log('yes');
// } else {
//   console.log('no');
// }
// const result = myStr.toLowerCase().startsWith('a') ? 'yes' : 'no';
// console.log(myStr.toLowerCase().startsWith('ab'));
// console.log(result);


// TODO: 2 ===================================
// У змінній min лежить число від 0 до 60. Визначте у котру чверть години
// Попадає це число (у першу, другу, третю або четверту). Виведіть значення у консоль, або alert


// const min = -1;
// if (min > 0 && min <= 15) {
//   console.log("first part");
// } else if (min > 15 && min <= 30) {
//   console.log("second part");
// } else if (min > 30 && min <= 45) {
//   console.log("third part");
// } else if (min > 45 && min <= 60) {
//   console.log("forth part");
// } else {
//   console.log("not found");
// }

//TODO: 3 ===================================
//Напишіть код, який запитуватиме
//логін за допомогою prompt і логувати результат
//в консоль браузера

//Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша відміна
//Вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Добрий день!"
// Якщо відвідувач натиснув відміна виводити рядок 'скасовано'
//інакше виводити рядок "Невірний пароль!"

// const loginInput = prompt("Enter your login");

// if (loginInput) {
//   if (loginInput.toLowerCase() === "admin") {
//     const password = prompt("Enter your password");
//     if (password) {
//       if (password === "i am main") {
//         alert("Regards");
//       } else {
//         alert("invalid password");
//       }
//     } else {
//       alert("You are not recognized");
//     }
//   } else if (loginInput.toLowerCase() !== "admin" && loginInput) {
//     alert("Wrong Login");
//   }
// } else {
//   alert("Cancelled");
// }

//* Тернарний оператор

//TODO: 4 ===================================
// Перевірити, чи є введене користувачем число парним чи непарним, і вивести відповідне повідомлення. Використай promt і виведи повідомлення в alert. (використати тернарний оператор)

//  let userNumber = 12;
// let result = userNumber % 2 === 0 ? `parne number` : `neparne number`
// console.log(result)

// const userNum = prompt(`enter number`);
// if(userNum % 2 === 0){
//     console.log(`parne number`)
// }else if(userNum % 1 === 0)
//     {console.log(`neparne number`)
// }

//TODO: 5 ===================================
// Перепишіть if..else на тернарний оператор, за допомогою декількох операторів '?'.

// const login = 'Директор';

// if (login === 'Співробітник') {
//   message = 'Привіт';
// } else if (login == 'Директор') {
//   message = 'Вітаю';
// } else if (login == '') {
//   message = 'Немає логіну';
// } else {
//   message = '';
// }

// console.log(message);

// let result = login === `Директор` ? `hello manedger` : `hello user`;
// console.log(result)

//* Цикл while and do while
// TODO: 6 ===================================
// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо відвідувач ввів інше число - попросити
// ввести ще раз і так далі.
// Цикл має питати число, поки відвідувач не
// введе число більше 100, або натисне кнопку
// скасування в prompt



// let number = prompt(`enter your number`)
// if(number <= 100){
//     console.log(`enter yuor number beefor 100`)
// }else if(number >=100){
//     console.log(`hello`)
// }

// let result = number >= 100 ? `hello` : `user`
// console.log(result)

// let number;
// do {
//   number = prompt('Enter a number bigger than 100');
// } while (number < 100);

// let number = prompt('Enter a number bigger than 100');

// while (number <= 100) {
//   number = prompt('Enter a number bigger than 100');
// }
// alert('Thank you!');

//TODO: 7 ===================================
// При завантаженні сторінки користувачеві пропонується
// в prompt ввести число. Введення додається до значення
// змінної total.
// Операція введення числа триває до того часу,
// поки користувач не натисне кнопку Cancel в prompt.
// Після того, як користувач припинив введення натиснувши на
// кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
// Робити перевірку,що користувач ввів саме число,
// а не довільний набір символів, не потрібно.

// alert(`Загальна сума введених чисел дорівнює ${total}.`);

// * Цикл for директива break і continue
// TODO: 8 ===================================
// Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max

// let min = 1;
// let max = 20;
// for(let i = max; i > min; i --){
//     console.log(i)
// }
// let result = 0;
// for(let i = min; i < max; i ++){
//     if(i % 2 === 0){
// result += i
//     }
// }
// console.log(result)
// // const min = 1;
// // const max = 10;
// // let total = 0;
// // for (let i = max; i >= min; i--) {
// // // console.log(i);
// //  if (i % 2 !== 0) {
// //      continue;

// //  }
// //     total += i;
// // }
// // 
// console.log(`Сума усіх парних: ${total}`);
// const number = [1, 2, 3, 4, 6, 8];
// let result;
// for (let i = 0; i < number.length; i += 1) {
//     if (number[i] % 2 === 0) {
//         result += number[i];
    
        
//    }
// }

// console.log(result);

// //TODO: 9 ===================================
//  Виведіть методом console.log() зірочки від 1 до 6 штук у вигляді трикутника таким чино
// *
// **
// ***
// ****
// *****
// ******


// let star = '*';
// for (let i = 1; i < 7; i++) {
//   console.log(star);
//   star += '*';
// }


//TODO: 10 ===================================
//Якщо число ділитися на 3 повертати
//fizz якщо ділитися на 5 повертати buzz
//Якщо ділитися на 3 і на 5 повернути fizzbuzz

// const number = 15; 
// if(number % 3 === 0){
//     console.log(`fizz`);
// }else if(number % 5 === 0){
//     console.log(`buzz`)
// }else if(number % 3 === 0 && number % 5 === 0){
//     console.log(`fizzBizz`)
// }


const number = [ 1, 23, 43, 65, 75, 15, 9, 4, 6, 8]
// let result = number.filter(item=>{
//     if(item % 3 === 0 && item % 5 ===0){
//         console.log(item)
//     }else if(item % 5 === 0)
//         {console.log(item)
//     }else if(item % 3 === 0)
//     {console.log(item)
//     }
// })

// let max = number.reduce((item, acc)=> Math.max(item, acc))
// console.log(max)


// for(let i = 0; i < number.length; i ++)
// if(number % 3 === 0 && number % 5 ===0){
//     console.log(`fizzbuz`)
// }else if(number % 5 === 0)
//     {console.log(`buz`)
// }else if(number % 3 === 0)
// {console.log(`fizz`)
// }
// console.log(number)


//* Конструкція switch
//TODO: 11 ===================================
// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.


// const num = 2;
// switch(num) {
//     case 1: console.log(`Zima`); break;
//     case 2: console.log(`Vesna`); break;
//     case 3: console.log(`Leti`); break;
//     case 4: console.log(`Osen`)
//     default: console.log(`Osen`)
// }



//TODO: 12 ===================================
// Напишіть if..else, що відповідає наступному switch:

// const browser = 'Firefox';

// switch (browser) {
//   case 'Edge':
//     console.log("You've got the Edge!");
//     break;

//   case 'Chrome',`Opera`, `Safari`, `Firefox`:
 
//     console.log('Okay we support these browsers too');
//     break;

//   default:
//     console.log('We hope that this page looks ok!');
// }
//====================================================================

// const browser = `Opera`
// if(browser === `Chrome` || `Firefox` ||`Safari`){
//     console.log(`Okay we support these browsers too'`)
// }else if(browser === `Opera`){
//     console.log(`We hope that this page looks ok!`)
// }else {
//     console.log(`not servise`)
// }

// function getFone(result){
// result === `Opera`
// if(result === `Chrome`){
//     console.log(`Okay we support these browsers too'`)
// }else if(result === `Firefoxme`){
//     console.log(`Okay we support these browsers too'`)
// }else if(result === `Safari`){
//     console.log(`Okay we support these browsers too'`)
// }else if(result === `Opera`){
//     console.log(`We hope that this page looks ok!`)
// }
// }
// console.log(getFone(`Safari`))



