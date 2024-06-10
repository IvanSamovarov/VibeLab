let a = 10, b = 20;

if (a > b) {
    console.log("a > b");
} else if (a < b) {
    console.log("b > a");
} else {
    console.log("a = b");
}

for (let i = 0; i < 5; i++) {
    console.log(i);
}

function func(num) {
    if (num === 0) {
        throw new Error("you can't divide by zero");
    }
    return 10 / num;
}

try {
    let result = func(0);
    console.log(result);
} catch (error) {
    console.log("Error: " + error.message);
}