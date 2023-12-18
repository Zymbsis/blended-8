//! Callback
//TODO:============task-01=========================
// Напишіть функцію, яка приймає два числа і колбек-функцію. Функція повинна помножити числа між собою та передати результат дії до колбек-функції. Колбек-функція повинна, у разі, якщо, це число є парним - помножити це число на себе, якщо ні - взяти квадратний корінь з цього числа, та вивести результат у консоль лог.
// function performOperation(a, b, callback) {
//   return callback(a * b);
// }
// function callbackFunction(num) {
//   return num % 2 === 0 ? Math.pow(num, 2) : Math.sqrt(num);
// }
// const result = performOperation(3, 3, callbackFunction);

// console.log(result);

function getNumer(a, b, callback){
  return callback (a * b)
}

function callbackFunction (sum) {
if(sum % 2 ===0){
  return sum **2
}else if( sum % 2 !== 0) {
  return Math.pow(sum, 2)
}
}
const result = getNumer(6, 9, callbackFunction)
console.log(result)
//TODO:============task-02=========================
// Напишіть функцію, яка приймає масив і колбек-функцію. Функція повинна повернути перший елемент масиву,
//який задовольняє умову, визначену в колбек - функції. Якщо такого елементу немає, функція
// повинна повернути null. Також необхідно написати 2 різні колбеки. При використанні першого колбеку має
// повертатись перше парне число. При використанні другого - має повертатись перше слово у масиві, що починається з літери
// "O" у будь - якому реєстрі.
// function findElement(arr, callback) {
//     let result = null;
//     for (const item of arr) {
//         if (callback(item) && result === null){
//             result = item;
//        }
//     }
//     return result;
// }
// function isEven(num) {
//     return num % 2 === 0;
// }
// function startWithO(str) {
//    return str.toLowerCase().startsWith('o')
// }
// const numbers = [1, 3, 5, 7, 9, 20];
// const words = ['apple', 'banana', 'orange', 'pear'];

// const res = findElement(numbers, isEven);
// console.log(res);
// const res1 = findElement(words, startWithO);
// console.log(res1);

//! Array methods
//TODO:=========task-01=================
// // Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить квадрати кожного елементу вхідного масиву. Очікуваний результат: [1, 4, 9, 16, 25].
// const getNewArray = (arr) => arr.map((elem) => elem ** 2);
// const res = getNewArray([1, 2, 3, 4, 5]);
// console.log(res);

//TODO:=========task-02=================
// Дано масив об'єктів {id: 1, values: [1, 2, 3]}, {id: 2, values: [4, 5, 6]}, {id: 3, values: [7, 8, 9]}. Створіть новий масив, що містить всі значення з масивів values кожного об'єкту, збережених в одному масиві. Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const flatArr = (arr) => arr.flatMap((elem) => elem.values);
// const res = flatArr(data);
// console.log(res);

//TODO:=========task-03=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Перевірте, чи є хоча б один об'єкт з віком менше 20 років. Очікуваний результат: true.

// const people = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const checkAge = (arr) => arr.some((elem) => elem.age > 20);
// const res = checkAge(people);
// console.log(res);

//TODO:=========task-04=================
//  Дано масив чисел [2, 4, 6, 8, 10]. Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const checkEvenArray = (arr) => arr.every((elem) => elem % 2 === 0);

// const res = checkEvenArray(numbers);
// console.log(res);

//TODO:=========task-05=================
// Дано масив чисел [1, 2, 3, 4, 5]. Знайдіть перший елемент, більший за 3. Очікуваний результат: 4.

// const numbers = [1, 2, 3, 4, 5];

// const getNumber = (arr) => arr.find((elem) => elem > 3);

// const res = getNumber(numbers);
// console.log(res);

//TODO:=========task-06=================
// Відсортуйте масив чисел [4, 2, 5, 1, 3] у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 200, 5, 1000, 3];

// const sortedArray = (arr) => arr.toSorted((a, b) => b - a);

// const res = sortedArray(numbersArray);
// console.log(res);

//TODO:===============task-07===============================
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"] у порядку алфавіту. Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ["banana", "Orange", "apple", "oil", "pear"];

// const sortedArray = (arr) => arr.toSorted((a, b) => a.localeCompare(b));

// const res = sortedArray(stringArray);
// console.log(res);

//TODO:===============task-8===============================
//  Відсортуйте масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19} за віком у порядку зростання. Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const ageSortedUsers = (arr) => arr.toSorted((a, b) => a.age - b.age);
// const ageSortedUsers = (arr) => [...arr].sort((a, b) => a.age - b.age);

// const res = ageSortedUsers(users);
// console.log(res);

//TODO:=========task-09=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Створіть новий масив, що містить тільки об'єкти, в яких вік більше 20 років. Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const getAge = (arr) => arr.filter((elem) => elem.age > 20);
// const res = getAge(user);
// console.log(res);

//TODO:=========task-10=================
// Дано масив чисел [1, 2, 3, 4, 5]. Застосуйте метод reduce для обчислення суми елементів масиву

// const numbers = [1, 2, 3, 4, 5];

// const sum = (arr) =>
//   arr.reduce((acc, elem) => {
//     if (elem % 2 === 0) {
//       acc += elem;
//     }
//     return acc;
//   }, 0);

// const res = sum(numbers);
// console.log(res);

