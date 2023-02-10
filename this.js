const kodomAli = {
  name: "Kodom Ali",
  occupation: "Student",
  study: "Math",
  money: 5000,
  examName: "",
  subject: ["algebra", "geomatry", "calculas"],
  exam: function () {
    console.log(this); //kodomAli object
    return this.name + "is participating an exam";
  },
  improveExam: function (subject) {
    this.exam();
    return `${this.name} is participating this ${subject} improve exam`;
  },
  exam2: () => {
    console.log(this);
  },
  nestedExam: () => {
    const arrow = () => {
      console.log(this);
    };
    arrow();
  },
  treatDe: function (amount, tip) {
    // console.log(this.money);
    this.money = this.money - amount - tip;
    return this.money;
  },
};

// another object
const badamAli = {
  name: "Kacha Badam",
  money: 8000,
};

badamAli.exam = kodomAli.exam;
badamAli.exam(); //here kodomAli exam cosoleLog(this) return badamAli object
const a = badamAli.exam();
// console.log(a);

kodomAli.exam(); //kodomAli
console.log(this); //window
kodomAli.exam2(); //window
kodomAli.nestedExam(); //window

function click() {
  console.log("Inside button 1",this);
}

document.getElementById('btn2').addEventListener('click',function(){
    console.log(this);
})