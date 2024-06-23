let arr1 = [
    {name: 'Ivan', age: 20},
    {name: 'Andrei', age: 10},
    {name: 'Yurii', age: 15},
    {name: 'Sasha', age: 19},
    {name: 'Rita', age: 9}
];

let arr2 = arr1.map(item => item.name);

console.log(arr2.sort());
console.log(arr1.sort((a, b) => a.age - b.age));

let filterArr = arr1.filter(item => item.age > 12);
console.log(filterArr);