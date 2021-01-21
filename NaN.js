var str = 'My name is NaN'
result = str/2
console.log(result)
console.log(Number.isNaN(str))  //false
console.log(Number.isNaN(result)) // true
