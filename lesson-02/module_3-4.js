// ! Масиви цикли for і for of
//TODO:=========task-01=================
// Створіть масив styles з елементами «Джаз» та «Блюз».
// Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
// Видалить перший елемент масиву і виведіть його в консоль.
// Вставте «Реп» і «Реггі» на початок масиву.

// const styles = [`Djaz`, `Bluz`];
// styles.push(`Rock-and-Roll`);
// styles[1] = `Clasik`;
// console.log(styles.shift());
// styles.unshift(`Rap`, `Reggi`)
// console.log(styles)

 
//  styles.push(`Rook`)
//  console.log(styles)
// //  styles[1] = `Klasuk`
// const index = styles.indexOf(`Bluz`)
// // console.log(styles[index] = `Klasuk`)
// //  console.log(styles)
// //  console.log(styles.shift())
//  styles.unshift(`Reggi`, `Rap`)
//  console.log(styles)
 
//  console.log(styles)
// console.log(index)


//TODO:=========task-02=================
//Перетворити рядок, що містить слова, розділені комами, в масив слів і вивести кожне слово в окремому рядку.

// const arr = [`Oleg`, `Ruslan`, `Roma`, `igor`];
// let result = arr.join(` `);
// console.log(result)
// arr.forEach((name) => {
//   console.log(name)
// })
// console.log(arr);


// const str = 'JavaScript, HTML, CSS, React';
// const arr = str.split(`, `)
// console.log(arr)
// for(const item of arr){
//     console.log(item)
// }




//TODO:=========task-03=================
// Знайти кількість слів у рядку, використовуючи методи масивів та цикл for...of.

// const message = 'JavaScript is a popular programming language.';

// let arr = message.split(` `);
// let result = 0;
// for(const word of arr){
//   result += 1
// }

// console.log(result)

// const item = message.split(``)
// let result = 0
// for(const word of item){
//     result += 1
// }
// console.log(result)



// function amountWord(str) {
//     const item = str.split(``)
// let result = 0
// for(const word of item){
//     result += 1
// }
// return result
// }
// console.log(amountWord(`message`))




//TODO:=========task-04=================
// Об'єднати масив слів в рядок, розділений комами та пробілами.
// const words = ['JavaScript', 'HTML', 'CSS', 'React'];
// let result = words.join(` `);
// console.log(result)

// const item = words.join(` ,`)
// console.log(item)


//TODO:=========task-05=================
// Знайти всі елементи масиву, що містять задану підстроку, та об'єднати їх у новий масив, після чого вивести у консоль лог повідомлення "Масив елементів, що містять підстроку substring: ..." .Результат повинен бути розділений комами та пробілами.(використати indexOf)

// const stringArray = ['JavaScript', 'HTML', 'CSS', 'React'];
// const substring = 'S';
// console.log(
//   `Масив елементів, що містять підстроку ${substring} : ${joinedArray}`
// );

// const newArray = []
// for(const word of stringArray) {
//     if(word.includes(substring) !== -1){
//         newArray.push(word)
//     }
// }
// const joineArray = newArray.join(`, `)
// console.log(newArray)
//TODO:=========task-06=================
// Перевірити, чи містить масив заданий елемент. Якщо містить, видалити його, якщо ні - додати в кінець масиву.
//  const array = ['JavaScript', 'HTML', 'CSS', 'SS'];
//  const elem = 'SS';

// if(array.includes(elem)){
//   const index = array.includes(elem);
//   array.splice(index, 1)
// }else {
//   array.push(elem);
// }

// console.log(array)




//TODO:============task-07==============
// Напишіть функцію min(a, b), яка повертає
// менше з чисел a, b
// Потрібно додати перевірку, що функція отримує числа


// function min(a, b){
//     if(typeof a !== `number` || typeof b !== `number`){
//         return `arg is not a number`
//     }
//     if(a<b){
//        return a
//     }else{ 
//         return b
//     }
// }
// console.log(min(10,45))

//TODO:=============task-08=================
// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// function sumAdjacentNumbers (someArr){
//     let result = []
//     for( let i = 0; i < someArr .length -1; i++){
// result.push(someArr[i] + someArr[i + 1] )
//     }
//     return result
// }

// const result = sumAdjacentNumbers(someArr);
// console.log(result); // [33, 45, 39, 17, 25, 27, 29]


//TODO:=========task-09=================
//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа. Array.from()

//  function caclculateAverage(a, b, c , d){
//     if(typeof a !== `number` || typeof b !== `number` || typeof c !== `number` || typeof d !== `number` ){
//         return `arg is not a number`
//     } 
//     return a + b + c + d / 4
//  }

// console.log(caclculateAverage(10, 10, 20, 200));

