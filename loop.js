// loop through from array
const numbers = [12, 20, 29, 36];
for (const number of numbers) {
//   console.log(number);
}
//using for of through object is not possible
const bottle = {
  color: "yellow",
  price: 100,
  isCleaned: true,
  capacity: 1,
};
/*
for (const prop of bottle){
    console.log(prop); //bottle is not iterable
}*/

/* 3 ways for accessing object property value
1.bottle.color -> Dot Notation
2.bottle['color'] -> for specificly known property name
3.bottle[key]  ->bracket Notation
*/

//accessing object keys
const keys= Object.keys(bottle)
// console.log(keys);

// keys.forEach(key => {
//     console.log(key);
// });

//get the values of bottle
for (const key of keys){
    // console.log(key,bottle[key]);
    console.log(`${key} = ${bottle[key]}`);
}

// use for in for object
for (const key in bottle){
   console.log(key,bottle[key]);
}

// advanced way
/*
[key,value] is used for array destruction ang Object.entries(bottle) return an two dimensional array
*/
for (const [key,value] of Object.entries(bottle)){
    console.log(key,value);
}
