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
	var node = document.createElement('div');
	node.innerHTML = vocabularyData[questionIndex].question;
	node.className = 'question';
	questionsForm.appendChild(node);

}


// function getQuestionBox(question) {
// 	var box = document.createElement('div');
// 	box.appendChild('question');
// 	document.getElementById('questionslist'). appendChild(box);
// 	}