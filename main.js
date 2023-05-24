let array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] 
document.write(array + "<br>");

//Знайти мінімальний елемент масиву та його порядковий номер.

let minimum = Math.min(...array);//знаходимо мінімальне значення 
let positionMinimum = array.indexOf(minimum); // знаходимо його індекс (можна +1 якщо рахуваты з першого числа)

document.write("Мінімальний елемент масиву: " + minimum, " та його порядковий номер: " + positionMinimum + "<br>");;


//Знайти максимальний елемент масиву та його порядковий номер.

let maximum = Math.max(...array);
let positionMaximum = array.indexOf(maximum)
document.write("Максимальний елемент масиву : " + maximum, " та його порядковий номер: " + positionMaximum + "<br>" )


//Визначити кількість негативних елементів.
let count = 0; // змінна для підрахунку з значенням 0

for (let i = 0; i < array.length; i++) {//i < array.length для того, щоб цикл повторювався доти доки і менше довжини масиву. Як тільки => цикл завершуються. i++ = i+1 після кожної ітерації
  if (array[i] < 0) {
    count++; // збільшує на 1 змінну якщо є відємний елемент
  }
}

document.write("Кількість негативних елементів масиву: ", count + "<br>");

//Знайти кількість непарних позитивних елементів.

let countOfOdd = 0; 

for (let i = 0; i < array.length; i++) { 
  if (array[i] > 0 && array[i] % 2 !== 0) {
    countOfOdd++; 
  }
}
document.write("Кількість непарних позитивних елементів: ", countOfOdd + "<br>");


//Знайти кількість парних позитивних елементів

 let countOfEvenPosit = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] > 0 && array[i] % 2 === 0) {
    countOfEvenPosit++;
  }
}

document.write("Кількість парних позитивних елементів: ", countOfEvenPosit + "<br>"); 

//Знайти суму парних позитивних елементів

let sumEvenPos = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] > 0 && array[i] % 2 === 0) {
    sumEvenPos += array[i];
}
}
document.write("Сума парних позитивних елементів: ", sumEvenPos + "<br>"); 

//Знайти суму непарних позитивних елементів.
let summOddPositive = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] > 0 && array[i] % 2 !== 0) {
    summOddPositive += array[i];

  }
}
document.write("Сума не парних позитивних елементів: ", summOddPositive + "<br>")

//Знайти добуток позитивних елементів.


let multiplyPositive = 1;
for (let i = 0; i < array.length; i++) {
  if (array[i] > 0) {
    multiplyPositive = multiplyPositive * array[i]

  }
}
document.write("Добуток: ", multiplyPositive + "<br>") 

//Знайти найбільший серед елементів масиву, ост альні обнулити.

let maximum1 = Math.max(...array);
let positionMaximum1 = array.indexOf(maximum)

for (let i = 0; i < array.length; i++) {
  if (i !== positionMaximum1) { //!== перевіряє на не рівність
    array[i] = 0;
  }
}

document.write(array + "<br>");