//TODO:=============task-10=================
// Написати функцію, яка приймає рядок і повертає кількість голосних літер у цьому рядку. `Містить ${count} голосних`

// const str = "This is a new line ";
// const vowels = ["a", "e", "i", "o", "u"];

// function countVowels (str){
//     const vowels = ["a", "e", "i", "o", "u"];
//     let count = 0;
//     for(let char of str.toLowerCase()){
//         if(vowels.includes(char)){
//             count ++
//         }
//     }
   
//     return `Містить ${count} голосних`
// }

// console.log(countVowels(str));

//TODO:=========task-11=================
// Знайти перший парний елемент масиву, який більший за 10, використовуючи цикл з оператором break та continue.
// const numbers = [5, 11, 21, 8, 7, 15, 11, 11];
// let result;
// for(let i = 0; i < numbers.length; i ++){
//     if(numbers[i] <= 10){
//         continue;
//     }
//     if(numbers[i] % 2 === 0){
//         break;
// }
// }
// console.log(result)


// let result = numbers.find((item)=>{
//     return item % 2 === 0 && item > 10
//   })
//   console.log(result)
// console.log(getOddNumbers(numbers));

//!  Літерал об'єкта
//!  Властвості та методи об'єкта
//TODO:============task-01=========================
// Створіть об'єкт "людина" з властивостями "ім'я", "хобі" і "вік". Напишіть метод "greet", який буде виводити на екран привітання з ім'ям людини.
// Послідовно:
// 1 додати поле mood зі значенням 'happy'
// 2 замінити hobby на 'skydiving'

// const human = {
//     name: `Oleg`,
//     hobby: `sport`,
//     age: 37,
//     greet (){
//     console.log(`this name`)
//     }
// }

// human.mood = `happy`
// human.hobby = `skydiving`
// console.log(human)


// const human = {
//     userName: `Ruslan`,
//     hobby: `sport`,
//     age: 37,
//     greet (){
//         console.log(this.userName)
//     }
// }
//  human.mood = `happy`
//  human.hobby = `skydiving`
//  console.log(human)
//TODO:============task-02==============================================
// Створіть об'єкт "прямокутник" з властивостями "довжина" та "ширина". Напишіть метод "calculateArea", який буде обчислювати площу прямокутника на основі його довжини та ширини.

// const sguar = {
//     with: 5,
//     heght: 10,
//     calculateArea(){
//         return this.heght * this.with
//     }
// }
// console.log(sguar.calculateArea())

// function sguar(a, b){
//     return a * b
// }
// console.log(sguar(2, 4))

// const square = {
//     widtn: 10,
//     length: 20,
//     calculateArea(){
//         return this.widtn * this.length
//     }
// }
// console.log(square.calculateArea());


//TODO:============task-03==============================================
// Створіть об'єкт "магазин" зі списком товарів. Напишіть метод "hasProduct", який буде перевіряти, чи є певний товар в наявності на складі магазину.

// const shop = {
//     frukt: [`aplle`,`poteiti`, `tomato`, `kivi`],
//     hasProduct(hasFrukt){
//         return this.frukt.includes(hasFrukt)
//     }
// }
// console.log(shop.hasProduct(`aplle`))


// const store = {
//     goods:["apple", "banan","kiwi","tomato"],
// hasProduct  (product){
// return this.goods.includes(product)
// }

// }
//  console.log(store.hasProduct('rucola'));

//TODO:============task-04==============================================
// 4. Створіть об'єкт "кошик" зі списком товарів та їх цін. Напишіть метод "calculateTotal", який буде обчислювати загальну суму товарів у кошику.


// const cart = {
//     goods:["apple", "banan","kiwi","tomato"],
//     price:[30,50,45,90],
//     calculateTotal (){
//         let total = 0;
//         for (const item  of this.price) {
//             total += item;
//         }
//         return total;
//     }

// }

//  console.log(cart.calculateTotal());

//! Перебір об'єктів: for...in і методи Object.keys|values|entries
//TODO:============task-05======================================================
// Потрібно написати функцію, яка приймає 2 параметри obj і key, яка буде перебирати об'єкт.
// Якщо об'єкт має такий ключ - поверне true
// Є 2 варіанти рішення, спочатку напишемо функцію, потім вирішимо простим способом


// const obj = {
//   name: 'Igor',
//   car: 'Mercedes',
//   carColor: 'black',
// };
// function getBool(obj, key) {
//   return Object.keys(obj).includes(key);
// }

// console.log(getBool(obj, 'car')); // true

// function getBool(obj, key) {
//   return key in obj;
// }

// console.log(getBool(obj, `age`)); // true

