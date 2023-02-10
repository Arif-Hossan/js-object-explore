// shallow copy
const data = {
    name:"John",
    Title:"Creative Designer"
}
const data2={...data};
console.log(data2);

// deep copy
const data3 = JSON.parse(JSON.stringify(data));
console.log(data3);