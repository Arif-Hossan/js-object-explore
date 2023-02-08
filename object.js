//1.create object using object litera
const poet = {};//properties
poet.name ='kobi josim';//properties
poet.speciality='writing poems';
// method
poet.speech = function (){
    console.log('Agun jole buke');
};
// console.log(poet);
// poet.speech()

//normal way
const student ={
    name:"Goni Mia",
    job:"Selling Banana",
    speech: function (){
        console.log('I am a business man');
    },
    salary:10000
}
//2.object constructor
const patient = new Object();
const patient2= Object();
patient.name="Goni";
// console.log(patient);
// console.log(patient2);

//3.object using create method
const item =Object.create(null)
//console.log(item);
const atel=Object.create(student);
// console.log(atel);//empty object
// console.log(atel.name)//return from parent student Goni Mia
//console.log(atel.friend);//return undefined because it's not found any parent

//4. class
class Person{
    name = "Joshim";
    address = "Shodor Ghat";
    salary
    constructor(age){
        this.age=age;
    }
 }
 const person1=new Person(56);
//  console.log(person1);

 // 5. using function
 function Car (model,price){
    this.model=model;
    this.price=price;
 }
 const tesla= new Car("Elon",39);
 console.log(tesla);