// function ask(question) {
// 	return function holdYourQuestion() {
// 		console.log(question)
// 	} 
// }

// var myQuestion = ask('How are you??')

// myQuestion()



function bankAccount(initialBalanace){
	var balance = initialBalanace
	return function(){
		return balance
	}
}

var account = bankAccount(1000000)

console.log(balance)