var triviaGame = {

	triviaQuestions: {
		Alabama: { capitalCity: 'Montgomery',		largestCity: 'Birmingham',		state: 'Alabama'},
		Alaska: { capitalCity: 'Juneau',			largestCity: 'Anchorage',		state: 'Alaska'	},
		Arizona: { capitalCity: 'Phoenix',			largestCity: 'Tucson',			state: 'Arizona'},
		Arkansas: { capitalCity: 'Little Rock',		largestCity: 'Fort Smith',		state: 'Arkansas'},
		California: { capitalCity: 'Sacramento',	largestCity: 'Los Angeles',		state: 'California'},
		Colorado: { capitalCity: 'Denver',			largestCity: 'Colorado Springs',state: 'Colorado'},
		Connecticut: { capitalCity: 'Hartford',		largestCity: 'Bridgeport',		state: 'Connecticut'},
		Delaware: { capitalCity: 'Dover',			largestCity: 'Wilmington',		state: 'Delaware'},
		Florida: { capitalCity: 'Tallahassee',		largestCity: 'Jacksonville',	state: 'Florida'},
		Georgia: { capitalCity: 'Atlanta',			largestCity: 'Columbus',		state: 'Georgia'},
		Hawaii: { capitalCity: 'Honolulu',			largestCity: 'Hilo',			state: 'Hawaii'},
		Idaho:{	capitalCity: 'Boise',				largestCity: 'Meridian',		state: 'Idaho'},
		Illinois: { capitalCity: 'Springfield',		largestCity: 'Chicago',			state: 'Illinois'},
		Indiana: { capitalCity: 'Indianapolis',		largestCity: 'Fort Wayne',		state: 'Indiana'},
		Iowa: { capitalCity: 'Des Moines',			largestCity: 'Cedar Rapids',	state: 'Iowa'},
		Kansas: { capitalCity: 'Topeka',			largestCity: 'Wichita',			state: 'Kansas'},
		Kentucky: { capitalCity: 'Frankfort',		largestCity: 'Louisville',		state: 'Kentucky'},
		Louisiana:{	capitalCity: 'Baton Rouge',		largestCity: 'New Orleans',		state: 'Louisiana'},
		Maine:{	capitalCity: 'Augusta',				largestCity: 'Portland',		state: 'Maine'},
		Maryland: { capitalCity: 'Annapolis',		largestCity: 'Baltimore',		state: 'Maryland'},
		Massachusetts:{	capitalCity: 'Boston',		largestCity: 'Worcester',		state: 'Massachusetts'},
		Michigan: { capitalCity: 'Lansing',			largestCity: 'Detroit',			state: 'Michigan'},
		Minnesota:{	capitalCity: 'Saint Paul',		largestCity: 'Minneapolis',		state: 'Minnesota'},
		Mississippi: { capitalCity: 'Jackson',		largestCity: 'Gulfport',		state: 'Mississippi'},
		Missouri: { capitalCity: 'Jefferson City', 	largestCity: 'Kansas City',		state: 'Missouri'},
		Montana: { capitalCity: 'Helena',			largestCity: 'Billings',		state: 'Montana'},
		Nebraska: { capitalCity: 'Lincoln',			largestCity: 'Omaha',			state: 'Nebraska'},
		Nevada: { capitalCity: 'Carson City',		largestCity: 'Las Vegas',		state: 'Nevada'},
		New_Hampshire:{	capitalCity: 'Concord',		largestCity: 'Manchester',		state: 'New Hampshire'},
		New_Jersey: { capitalCity: 'Trenton',		largestCity: 'Newark',			state: 'New Jersey'},
		New_Mexico: { capitalCity: 'Santa Fe',		largestCity: 'Albuquerque',		state: 'New Mexico'},
		New_York:{	capitalCity: 'Albany',			largestCity: 'New York City',	state: 'New York'},
		North_Carolina: { capitalCity: 'Raleigh', 	largestCity: 'Charlotte',		state: 'North Carolina'},
		North_Dakota: { capitalCity: 'Bismarck',	largestCity: 'Fargo',			state: 'North Dakota'},
		Ohio: { capitalCity: 'Columbus',			largestCity: 'Cleveland',		state: 'Ohio'},
		Oklahoma: { capitalCity: 'Oklahoma City',	largestCity: 'Tulsa',			state: 'Oklahoma'},
		Oregon: { capitalCity: 'Salem',				largestCity: 'Portland',		state: 'Oregon'},
		Pennsylvania: { capitalCity: 'Harrisburg', 	largestCity: 'Philadelphia',	state: 'Pennsylvania'},
		Rhode_Island: { capitalCity: 'Providence', 	largestCity: 'Warwick',			state: 'Rhode Island'},
		South_Carolina: { capitalCity: 'Columbia',  largestCity: 'Charleston',		state: 'South Carolina'},
		South_Dakota: { capitalCity: 'Pierre',		largestCity: 'Sioux Falls',		state: 'South Dakota'},
		Tennessee:{	capitalCity: 'Nashville',		largestCity: 'Memphis',			state: 'Tennessee'},
		Texas: { capitalCity: 'Austin',				largestCity: 'Houston',			state: 'Texas'},
		Utah:{	capitalCity: 'Salt Lake City',		largestCity: 'West Valley City',state: 'Utah'},
		Vermont: { capitalCity: 'Montpelier',		largestCity: 'Burlington',		state: 'Vermont'},
		Virginia: { capitalCity: 'Richmond',		largestCity: 'Virginia Beach',	state: 'Virginia'},
		Washington: { capitalCity: 'Olympia',		largestCity: 'Seattle',			state: 'Washington'},
		West_Virginia:{	capitalCity: 'Charleston',	largestCity: 'Huntington',		state: 'West Virginia'},
		Wisconsin:{	capitalCity: 'Madison',			largestCity: 'Milwaukee',		state: 'Wisconsin'},
		Wyoming: { capitalCity: 'Cheyenne',			largestCity: 'Casper',			state: 'Wyoming'},
  	},

  	numCorrect: 0,
	numIncorrect: 0,
	selectedState: null,
	questionTrueFalse: null,
	questionTimeout: null,
	gameTimeout: null,
	numSeconds: null,

	// Generate random # between min and max values
	randomIntFromInterval: function(min ,max) 
	{
	    return Math.floor(Math.random() * (max-  min + 1) + min);
	},

	//  Decrement and display time remaining, when seconds = 0 clear interval, prompt user that game is over.
	decrementTimer: function() {
		this.numSeconds--;
	    $("#countdown").html(this.numSeconds + " Seconds");

	    if (this.numSeconds === 0) {
	    	clearInterval(this.gameTimeout);
	    	clearTimeout(this.questionTimeout);
	    	
	    	// Change game status to "Game Over" and disable True and False buttons
	    	$("#status").html("Game Over");
  			$("#btn-true").prop('disabled', true);
	    	$("#btn-false").prop('disabled', true);
	    }
    },

    //  Set Correct and Incorrect values to 0 and display, set game total time to 60 seconds and start timer, display first question
  	startGame: function() {
		this.numCorrect = 0;
		this.numIncorrect = 0;
		this.numSeconds = 60;

		$("#correct").html("Correct: " + this.numCorrect);
		$("#incorrect").html("Incorrect: " + this.numIncorrect);
		$("#countdown").html(this.numSeconds + " Seconds");
		$("#status").html("Game Running");
  		$("#btn-true").prop('disabled', false);
	    $("#btn-false").prop('disabled', false);

		this.gameTimeout = setInterval(() => this.decrementTimer(), 1000);
		this.nextQuestion();
	},  

	// Randomly select and display next trivia question with either capital city or largest city, and start question timer 
  	nextQuestion: function() {

	    var objKeys = Object.keys(this.triviaQuestions);
	    this.selectedState = objKeys[this.randomIntFromInterval(0, objKeys.length-1)];
	    this.questionTrueFalse = this.randomIntFromInterval(0,1);

	    if (this.questionTrueFalse) {
	    	$("#trivia-question").html("The capital city of " + this.triviaQuestions[this.selectedState].state + " is " + this.triviaQuestions[this.selectedState].capitalCity);
	    }
		else {
			$("#trivia-question").html("The capital city of " + this.triviaQuestions[this.selectedState].state + " is " + this.triviaQuestions[this.selectedState].largestCity);
		}
	   	this.questionTimeout = setTimeout(() => this.questionTimedOut(), 10000);
	},	


	// Clear question timeout, increment and display Incorrect answers,  and display next question
	questionTimedOut: function() {
		clearTimeout(this.questionTimeout);
		$("#incorrect").html("Incorrect: " + ++this.numIncorrect);
	    this.nextQuestion(); 
	},

	// True or Fasle button clicked
	// Clear question timeout, check if answer is correct or incorrect, increment and display numCorrect or numIncorrect, and display next question
  	checkGameStatus: function(buttonVal) {

		clearTimeout(this.questionTimeout);	

	    if (buttonVal == this.questionTrueFalse) {
	        $("#correct").html("Correct: " + ++this.numCorrect);
	        this.nextQuestion();
	    }
	    else {  
	        $("#incorrect").html("Incorrect: " + ++this.numIncorrect);
	       	this.nextQuestion();
	    }
  	},		

  	// Disable True and False buttons
  	initGame: function() {
  		$("#btn-true").prop('disabled', true);
	    $("#btn-false").prop('disabled', true);
  	}
};

// Start game with True and False buttons disabled
triviaGame.initGame();

// When page is loaded
$(document).ready(function() {

	// Process mouse click on True or False button
	$(document).on("click", "#btn-false, #btn-true", function() {

 		// Check if game was won, lost or still in play
  		triviaGame.checkGameStatus($(this).attr("value"));  
	});

	// Process mouse click on Start Game button
	$(document).on("click", "#btn-start", function() {
		triviaGame.startGame();  
	});	
});


