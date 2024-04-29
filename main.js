
// 1Miosl

// let A = 20;
// let B = 3;

// let startingPoint = 0;

// while (startingPoint <= A - B) {
//     console.log(startingPoint);
//     startingPoint += B;
// }


// // 2Mioosl
// let A = 20;
// let B = 3;

// let maxStartingPoints = 0;
// let remainingLength = A;

// while (remainingLength >= B) {
//   maxStartingPoints++;
//   remainingLength -= B;
// }

// console.log(maxStartingPoints);



// 3Misol

// let N = 27;
// let K = 4;

// let qoldiq = 0;
// let butunQism = 0;

// while (N >= K) {
//   N -= K;
//   butunQism++;
// }

// qoldiq = N;

// console.log(`N sonining K soniga bo'lgandagi qoldiq: ${qoldiq}`);
// console.log(`N sonining K soniga bo'lgandagi butun qismi: ${butunQism}`);



// // 4Misol
// let n = 27;

// let isDarajasi = false;
// let number = 1;

// while (number <= n) {
//   if (number === n) {
//     isDarajasi = true;
//     break;
//   }
//   number *= 3;
// }

// if (isDarajasi) {
//   console.log("3 ning darajasi");
// } else {
//   console.log("3 ning darajasi emas");
// }


// // 5Misol
// let n = 16;

// let k = 2;
// let result = Math.pow(k, 2);

// while (result < n) {
//   k++;
//   result = Math.pow(k, 2);
// }

// if (result === n) {
//   console.log(`n = ${n}, k = ${k}`);
// } else {
//   console.log(`n = ${n} soni 2 ning darajasi emas.`);
// }




// // 17Misol
// const n = 27;
// const m = 4;

// let butunQism = 0;
// let qoldiq = n;

// while (qoldiq >= m) {
//   qoldiq -= m;
//   butunQism++;
// }

// console.log(`n sonining m soniga bo'lgandagi butun qismi: ${butunQism}`);
// console.log(`n sonining m soniga bo'lgandagi qoldiq: ${qoldiq}`);



// // 18Misol
// const n = 12345;
// let reversed = 0;

// let temp = n;
// while (temp > 0) {
//     const digit = temp % 10;
//     reversed = (reversed * 10) + digit;
//     temp = (temp - digit) / 10;
// }

// console.log(`Teskari tartibda: ${reversed}`);




// // 19Misol
// const n = 12345;
// let sum = 0;
// let count = 0;

// let temp = n;
// while (temp > 0) {
//   const digit = temp % 10;
//   sum += digit;
//   count++;
//   temp = Math.floor(temp / 10);
// }

// console.log(`Raqamlar yig'indisi: ${sum}`);
// console.log(`Raqamlar soni: ${count}`);


// 20Misol
// let n = 123456;
// let hasTwo = false;

// let temp = n;
// while (temp > 0) {
//   const digit = temp % 10;
//   if (digit === 2) {
//     hasTwo = true;
//     break;
//   }
//   temp = Math.floor(temp / 10);
// }

// if (hasTwo) {
//   console.log("Berilgan sonning ichida 2 raqami bor");
// } else {
//   console.log("Berilgan sonning ichida 2 raqami yo'q");
// }


// 21Misol
// let n = 123456;
// let hasOddDigit = false;

// let temp = n;
// while (temp > 0) {
//   const digit = temp % 10;
//   if (digit % 2 !== 0) {
//     hasOddDigit = true;
//     break;
//   }
//   temp = Math.floor(temp / 10);
// }

// if (hasOddDigit) {
//   console.log("Berilgan sonning ichida toq raqamlar bor");
// } else {
//   console.log("Berilgan sonning ichida toq raqamlar yo'q");
// }





// // 22 misol
// let n = 17;
// let isPrime = true;

// if (n === 1) {
//   isPrime = false;
// } else {
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
// }

// if (isPrime) {
//   console.log(`${n} tub son`);
// } else {
//   console.log(`${n} tub son emas`);
// }