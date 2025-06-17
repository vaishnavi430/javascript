//Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreateDate = new Date(2023, 0, 23)
// let myCreateDate = new Date(2023, 0, 23, 10, 30)
let myCreateDate = new Date("2023-01-14")
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());

// to convert time in miliseconds it can be asked in interview
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());//it will give exact month there are more terms also like day , date , sec , etc.

newDate.toLocaleString('default',{
    weekday: 'long',
})
console.log(newDate)
