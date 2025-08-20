let arr = [11, 23, 35, 47, 55];

// let newArr = arr.map(function(data, idx, orgArr) {
//     return { data, idx, orgArr };
// });
// console.log("Mapped array with metadata:", newArr);

// let secAArr = arr.filter((val) => val % 2 === 0);
// console.log("Filtered even numbers:", secAArr);

// arr.pop();
// console.log(arr);
// arr.push(50);
// console.log(arr);
// arr.shift();
// console.log(`Shifted Array : ${arr}`);
// arr.unshift(1 , 2 , 100);
// console.log(arr);

// let secAArr = arr.forEach((val , idx , ogArr) => {
//     console.log();
// })

// console.log(secAArr);

// console.log(arr.indexOf(10));
console.log(arr.findIndex((val , index , arr) => val % 2 == 0 ));
console.log(arr.includes(50));
console.log(arr.every());
