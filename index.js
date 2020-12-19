var readlineSync = require('readline-sync');
var chalk = require('chalk');

var score = 0;

var userName = readlineSync.question('Hey! please type your UserName here: ');
console.log('-------------------------------------------------------');

console.log('Hi '+userName + " welcome, I'm glad that you're here! :)");
console.log('-------------------------------------------------------');
console.log('Welcome ' +userName+"!" +chalk(' Please enjoy playing this game create one and share it your friends and tell them to create one and share.. continue the cycle..'));

console.log('-------------------------------------------------------');

console.log(chalk.red('All you need to do is select only one option from the given options\n, there is no negative marking here.. :P' ));

console.log(chalk.blue('All the very best!'));
console.log('------------------------------------------------------');



var questions = [
  {
    question : 'Which is my favourite year?',
    options : ['2003', '2006','2010','2012'],
    answer :'2012'
  },
  {
    question : 'My favourite sport?',
    options : ['All Indoor games','football','All Outdoor games','Badminton'],
    answer : 'Badminton'
  },

  {
    question : 'Where Do I Live ?',
    options : ['Hyderabad','Bangalore','chennai','Delhi'],
    answer : 'Hyderabad'
  },

  {
    question : 'Do I watch TV shows? ',
    options : ['No','yes','Sometimes','All of the above'],
    answer : 'No'
  },
  {
    question : 'What do I currently do?',
    options : ['Student', 'Graduated', 'Looking for a job', 'Working somewhere'],
    answer : 'Working somewhere'
  },
  {
    question : 'Which operating system do I prefer mostly to work? ',
    options : ['Windows','Linux','MacOs','DOS'],
    answer : 'Windows'
  }
]


function displayQuestion(questionObj){
  console.log(chalk.red(questionObj.question)+'\n')
  for(var i =1;i<=4;i++){
    console.log('['+i+'] '+questionObj.options[i-1]);
  }
  var index = readlineSync.keyIn('\n\You have selected  your answer as : ', {limit: '$<1-4>'});

  var userAnswer = questionObj.options[index - 1];
  if(userAnswer === questionObj.answer){
    console.log(chalk.blue('\nCorrect answer!\n'));
    score = score +2;
  }
  else{
    console.log(chalk.red('\nsorry! Wrong Answer\n'));
  
  }
}

for(var i =0;i< questions.length ;i++){
  displayQuestion(questions[i]);
}
console.log("Your total score is " + score + " out of 12!. Thanks a lot for playing!\n")
console.log("Requesting to please share me your results or a screenshot, I will update the leaderboard!");
console.log('\n');
console.log('thanks a lot for your time and considering playing this game. Hope you know me now! Have a nice day ahead!');
console.log('---------------------------------');
console.log('Jai neogcamp! :)')

