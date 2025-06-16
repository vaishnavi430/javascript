// Stack (primitive) , Heap( non - primitive)

let myYoutubename = "harry"
let anothername = myYoutubename
anothername = "chai aur code"
console.log(myYoutubename)
console.log(anothername)

let userOne ={
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "harr@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)

// in stack we get copy of that value but in heap we get the reference of that value