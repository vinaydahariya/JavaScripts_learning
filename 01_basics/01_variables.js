const accountId = 13223
let accountEmail = "vinay@gmail.com"
var accountPassword = "vinay123@#$"
accountCity = "Bilaspur"

// accountId = 2 // not allowed

accountEmail = "vinay@mnnit.ac.in"
accountPassword = "vinay@#$123"
accountCity = "Raipur"
let accountState

console.log(accountState)
console.log(accountId)

/* 
    Prefer not to use var
    because of issue in block scope and functional scope    
*/

console.table([accountId, accountEmail, accountPassword, accountCity])