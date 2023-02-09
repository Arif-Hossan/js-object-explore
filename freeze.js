//declaring objects with object literal
const bottle ={
    color:'yellow',
    price:100,
    isCleaned:true,
    capacity:1
}
//get all keys from objects
const keys=Object.keys(bottle);
// console.log("keys = ", keys);

//get all values from objects
const values= Object.values(bottle);
// console.log("values = ",values);

//get key value pairs from object the result is two dimensional array
const pair = Object.entries(bottle);
// console.log(pair);
/*
[
  [ 'color', 'yellow' ],
  [ 'price', 100 ],
  [ 'isCleaned', true ],
  [ 'capacity', 1 ]
]

*/

console.log(bottle);

//seal the object , so delete will not work
// only existing properties value will be modified
// no extra property can be add
// Object.seal(bottle);*/
// freeze the object 
Object.freeze(bottle);

//modify existing property
bottle.price=120;

//try to add new property after sealing object which can not be done
bottle.owner="Atel";
//delete object property
delete bottle.isCleaned;
console.log(bottle);