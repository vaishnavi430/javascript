const accountId = 1452332
let accountEmail = "hello@google.com"
var accountPassword = "123445"
accountCity = "Jaipur"

// accountId = 2  not allowed

accountEmail = "abc@gmail.com"
accountPassword = "348766"
accountCity = "Mumbai"

console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity])

// do not prefer var use mostly const and let