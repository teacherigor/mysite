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

var formNode = document.getElementById('tasklist');
var titleNode = document.createElement('h2');
var textNode = document.createTextNode('Choose the correct synonym for the highlighted word.');
titleNode.appendChild(textNode);
formNode.appendChild(titleNode);

var paraNode = document.createElement('p');
var paraInner = 'This program is full of <span>top</span> tips to help you learn useful business English.'
paraNode.innerHTML = paraInner;
paraNode.style = 'color: green; font-size: 20px';
formNode.appendChild(paraNode);



var textResult = "";

for (var questionIndex = 0; questionIndex < vocabularyData.length; questionIndex++){
	var questionNumber = questionIndex + 1;
	var answers = "";
	var separateDefault = ", ";

			
	for (var answersIndex = 0; answersIndex < vocabularyData[questionIndex].answers.length; answersIndex++) {
		var separate = null;
		if (answersIndex == 0) {
			separate = "";
		} else {
			separate = separateDefault;
		}
		answers = answers + separate + vocabularyData[questionIndex].answers[answersIndex];
		// console.log("Answer " + vocabularyData[questionIndex].answers[answersIndex]);
	}

	textResult += "Question number " + questionNumber + '\n'; 
	textResult += "Answers: " + answers + '\n';
	textResult += '________________________' + '\n';

}

	console.log(textResult);








var sum = 1;
var number = 1;

for (;number <= 5; number = number + 1) {
	sum = sum * number;
}

console.log('Finally ', sum);
console.log(vocabularyData);

