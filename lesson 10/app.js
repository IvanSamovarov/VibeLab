let name = "Ivan";

function Hello() {
    console.log("Hello", name);
}
Hello();

function Goodbye(name) {
    console.log("Goodbye", name);
}
Goodbye("Ivan");

function sum(a, b) {
    return a + b;
}
console.log(sum(2, 2));

const summa = function(a, b) {
    return a + b;
}
console.log(summa(1, 2));

const love = (text) => {
    console.log("I love", text);
}
love("VibeLab");

setTimeout(() => {
    console.log("Wait one second");
}, 1000);