/**
 * For each employee their current salary is calculated by multiplying yearly increment with experience then adding the
 * result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.
 */

function employeeSalary(employees) {
  let totalSalary = 0;
  for (let employee of employees) {
    let salary = employee.increment * employee.experience;
    let currentSalary = salary + employee.starting;
    totalSalary = totalSalary + currentSalary;
  }
  
  let monthlyProvide = totalSalary / 12;
  return monthlyProvide.toFixed(2);
}

const employees = [
  { name: "Shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "Shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

const perMonthSalary = employeeSalary(employees);
console.log("Calculate is the total salary has to be provided by the company in a month is: ", perMonthSalary, "TK");
