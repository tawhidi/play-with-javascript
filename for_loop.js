var students = ['Bari','Tusher','Lisa','Jibon']

// for(let i = 0; i<  students.length;i++){
// 	console.log("Hello",students[i])
// }

// for( let stud of students){
// 	console.log(stud)
// }

while (students.length > 0){
	let student = students.shift()
	console.log(`Hello ${student}`)
}