//TODO:=========task-11=================
// У вас є масив чисел, і вам потрібно знайти середнє значення цих чисел. Напишіть функцію, яка приймає масив чисел і повертає середнє значення.

// const arr = [1, 2, 3, 4, 5];

// const averageValue = (arr) =>
//   arr.reduce((acc, elem) => acc + elem / arr.length, 0);
// const res = averageValue(arr);
// console.log(res);

// ! this
//TODO:=========task-01=================
// Створити об'єкт, який представляє користувача. У об'єкті повинні бути наступні поля: ім'я, прізвище, вік, email та метод, який виводить повну інформацію про користувача.
// console.log(this);

// window.console.log("Hello");

const user = {
  name: "Andrty",
  lastName: "Tronovis",
  age: 40,
  email: "fgr@mail.com",

  getInfo() {
    console.log(this);
  },
};

// user.getInfo();

// const newUser = Object.create(user);
// newUser.name = "Roma";

// console.log(newUser);

// newUser.getInfo();

//TODO:=========task-02=================
// Для обьекта "user", написати метод для зміни ім'я або прізвища(змінити можна лише якесь з цих полів, змінювати або додавати нові потрібно заборонити) з перевіркою на валідність даних(Перша літера має бути у верхньому реєстрі, довжина слова не менше 3 літер)

// user.modify('firstName', 'Vlad');

//TODO:=========task-03=================
// Створити глобальну функцію для обьекта "user", що може додавати властивості об'єкту, в контексті якого вона буде викликана. Додати цю функцію як метод об'єкта user, та додати за допомогою неї властивість friends із значенням:

// user.addProperty('friends', [
//   {
//     firstName: 'Mary',
//     lastName: 'Smith',
//     age: 32,
//     email: 'marysmith@hotmail.com',
//   },
//   {
//     firstName: 'Alex',
//     lastName: 'Johnson',
//     age: 45,
//     email: 'alex.johnson@yahoo.com',
//   },
//   {
//     firstName: 'Emily',
//     lastName: 'Davis',
//     age: 19,
//     email: 'emilydavis@gmail.com',
//   },
// ]);

// console.log(user);

//TODO:=========task-04=================
//  Викликати метод user.info() таким чином, щоб він вивів результатом  ({name: 'Bob', lactName: 'Lasso',age: 50, email: 'BodLasso@gmail.com'})

// const obj = {
//   name: "Bob",
//   lastName: "Lasso",
//   age: 50,
//   email: "BodLasso@gmail.com",
// };

// user.getInfo.call(obj);

//TODO:=========task-05=================
//  Викличте функцію showFullName у контексті об'єкта user

//TODO:=========task-06=================
// Виправте помилки, щоб код працював

// const product = {
//   price: 5000,

//   showPrice() {
//     console.log(this.price);
//   },
// };

// function callAction(callback) {
//   callback();
// }

// callAction(product.showPrice.bind(product));

//! class
//TODO:=================task-01=============================
// Завдання полягає у створенні програми, що дозволяє керувати замовленнями в ресторані.

// #### Для цього потрібно реалізувати клас `Order`, який містить такі приватні властивості:
// - `tableNumber` - номер столика, де зроблено замовлення
// - `items` - масив предметів замовлення, де кожен предмет містить ім'я (name) та ціну (price)
// - `isPaid` - позначає, чи оплачене замовлення (default = false)

// ##### Для класу Order потрібно реалізувати такі методи:
// - `calculateTotal`() - повертає загальну суму замовлення.
// - `markAsPaid`() - позначає замовлення як оплачене
// - `addItem`() - який додає предмет замовлення до масиву "items"
// - `removeItem`() - який видаляє предмет замовленя з масиву "items"
// ##### Додатково можна створити гетери та сетери для отримання номера столика, статусу замовлення та самого замовлення

// #### Також потрібно створити клас `MenuItem`, який містить властивості `name` та `price` для предметів замовлення.

// class Order {
//   #tableNumber;
//   #items;
//   #isPaid;

//   constructor(tableNumber) {
//     this.#tableNumber = tableNumber;
//     this.#items = [];
//     this.#isPaid = false;
//   }

//   calculateTotal() {
//     let total = 0;
//     for (let item of this.#items) {
//       total += item.price;
//     }
//     return total;
//   }

//   markAsPaid() {
//     this.#isPaid = true;
//   }

//   get tableNumber() {
//     return this.#tableNumber;
//   }

//   set tableNumber(tableNumber) {
//     this.#tableNumber = tableNumber;
//   }

//   get isPaid() {
//     return this.#isPaid;
//   }

//   addItem(item) {
//     this.#items.push(item);
//   }

//   removeItem(item) {
//     const index = this.#items.indexOf(item);
//     if (index !== -1) {
//       this.#items.splice(index, 1);
//     }
//   }
// }

// class MenuItem {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
// }
// // Create menu items
// const item1 = new MenuItem("Burger", 10);
// const item2 = new MenuItem("Fries", 5);
// const item3 = new MenuItem("Drink", 2);

// // Create an order
// const order = new Order(1);

// // Add items to the order
// order.addItem(item1);
// order.addItem(item2);
// order.addItem(item3);

// order.removeItem(item2);

// // Calculate the total and mark the order as paid
// const total = order.calculateTotal();
// order.markAsPaid();

// console.log(`Order for table ${order.tableNumber} - Total: $${total}`);
// console.log(`Is paid: ${order.isPaid}`);
