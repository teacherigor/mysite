var vocabularyData = [
	{
		id: 0,
		question: "This program is full of top tips to help you learn useful business English.",
		answers: ["useless", "horrible", "best"],
		rightAnswer: "best"
	},
	{
		id: 1,
		question: "Anna will be an asset for the Tip Top Trading.",
		answers: ["valuable employee", "disorganised employee", "immature employee"],
		rightAnswer: "valuable employee"
	},
	{
		id: 2,
		question: "When things go wrong, Paul has to take charge.",
		answers: ["a coffee break", "sick leave", "responsibility"],
		rightAnswer: "responsibility"
	}
];

for (var questionIndex = 0; questionIndex < vocabularyData.length; questionIndex++){
	var questionNumber = questionIndex + 1;
	var answers = "";

	console.log("Question number " + questionNumber);
	
	for (var answersIndex = 0; answersIndex < vocabularyData[questionIndex].answers.length; answersIndex++) {
		answers = answers + vocabularyData[questionIndex].answers[answersIndex];
		// console.log("Answer " + vocabularyData[questionIndex].answers[answersIndex]);
	}

	console.log("Answers: ", answers);
}

// console.log('________________________')







// var sum = 1;
// var number = 1;

// for (;number <= 5; number = number + 1) {
// 	sum = sum * number;
// }

// console.log('Finally ', sum);
// console.log(vocabularyData);

