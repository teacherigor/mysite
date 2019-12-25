var vocabularyData = [
	{
		id: 'asdr-3432-asds',
		question: "This program is full of top tips to help you learn useful business English.",
		answers: ["useless", "horrible", "best"],
		rightAnswer: "best"
	},
	{
		id: 'asdr-dfde-asds',
		question: "Anna will be an asset for the Tip Top Trading.",
		answers: ["valuable employee", "disorganised employee", "immature employee"],
		rightAnswer: "valuable employee"
	},
	{
		id: 'asd2-3we2-asds',
		question: "When things go wrong, Paul has to take charge.",
		answers: ["a coffee break", "sick leave", "responsibility"],
		rightAnswer: "responsibility"
	}
];

var questionsForm = document.getElementById('questionslist');

for (var questionIndex = 0; questionIndex < vocabularyData.length; questionIndex++) {
	var nodeQuestion = document.createElement('div');
	nodeQuestion.innerHTML = vocabularyData[questionIndex].question;
	nodeQuestion.className = 'question';
	questionsForm.appendChild(nodeQuestion);
	// console.log(questionIndex);

	for (var answersIndex = 0; answersIndex < vocabularyData[questionIndex].answers.length; answersIndex++) {
		var nodeAnswer = document.createElement('div');
		var nodeInput = document.createElement('input');
		var nodeAnswerText = document.createTextNode(vocabularyData[questionIndex].answers[answersIndex]);

		nodeAnswer.className = 'answer';
		nodeInput.type = 'radio';
		nodeAnswer.appendChild(nodeInput);
		nodeAnswer.appendChild(nodeAnswerText);
		questionsForm.appendChild(nodeAnswer);
		// nodeAnswer.innerHTML = vocabularyData[questionIndex].answers[answersIndex];		
		
	}

}


// function getQuestionBox(question) {
// 	var box = document.createElement('div');
// 	box.appendChild('question');
// 	document.getElementById('questionslist'). appendChild(box);
// 	}

//I have two variables x, y. Print out all numbers with x and y range separating them with commas. If x is more than y, print out alert window.