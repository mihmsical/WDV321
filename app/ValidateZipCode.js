// JavaScript Document

var ValidateZipCode = function(inZip){
  this.inZip = inZip;
};

ValidateZipCode.prototype.validateZip = function() {
  //our code goes here

  if(this.inZip === ""){
    return "Please enter a number";
  }

  //if(this.inZip = "00000"){
  //  return "Not a valid zip code";
  //}

  const numberType = parseInt(this.inZip);
  if(isNaN(numberType)){
    return "Please enter a number";
  }
	
  if(this.inZip.length == 5 & numberType <= 500 & numberType >= 10 || numberType >= 99950){
    return "Not a valid zip code";
  }

  if(this.inZip.length != 5 & numberType <= 501){
    return "Please enter a five digit zip code";
  }
	
  if(this.inZip === "00000"){
	  return "Not a valid zip code";
  }
	
  if(this.inZip != numberType || numberType <= 9){
	  return "Please enter 0-9";
  }

  return "Valid";
};

module.exports = ValidateZipCode;


/*
WDV321 Advanced Javascript 

TDD - Example

Define the process and assumptions 
	Validate the zip code field of a form
	Return a customized string message for errors
	Output will be used to display an error message to user on the form as they work
	Will only accept 5 digit zip codes

Our expectations:

Input				Expected Output

a					"Please enter a number"
fredd				"Please enter a number"		in general no string data allowed
" "					"Please enter a number"
-					"Please enter a number"
0					"Please enter a five digit zip code"
00					"Please enter a five digit zip code"
00000				"Not a valid zip code"
501					"Please enter a five digit zip code"
00501				"Valid"
<00500				"Not a valid zip code"
>99950				"Not a valid zip code"
1					"Please enter a five digit zip code"
123					"Please enter five digits"			
null				"Please enter a number"
t3st				"Please enter a five digit zip code"
"INSERT INTO"		"Please enter a number"
4-5-2				"Please enter 0-9"
+++++				"Please enter 0-9"
1234A				"Please enter 0-9"
undefined			"Please enter a number"
*/
