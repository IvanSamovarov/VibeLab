let var_bool = true, var_num = 12, var_string = 'VibeLab';
let var_array = [1, 2, 3], var_obj = {name: "Ivan", age: 20};

console.log("Bool:", var_bool, "Number:", var_num, "String:", var_string, "Array:", var_array, "Object:", var_obj);

let a = 3, b = '3', c = 3;

console.log(a + b);
console.log(a - b);
console.log(a * c);
console.log(a / c);

if (a > c) {
    console.log("Yes");
} else {
    console.log("No");
}

let tmp = '';
for (let i = 0; i < 10; i++) {
    tmp += i;
}

console.log(tmp);