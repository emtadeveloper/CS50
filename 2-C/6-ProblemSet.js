// this version of Mario if feeling less comfortable

// const mario = (n) => {
//     if (1 < n < 8) {
//         for (i = 0; i < n; i++) {
//             let sharp = "";
//             for (j = 0; j <= n; j++) {
//                 if (n - i <= j) {
//                     sharp = sharp + "#";
//                 } else {
//                     sharp = sharp + "";
//                 }
//             }
//             console.log(sharp);
//         }
//     }
//     return "";
// };
// console.log(mario(10));

// this version of Mario if feeling more comfortable

// const mario = (n) => {
//     if (1 < n && n < 8) {
//         for (i = 0; i < n; i++) {
//             let sharp = "";
//             for (j = 0; j <= n; j++) {
//                 if (n - i <= j) {
//                     sharp = sharp + "#";
//                 } else {
//                     sharp = sharp + " ";
//                 }
//             }
//             console.log(sharp + " " + [...sharp].reverse().join(""));
//         }
//     } else {
//         return "n is not valid";
//     }

//     return "";
// };
// console.log(mario(12));

// Cash if feeling less comfortable

// const checkCreditCards = (n) => {
//     const array = [...n.toString()];
//     let totalEven = 0;
//     let totalOdd = 0;
//     if (array.length <= 15) return "inValid";
//     for (let i = 0; i < array.length; i++) {
//         if (i % 2 == 0) {
//             if (+array[i] * 2 > 10) {
//                 totalEven = totalEven + parseInt(array[i]) * 2 - 9;
//             }
//             totalEven = totalEven + parseInt(array[i]);
//         }
//         if (i % 2 !== 0) {
//             totalOdd += +array[i];
//         }
//     }
//     return (totalEven - 1 + totalOdd) % 10 == 0 ? "valid" : "inValid";
// };

// console.log(checkCreditCards(400));
// console.log(checkCreditCards(6176292929));
// console.log(checkCreditCards(4003600000000014));

// Credit if feeling more comfortable

// const Cash = (price) => {
//     let total = price;
//     const obj = {
//         quarters: { value: 25, number: 0 },
//         dimes: { value: 10, number: 0 },
//         nickels: { value: 5, number: 0 },
//         pennies: { value: 1, number: 0 },
//     };
//     obj.quarters.number = Math.floor(total / obj.quarters.value);
//     total = total - obj.quarters.value * obj.quarters.number;
//     obj.dimes.number = Math.floor(total / obj.dimes.value);
//     total = total - obj.dimes.value * obj.dimes.number;
//     obj.nickels.number = Math.floor(total / obj.nickels.value);
//     total = total - obj.nickels.value * obj.nickels.number;
//     obj.pennies.number = Math.floor(total / obj.pennies.value);
//     total = total - obj.pennies.value * obj.pennies.number;
//     return "quarters " + obj.quarters.number + " dimes " + obj.dimes.number + " nickels " + obj.nickels.number + " pennies " + obj.pennies.number;
// };
// console.log(Cash(49));
// console.log(Cash(143));
