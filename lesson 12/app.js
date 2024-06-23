function sum(x, y) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = x + y;
            resolve(result);
        }, 2000);
    });
}

async function calc() {
    return await sum(2, 2);
}

calc().then((data) => console.log(data));
console.log('Wait 2 seconds');