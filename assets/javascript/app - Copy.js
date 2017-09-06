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
	numSeconds: 10,

	// Generate random # between min and max values
	randomIntFromInterval: function(min ,max) 
	{
	    return Math.floor(Math.random() * (max-  min + 1) + min);
	},

	decrementTimer: function() {

		console.log("this.numSeconds: " + this.numSeconds);

	    //  Decrease number by one.
	    this.numSeconds--;

	    //  Show the number in the #show-number tag.
	    $("#countdown").html("Seconds Remaining: " + this.numSeconds);

	    //  Once number hits zero...
	    if (this.numSeconds === 0) {

	        //  ...run the stop function.
	    	clearInterval(this.intervalId);

	        //  Alert the user that time is up.
	        alert("Time Up!");

	        this.startGame();
	    }
    },

  	startGame: function() {
		this.numCorrect = 0;
		this.numIncorrect = 0;
		this.numSeconds = 10;

console.log("this.numSeconds = " + this.numSeconds);
this.numSeconds--;
console.log("this.numSeconds = " + this.numSeconds);

		this.intervalId = setInterval(this.decrementTimer, 1000);
		this.nextQuestion();
	},  

  	nextQuestion: function() {

	  	// Capture trivia game word keys
	    var objKeys = Object.keys(this.triviaQuestions);

	    // Randonly select next trivia state
	    this.selectedState = objKeys[this.randomIntFromInterval(1, objKeys.length)];
	    this.questionTrueFalse = this.randomIntFromInterval(0,1);

	    if (this.questionTrueFalse) {
	    	$("#trivia-question").html("The capital city of " + this.triviaQuestions[this.selectedState].state + " is " + this.triviaQuestions[this.selectedState].capitalCity);
	    }
		else {
			$("#trivia-question").html("The capital city of " + this.triviaQuestions[this.selectedState].state + " is " + this.triviaQuestions[this.selectedState].largestCity);
		}

		console.log("Capital or Largest:", this.questionTrueFalse);

	   	// this.questionTimeout = setTimeout(this.timedOut, 3000);
	},	

	timedOut: function() {
		clearTimeout(this.questionTimeout);
		this.numIncorrect++;	  
		$("#incorrect").html("Incorrect: " + this.numIncorrect);
	    this.nextQuestion(); 
	},

  	checkGameStatus: function(buttonVal) {

	    // Check if user numWins or losses
	    if (buttonVal == this.questionTrueFalse) {
	        this.numCorrect++;
	        $("#correct").html("Correct: " + this.numCorrect);
	        this.nextQuestion();
	    }
	    else {
	        this.numIncorrect++;	  
	        $("#incorrect").html("Incorrect: " + this.numIncorrect);
	       	this.nextQuestion();
	    }
  	},		
};

// Initialize when page loads
triviaGame.startGame();

// When page is loaded
$(document).ready(function() {

	// Process mouse click on True or False button
	$(document).on("click", "#btn-false, #btn-true", function() {

 		// Check if game was won, lost or still in play
  		triviaGame.checkGameStatus($(this).attr("value"));  
	});
});


