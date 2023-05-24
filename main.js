let numberOfElement = prompt ("Введіть кількість елементів в масиві:");
let array = []

for (let i =0; i<=numberOfElement; i++) {
  array[i] =prompt("Введіть значення елемента:")
}

for(let i = 0; i <=numberOfElement; i++) {
  document.write (array[i] + "<br>");
}

array.sort(function(a, b){return a-b});
document.write(array + "<br>");

array.splice(2, 3); // Починаючи з індексу 2 видалить  3 елементи

document.write(array);
