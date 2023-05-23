let element = prompt ("Введіть кількість чисел:");
let array = []

for (let i =0; i<=element; i++) {
  array[i] =prompt("Введіть число:")
}

for(let i = 0; i <=element; i++) {
  document.write (array[i] + "<br>");
}