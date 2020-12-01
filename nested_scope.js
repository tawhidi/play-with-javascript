
const numberOfPeople = function(number) {
  const totalSalaryfunc = function(perMonthSalary){
    // number param is accessible here
    console.log(`Number of Employee is:${number}`)
    let totalSalary = number * perMonthSalary
    console.log(`Total Salary is: ${totalSalary}`)
  }
  // Can't able to Access totalSalary here
  console.log(totalSalary)
  totalSalaryfunc(25000)
}
numberOfPeople(200)