//TODO:============task-06======================================================
// У нас є об'єкт, у якому зберігатимуться зарплати
// нашої команди
// Напишіть код для сумування всіх зарплат і
// збережіть його результат у змінній sum.
// Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// let sum = 0;
// if (Object.values(salaries) !== 0) {
//   for (const item of Object.values(salaries)) {
//     sum += item;
//   }
// }

// console.log(sum);

//TODO:============task-07======================================================
// Напишіть функцію, яка приймає як параметр об'єкт
// та формує об'єкти у новому масиві у форматі [key, value]

// const user = {
//   name: 'John',
//   surName: 'Stones',
//   age: 20,
//   hobby: 'tenis',
//   haveCar: true,
//   merried: false,
// };
// function changeObject(obj) {
//   console.log(Object.entries(obj));
// }
// changeObject(user);

//TODO:============task-08======================================================
// Створіть функцію multiplyNumeric(obj),
// яка множить всі числові властивості об'єкта obj на 2.

// до виклику функції
// let menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu',
// };
// function multiplyNumeric(obj){
//     for(let key in obj){
//         if(typeof obj [key] === `number`){
//             obj[key] *= 2
//         }
//     }
// }

// multiplyNumeric(menu);

// console.log(menu);

// function multiplyNumeric(obj) {
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key) && !isNaN(obj[key])) {
//       obj[key] *= 2;
//     }
//   }
//   return obj;
// }

// console.log(multiplyNumeric(menu));


// після виклику функції
// menu = {
//   width: 400,
//   height: 600,
//   title: 'My menu'
// };

//TODO:==========task-09=============
// Напишіть функцію updateObject, яка приймає об'єкт та повертає
// новий об'єкт без зазначених параметрів
// Очікуваний результат ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}



// function updateObject(obj, ...removeKeys) {
//   let newObj = {...obj};
//   for (const item of removeKeys) {
//     delete newObj[item];
//   }
//   return newObj;
// }

// console.log(updateObject({ a: 1, b: 2, c: 3 }, 'b', 'a')); // {c: 3}

//! Робота з масивом об'єктів
//TODO:============task-10==============================
// Створіть масив об'єктів "студентів" з властивостями "ім'я", "прізвище" та "середній бал".
// Напишіть функцію "findTopStudent", яка буде повертати об'єкт студента з найвищим середнім балом.

// const students = [
//   { name: 'Андрій', surname: 'Іванов', grade: 4.5 },
//   { name: 'Олександр', surname: 'Петров', grade: 3.9 },
//   { name: 'Марія', surname: 'Сидорова', grade: 4.8 },
//   { name: 'Ірина', surname: 'Федорова', grade: 4.2 },
// ];
// students.forEach(student => {
//   console.log(student.name)
// })


// students.forEach(student => {
//   console.log(student.name)
// })
// students.forEach(student => {
//   console.log(student.surname, student.name)
// })


// function findTopStudent(students) {
//     let topStudent = students.reduce((item, acc) => (item.grade > acc.grade) ? item : acc);
//     return topStudent;
//   }
  
//   console.log(findTopStudent(students))

//  let result = students.sort((x1, x2) => {
//     return x1.grade - x2.grade
//  })
//  console.log(result)
  
// let rusult = students.some((item) => {
//     return item.grade > 5
// })
 
// console.log(rusult)

//TODO:============task-11==================================================
// Створіть масив об'єктів "книг" з властивостями "назва", "автор" та "рік видання". Напишіть функцію "findBooksByAuthor",
//яка буде повертати масив книг відповідного автора.

// const books = [
//   { title: 'Війна і мир', author: 'Лев Толстой', year: 1869 },
//   {
//     title: 'Преступление и наказание',
//     author: 'Федор Достоевский',
//     year: 1866,
//   },
//   {
//     title: 'Гаррі Поттер і філософський камінь',
//     author: 'Джоан Роулінг',
//     year: 1997,
//   },
//   { title: 'Мастер и Маргарита', author: 'Михаил Булгаков', year: 1967 },
//   { title: '1984', author: 'Джордж Оруелл', year: 1949 },
// ];

// const arr = findBooksByAuthor(books, 'Джоан Роулінг');
// console.log(arr);

//TODO:============task-12=========================
// Припустимо, є два масиви об'єктів:
// Необхідно створити новий масив об'єктів, що буде містити всі об'єкти з обох масивів, але без дублів.
// Тобто об'єкти з однаковим значенням ключа "id" повинні бути об'єднані в один об'єкт.


// const arr1 = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Mary' },
//   { id: 3, name: 'Bob' },
// ];
// const arr2 = [
//   { id: 2, name: 'Mary' },
//   { id: 4, name: 'Jane' },
//   { id: 5, name: 'Tom' },
// ];

// console.log((arr2, arr1));

// const x = () => {}


// const y = (a, s, d) => a * s + d

// console.log(y(2, 2,16))
