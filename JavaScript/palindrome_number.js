var input = [3, 1, 2];
for (i = 0; i < input.length - 1; i++) {
   for (j = i + 1; j < input.length; j++) {
      if (input[i] == input[input.length - j]) {
         console.log("the given number is palindrome" );
      }
   }
}