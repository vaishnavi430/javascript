//arrays

const array = [0, 1, 2, 3, 4, 5, "harry", true];
// console.log(array[0]);
console.log(array[4]);

// array methods
// array.push(6)
// array.pop()
// array.shift(3) // removes the first element
// array.unshift(2) the values get added in the starting of the array
// array.reverse() it reverse the hole array
// console.log(array.includes(9));
// console.log(array.indexOf(3));
// console.log(array);

// const newArr = array.join()

// console.log(typeof newArr);//this will give u only string type array while using join method
// console.log(array);

// slice , splice
console.log("A" , array);
const myn1 = array.slice(1, 3)
console.log(myn1);

console.log("B" , array);

const myn2 = array.splice(1, 3)
console.log(myn2);

console.log("c" , array);

/*
difference between slice and splice 
slice will give u the value from which index you have asked it 
splice will remove the value from which index you have asked it from the array if have asked from 1,3 then the 0 index value remain in the array only the 1,2, 3 value will be removed  */
