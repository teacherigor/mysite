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

var questionsForm = document.getElementById('questionslist');

for (var questionIndex = 0; questionIndex < vocabularyData.length; questionIndex++) {
	questionsForm.appendChild(getQuestionBox(vocabularyData[questionIndex].question));
}


function getQuestionBox(question) {
	var box = document.createElement('div');
	document.write(question + "<br/>");
	return box;
}