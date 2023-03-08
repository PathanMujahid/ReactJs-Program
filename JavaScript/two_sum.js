var twosum = [2, 7, 11, 15, 10];
var target = 26;
for (var i = 0; i <= twosum.length ; i++) {
    for (var j = i+1; j <= twosum.length; j++) {
        if (twosum[i] + twosum[j] == target) {
            var index_position = [i, j];
        }
    }
}
console.log(index_position);
