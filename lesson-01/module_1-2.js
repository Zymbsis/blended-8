//* Розгалуження: if, if...else, else...if
//TODO: 1 ===================================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

// const myStr = 'abcd';
// if (myStr.toLowerCase().startsWith('a')) {
//   console.log('yes');
// } else {
//   console.log('no');
// }
// const result = myStr.toLowerCase().startsWith('a') ? 'yes' : 'no';
// console.log(myStr.toLowerCase().startsWith('a'));
// console.log(result);

//TODO: 2 ===================================
// У змінній min лежить число від 0 до 60. Визначте у котру чверть години
// Попадає це число (у першу, другу, третю або четверту). Виведіть значення у консоль, або alert

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

// const loginInput = prompt('Введіть свій логін');

//* Тернарний оператор

//TODO: 4 ===================================
// Перевірити, чи є введене користувачем число парним чи непарним, і вивести відповідне повідомлення. Використай promt і виведи повідомлення в alert. (використати тернарний оператор)

//TODO: 5 ===================================
// Перепишіть if..else на тернарний оператор, за допомогою декількох операторів '?'.

// const login = 'Директор';
// let message = '';

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

//* Цикл while and do while
// TODO: 6 ===================================
// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо відвідувач ввів інше число - попросити
// ввести ще раз і так далі.
// Цикл має питати число, поки відвідувач не
// введе число більше 100, або натисне кнопку
// скасування в prompt

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

//* Цикл for директива break і continue
//TODO: 8 ===================================
//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max

// console.log(`Сума усіх парних: ${total}`);

//TODO: 9 ===================================
//  Виведіть методом console.log() зірочки від 1 до 7 штук у вигляді трикутника таким чино
// *
// **
// ***
// ****
// *******

//TODO: 10 ===================================
//Якщо число ділитися на 3 повертати
//fizz якщо ділитися на 5 повертати buzz
//Якщо ділитися на 3 і на 5 повернути fizzbuzz

//* Конструкція switch
//TODO: 11 ===================================
// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

//TODO: 12 ===================================
// Напишіть if..else, що відповідає наступному switch:

// const browser = 'Opera';

// switch (browser) {
//   case 'Edge':
//     console.log("You've got the Edge!");
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     console.log('Okay we support these browsers too');
//     break;

//   default:
//     console.log('We hope that this page looks ok!');
// }
