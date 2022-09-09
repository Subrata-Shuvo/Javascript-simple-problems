// finding the largest over three inputs
// function findLargest(first, second, third){
//     if(first > second && first > third){
//         return first;
//     }
//     else if(second > first && second > third){
//         return second;
//     }
//     else{
//         return third;
//     }
// }

// const largest = (123, 234, 345);
// console.log('The largest number is', largest);

// finding the smallest over three

const first = 987;
const second = 897;
const third = 456;
// function findSmallest(first, second, third){
//     if(first <= second && first <= third){
//         return first;
//     }
//     else if(second <= first && second <= third){
//         return second;
//     }
//     else {
//         return third;
//     }
// }

const smallest = Math.min(first, second, third);
console.log('The smallest number is',smallest);