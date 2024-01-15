
let  number = +prompt("Nhập vào một số nguyên dương: ");


let factorial = 1;
for (let i = 1; i <= number; i++) {
  factorial *= i;
}


console.log("Giai thừa của " + number + " là: " + factorial);