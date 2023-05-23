let array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] 
console. log (array)

let minimum = Math.min(...array);//знаходимо мінімальне значення 
let positionMinimum = array.indexOf(minimum); // знаходимо його індекс (можна +1 якщо рахуваты з першого числа)

console.log(minimum, positionMinimum);

let maximum = Math.max(...array);
let positionMaximum = array.indexOf(maximum)
console.log("Найбільше значення : " + maximum, "та його порядковий номер: " + positionMaximum )

let count = 0; // змінна для підрахунку з значенням 0

for (let i = 0; i < array.length; i++) {//i < array.length для того, щоб цикл повторювався доти доки і менше довжини масиву. Як тільки => цикл завершуються. i++ = i+1 після кожної ітерації
  if (array[i] < 0) {
    count++; // збільшує на 1 змінну якщо є відємний елемент
  }
}

console.log("Кількість негативних елементів масиву:", count);

//Знайти кількість непарних позитивних елементів.
let countOfOdd = 0; 

for (let i = 0; i < array.length; i++) { 
  if (array[i] > 0 && array[i] % 2 !== 0) {
    countOfOdd++; 
  }
}
console.log("Кількість непарних позитивних елементів:", countOfOdd);


//Знайти кількість парних позитивних елементів

 let countOfEvenPosit = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] > 0 && array[i] % 2 === 0) {
    countOfEvenPosit++;
  }
}

console.log("Кількість парних позитивних елементів:", countOfEvenPosit); 

//Знайти суму парних позитивних елементів

let sumEvenPos = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] > 0 && array[i] % 2 === 0) {
    sumEvenPos += array[i];
}
}
console.log("Сума парних позитивних елементів:", sumEvenPos); 

//Знайти суму непарних позитивних елементів.
let summOddPositive = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] > 0 && array[i] % 2 !== 0) {
    summOddPositive += array[i];

  }
}
console.log("Сума не парних позитивних елементів:", summOddPositive)

//Знайти добуток позитивних елементів.


let multiplyPositive = 1;
for (let i = 0; i < array.length; i++) {
  if (array[i] > 0) {
    multiplyPositive = multiplyPositive * array[i]

  }
}
console.log("Добуток:", multiplyPositive) 

//Знайти найбільший серед елементів масиву, ост альні обнулити.

let maximum1 = Math.max(...array);
let positionMaximum1 = array.indexOf(maximum)

for (let i = 0; i < array.length; i++) {
  if (i !== positionMaximum1) { //!== перевіряє на не рівність
    array[i] = 0;
  }
}

console.log(array);

