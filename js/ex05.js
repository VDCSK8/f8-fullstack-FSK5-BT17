var a = 5;
var b = 8;
var c = 2;
var tam = 0;
if (a > b) {
    tam = a;
    a = b;
    b = tam;
}
if (b > c) {
    tam = b;
    b = c;
    c = tam;
}
if (a > b) {
    tam = a;
    a = b;
    b = tam;
}
console.log(`Thứ tự tăng dần là ${a}  ${b} ${c}`);
