const accountId = 144553
let  accountEmail = "deepak@gmail.com"
var accountPassword = "12345"
accountCity = "barcelona"
let accountState;

// accountId = 2 // not allowed

accountEmail = "barcelona@gmail.com"
accountPassword = "2121212121"
accountCity = "madrid"

console.log(accountId);


/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])