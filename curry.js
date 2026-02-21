// const curry = (a) => (b) => b?curry(a+b):a
// const curry = (a) => {
//     return (b) => {
//         return b ? curry(a + b) : a
//     }
// }
// function curry (a){
//     return function subCurry(b){
//         return b?curry(a+b):a
//     }
// }
// console.log(curry(1)(2)(20)(2)())

// const sum = (a) => {
//     const inner = (b) => sum(a+b)
//     inner[Symbol.toPrimitive] = () => a
//     return inner
// }
// console.log(sum(1)(2)(3)(4) + 0);

// function sum(a,b,c){
//     return a+b+c
// }

// var curry = function (fn) {
//     return function curried(...args) {
//         if (args.length === fn.length) {
//             return fn(...args)
//         } else {
//             return function (...newArgs) {
//                return curried(...args, ...newArgs)
//             }
//         }
//     }
// }

// let cSum = curry(sum);
// console.log(cSum(1)(2));
// console.log(cSum(1)(2)(3));
// console.log(cSum(1)(2, 3));



