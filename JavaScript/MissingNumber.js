/*If I give array as input = [1, 2,3,5]

Output will be :- missing number is 4*/


const input = [1, 2, 3, 5];
let a;
const missingnumber = []

for (let i = 0; i < input.length - 1; i++) {
    // missingnumber = input.length - 1 == input

    for (let j = 0; j < input.length - 1; j++) {
        a = input[i] + input[j]
        if (!input.includes(a)) {
            if (!missingnumber.includes(a) && a <= 5) {
                missingnumber.push(a)
            }

        }
        console.log(a);

    }


}
console.log("missingnumber ", missingnumber);