let a = +prompt("Nhập vào số nguyên dương a: ");
let b = +prompt("Nhập vào số nguyên dương b: ");

if (a <= 0 || b <= 0) {
  console.log("Số nhập vào không hợp lệ.");
} else {
  console.log(`Các số chia hết cho ${b} trong khoảng từ 1 đến ${a} là:`);
  for (let i = 1; i <= a; i++) {
    if (i % b === 0) {
      console.log(i);
    }
  }
}