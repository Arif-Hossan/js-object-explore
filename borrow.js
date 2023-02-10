const kodomAli = {
  name: "Kodom Ali",
  occupation: "Student",
  study: "Math",
  money: 5000,
  examName: "",
  subject: ["algebra", "geomatry", "calculas"],
  exam: function () {
    return this.name + "is participating an exam";
  },
  improveExam: function (subject) {
    this.exam();
    return `${this.name} is participating this ${subject} improve exam`;
  },
  treatDe: function (amount, tip) {
    // console.log(this.money);
    this.money = this.money - amount - tip;
    return this.money;
  },
};

// another object
const badamAli= {
    name:'Kacha Badam',
    money:8000
}
// using exam function from kodomAli for badamAli using call,apply and bind(multi use)
const result = kodomAli.exam.call(badamAli);
// console.log(result);
// Kacha Badamis participating an exam
const result2 = kodomAli.treatDe.call(badamAli,900,100);
console.log(result2);
const result3 =kodomAli.treatDe.apply(badamAli,[450,50]);
console.log(result3);
// multiple time use
const result4= kodomAli.treatDe.bind(badamAli);
const remaining= result4(300,0);
console.log(remaining);
const lastRemainingMoney=result4(150,50);
console.log(lastRemainingMoney);
