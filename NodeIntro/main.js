const colors = require("colors");
// console.table({
//   and_true: { value_one: true, value_two: true, returns: true },
//   and_false: { value_one: true, value_two: false, returns: false },
//   or: { value_one: true, value_two: false, returns: true },
//   or_false: { value_one: false, value_two: true, returns: true },
// });

// This is an app that take in a user and a password.
// THe first arguemnt given is the user, The second is the password.
// If the user does not exist, tell the the user it does not exist (an anti pattern in UI, but for this example totally legit)
// If the password is incorrect, tell them the password is incorrect
// If the password is correct and the user exists, use the dad joke API
let users = ["Justin", "Natalia"];
let password = "dogsAreBetterThanCats";

let user_name = process.argv[2];
let pass = process.argv[3];

console.log(`Evauluating ${user_name} with password: ${pass}`);
if (users.includes(user_name)) {
  console.log(colors.green("That user exists"));
} else {
  console.log(colors.red("That user does not exist"));
}

if (pass == password) {
  console.log("Password is correct");
  console.log(colors.rainbow("I tried to catch a raindrop, but I mist......"));
} else {
  console.log("THe password is incorrect");
}
