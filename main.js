
// 1Miosl

// const hello = () => {

//     let A = 20;
//     let B = 3;
//     let startingPoint = 0;

//     while (startingPoint <= A - B) {

//         startingPoint += B;
//     }
//     return startingPoint;

// }
// hello()





// // // 2Mioosl

// function findMaxStartingPoints(A, B) {
//     let maxStartingPoints = 0;
//     let remainingLength = A;

//     while (remainingLength >= B) {
//       maxStartingPoints++;
//       remainingLength -= B;
//     }

//     return maxStartingPoints;
//   }

//   let A = 20;
//   let B = 3;

//   let result = findMaxStartingPoints(A, B);
//   console.log(result);


// // 3Misol
// function findQuotientAndRemainder(N, K) {
//     let quotient = 0;
//     let remainder = 0;

//     while (N >= K) {
//       N -= K;
//       quotient++;
//     }

//     remainder = N;

//     return {
//       quotient: quotient,
//       remainder: remainder
//     };
//   }

//   let N = 27;
//   let K = 4;

//   let result = findQuotientAndRemainder(N, K);

//   console.log(`N sonining K soniga bo'lgandagi qoldiq: ${result.remainder}`);
//   console.log(`N sonining K soniga bo'lgandagi butun qismi: ${result.quotient}`);


// // // 4Misol
// function checkPowerOfThree(n) {
//     let isPowerOfThree = false;
//     let number = 1;

//     while (number <= n) {
//       if (number === n) {
//         isPowerOfThree = true;
//         break;
//       }
//       number *= 3;
//     }

//     if (isPowerOfThree) {
//       console.log("3 ning darajasi");
//     } else {
//       console.log("3 ning darajasi emas");
//     }
//   }

//   let n = 27;
//   checkPowerOfThree(n);



// // // 5Misol
// function checkPowerOfTwo(n) {
//     let k = 2;
//     let result = Math.pow(k, 2);

//     while (result < n) {
//       k++;
//       result = Math.pow(k, 2);
//     }

//     if (result === n) {
//       console.log(`n = ${n}, k = ${k}`);
//     } else {
//       console.log(`n = ${n} soni 2 ning darajasi emas.`);
//     }
//   }

//   let n = 16;
//   checkPowerOfTwo(n);



// // // 17Misol
// function findQuotientAndRemainder(n, m) {
//     let quotient = 0;
//     let remainder = n;

//     while (remainder >= m) {
//       remainder -= m;
//       quotient++;
//     }

//     console.log(`n sonining m soniga bo'lgandagi butun qismi: ${quotient}`);
//     console.log(`n sonining m soniga bo'lgandagi qoldiq: ${remainder}`);
//   }

//   const n = 27;
//   const m = 4;

//   findQuotientAndRemainder(n, m);


// // // 18Misol
// function reverseNumber(n) {
//     let reversed = 0;
//     let temp = n;

//     while (temp > 0) {
//       const digit = temp % 10;
//       reversed = (reversed * 10) + digit;
//       temp = (temp - digit) / 10;
//     }

//     console.log(`Teskari tartibda: ${reversed}`);
//   }

//   const n = 12345;
//   reverseNumber(n);


// // // 19Misol
// function calculateDigitSumAndCount(n) {
//     let sum = 0;
//     let count = 0;
//     let temp = n;

//     while (temp > 0) {
//       const digit = temp % 10;
//       sum += digit;
//       count++;
//       temp = Math.floor(temp / 10);
//     }

//     console.log(`Raqamlar yig'indisi: ${sum}`);
//     console.log(`Raqamlar soni: ${count}`);
//   }

//   const n = 12345;
//   calculateDigitSumAndCount(n);



// // 20Misol
// function checkForDigitTwo(n) {
//     let hasTwo = false;
//     let temp = n;

//     while (temp > 0) {
//       const digit = temp % 10;
//       if (digit === 2) {
//         hasTwo = true;
//         break;
//       }
//       temp = Math.floor(temp / 10);
//     }

//     if (hasTwo) {
//       console.log("Berilgan sonning ichida 2 raqami bor");
//     } else {
//       console.log("Berilgan sonning ichida 2 raqami yo'q");
//     }
//   }

//   const n = 123456;
//   checkForDigitTwo(n);

// // 21Misol
// function checkForOddDigits(n) {
//     let hasOddDigit = false;
//     let temp = n;

//     while (temp > 0) {
//       const digit = temp % 10;
//       if (digit % 2 !== 0) {
//         hasOddDigit = true;
//         break;
//       }
//       temp = Math.floor(temp / 10);
//     }

//     if (hasOddDigit) {
//       console.log("Berilgan sonning ichida toq raqamlar bor");
//     } else {
//       console.log("Berilgan sonning ichida toq raqamlar yo'q");
//     }
//   }

//   const n = 123456;
//   checkForOddDigits(n);




// // // 22 misol
// function checkForPrime(n) {
//     let isPrime = true;

//     if (n === 1) {
//       isPrime = false;
//     } else {
//       for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//           isPrime = false;
//           break;
//         }
//       }
//     }

//     if (isPrime) {
//       console.log(`${n} tub son`);
//     } else {
//       console.log(`${n} tub son emas`);
//     }
//   }

//   const n = 17;
//   checkForPrime(n);







/// Tub sonni topish //
function tubSonlarniTopish(n) {
    let tubSonlar = [];

    for (let i = 2; i <= n; i++) {
        let tub = true;

        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                tub = false;
                break;
            }
        }

        if (tub) {
            tubSonlar.push(i);
        }
    }

    return tubSonlar;
}

const son = parseInt(prompt("Istalgan sonni kiriting:"));
const tubSonlar = tubSonlarniTopish(son);
console.log(`${son} sonining ichidagi tub sonlar: ${tubSonlar.join(", ")}`);
