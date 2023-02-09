const student = {
  name: "Kodom Ali",
  occupation: "Student",
  study: "Math",
  money: 5000,
  examName: "",
  subject: ["algebra", "geomatry", "calculas"],
  //   exam: function () {
  //     const subjects = this.subject;
  //     subjects.forEach((subject) => {
  //       this.examName = `${this.name}  is participating ${subject} exam`;
  //       console.log(this.examName);
  //     });
  //   },
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
const output = student.exam();
// console.log(output);
const improveExam = student.improveExam("algebra");
// console.log(improveExam);

const phoneTreat = student.treatDe(900,0);
console.log(phoneTreat);
const dolaRemaining= student.treatDe(80,20);
console.log(dolaRemaining);
