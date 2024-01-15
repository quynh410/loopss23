
let number = prompt("Nhập vào một số nguyên dương: ");


if (!isNaN(number) && number > 0) {
    for (let i = 1; i <= number; i++) {
        console.log(i);
      }
} else {
    console.log("Số nhập vào không hợp lệ.");
}


