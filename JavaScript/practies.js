/* Js if staetement


let a = 20;

if (a > 10) {
console.log("value of is greater than 10");
}


/*  if...else

let a = 20;

if (a % 2 == 0) {
console.log(" value of a is even number ");
}
else {
console.log("vallue of a is odd number");
}*/

/* if... else... if

let a = 25;

if (a == 10) {
console.log(" value of a is equal 10");
}
else if (a == 5) {
console.log("value of a is equal of 5");
}
else if (a == 15) {
console.log("value of a is equal of 15");
}
else {
console.log("vlue of a is not equal of 10,5 or 15");
}*/

/*js loop
for loop*/

/*for (let i = 1; i <= 5; i++) {
    console.log(i);
}*/

/*js while loop
let i = 11;
while (i <= 15) {
    console.log(i);
    i++;
}
*/



const password = "1233333333$A";
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const speacialchar = "!@#$%^&*()_+=-`";
const numbers = "1234567890";

if (password.length < 8) {
    console.log("password length should be greater than 8");
}

let passwordConsistChar = false;
let passwordConsistNumber = false;
let passwordConsistSpChar = false;

Array.from(password).forEach((p) => {
    console.log(characters.indexOf(p));

    if (characters.indexOf(p) > 0) {
        passwordConsistChar = true;
    } else if (speacialchar.indexOf(p) > 0) {
        passwordConsistSpChar = true;
    } else if (numbers.indexOf(p) > 0) {
        passwordConsistNumber = true;
    }
});

if (passwordConsistChar && passwordConsistNumber && passwordConsistSpChar) {
    console.log("Password is strong");
} else {
    console.log("Enter strong password");
}

console.log({
    passwordConsistChar,
    passwordConsistSpChar,
    passwordConsistNumber,
});
