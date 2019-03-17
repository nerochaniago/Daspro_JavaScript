var s = '';
var n = ''
for (var index = 1; index <= 5; index++) {
    for (var jIndex = 1; jIndex <= index; jIndex++) {
        s = s + ('*');

    }
    s += ('\n');
}
console.log(s);

for (var index = 5; index >= 1; index--) {
    for (var jIndex = 1; jIndex <= index; jIndex++) {
        s += ('*');
    }
    s += ('\n');
}
console.log(s);