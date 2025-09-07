// A list that stores all the minutes as words
let minutesInWords = [
  "ZERo", "ONe", "TWo", "THREe", "FOUr", "FIVe", "SIx", "SEVEn", "EIGHt", "NINe",
  "TEn", "ELEVEn", "TWELVe", "THIRTEEn", "FOURTEEn", "FIFTEEn", "SIXTEEn", "SEVETEEn", "EIGHTEEn", "NINETEEn",
  "TWENTy", "TWENTY-ONe", "TWENTY-TWo", "TWENTY-THREe", "TWENTY-FOUr", "TWENTY-FIVe", "TWENTY-SIx", "TWENTY-SEVEn", "TWENTY-EIGHt", "TWENTY-NINe",
  "THIRTy", "THIRTY-ONe", "THIRTY-TWo", "THIRTY-THREe", "THIRTY-FOUr", "THIRTY-FIVe", "THIRTY-SIx", "THIRTY-SEVEn", "THIRTY-EIGHt", "THIRTY-NINe",
  "FORTy", "FORTY-ONe", "FORTY-TWo", "FORTY-THREe", "FORTY-FOUr", "FORTY-FIVe", "FORTY-SIx", "FORTY-SEVEn", "FORTY-EIGHt", "FORTY-NINe",
  "FIFTy", "FIFTY-ONe", "FIFTY-TWo", "FIFTY-THREe", "FIFTY-FOUr", "FIFTY-FIVe", "FIFTY-SIx", "FIFTY-SEVEn", "FIFTY-EIGHt", "FIFTY-NINe"
];

// a LIST THAT STORES ALL THE SECONDS IN ROMAL NUMERALS
let secsInWords = [
  "0", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX",
  "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVII", "XIX",
  "XX", "XXI", "XXII", "XXIII", "XXIV", "XXV", "XXVI", "XXVII", "XXVIII", "XXIX",
  "XXX", "XXXI", "XXXII", "XXXIII", "XXXIV", "XXXV", "XXXVI", "XXXVII", "XXXVIII", "XXXIX",
  "XL", "XLI", "XLII", "XLIII", "XLIV", "XLV", "XLVI", "XLVII", "XLVIII", "XLIX",
  "L", "LI", "LII", "LIII", "LIV", "LV", "LVI", "LVII", "LVIII", "LIX"
];

function setup() {
  createCanvas(600, 600); // creates a large canvas 
}

function draw() {
  //sets the background color to the 7 eleven green
  background(0,129,99);
  //creates a white trapezoid with no borders.
  fill(255);
  noStroke();
  quad(50, 50, 550, 50, 500,  550, 100, 550);
  
  //  3 variables are created to get the current time in hours, minutes, and seconds. 
  let hours = hour();
  let minutes = minute();
  let seconds = second();
  
  // formats the console to display hours in hh ( used  help of AI  in order to create a string variable that displays both a string and integer, )
  let hrs = `${nf(hours, 2)}`;
  
  //displays the current hr in the console
  console.log(hrs);
  
  fill(20+(10*hours), 0, 0);//number becomes more red for every hrs/ resets to a blackish color when hour hits 0 again after looping to 30
  textSize(500);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  textFont('Arial');
  // Display the hour on the canvas
  text(`${hours}`, width / 2, height / 2)// display the hour number
  
  rectMode(CENTER); // creates a new  smaller rectangle that will be used to display the minutes, (note that the fill color is white and there is no borders to give a 7-eleven inspired look) 
  fill(255);
  noStroke();//removes border
  rect(width / 2, height / 2, 445, 125);
  
  let minuteAsWord = minutesInWords[minutes];
  fill(0,(129/59)* minutes,(99/59) * minutes);// becomes more green every minute , resets back to black once minutes resets to 0      
  textSize(80);
  textFont('Impact');
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(minuteAsWord + "", width / 2, height / 2)// displays the minutes as a word
  
  fill(80);
  rect(width / 2,500, 200, 50);// creates a smaller rectangle in the bottom
  
  let secsAsWord =  secsInWords[seconds];
  fill((255/59) * seconds,(165/59) * seconds,0); // becomes more orange as seconds increases, resets back to black once seconds resets to 0      
  textFont('Times New Roman');
  textSize(50);
  text(secsAsWord + "",300,500);// displays the seconds as roman numerals
  
  textSize(21);
  fill(67);
  text(`${nf(hours, 2)}` + ":" + `${nf(minutes, 2)}` + ":" + `${nf(seconds, 2)}`,50,10); //displays actual time in the corner
}