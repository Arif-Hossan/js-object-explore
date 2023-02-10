//object compare return always false because there reference(memory address) is different
/*const first = {a:2,b:3};
const second = {a:2,b:3};
// this will return same because second and third object memory addresses are same
/*const third=second;
if (third === second){
    console.log('Same');
}
else {
    console.log('False');
}
if (first === second){
    console.log('Same');
}
else {
    console.log('False');
}
*/
// not proper way---strictly prohibited for compare array and object

const first = {a:2,b:3};
const second = {a:2,b:3};
// if the order is different then it will return Different
// const first = {b:3,a:2};
// const second = {a:2,b:3};
const firstString=JSON.stringify(first);
const secondString=JSON.stringify(second);
if (firstString=== secondString){
    // console.log('Same');
}
else{
    // console.log("Different");
}

//another way but not  proper way
function compareObject (first,second){
const firstKeys=Object.keys(first);
const secondKeys=Object.keys(second);
if (firstKeys.length===secondKeys.length){
    for (const key of firstKeys ){
        if(first[key]!==second[key]){
            return false;
        }
    }
    return true;
}
}
const isSame=compareObject(first,second);
console.log(isSame);