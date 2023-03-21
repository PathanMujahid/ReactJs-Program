// let arr = [2, 4, 1, 3]
// let num = []

// for (i = 0; i < arr.length - 1; i++) {

//     for (j = 0; j < arr.length - 1; j++){

//     if ( arr[]) {

//     }

// }

let arr = [2, 4, 3, 1]

for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
        console.log(arr);
    }

}
