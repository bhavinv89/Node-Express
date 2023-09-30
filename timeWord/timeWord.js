function timeToWords(time) {
    const hours = parseInt(time.slice(0, 2));
    const minutes = parseInt(time.slice(3, 5));
    const ampm = hours < 12 ? "am" : "pm";
  
    const numbersToWords = [
      "twelve", "one", "two", "three", "four", "five", "six",
      "seven", "eight", "nine", "ten", "eleven", "twelve"
    ];
  
    const minuteWords = [
      "o'clock", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
      "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen",
      "eighteen", "nineteen", "twenty","twenty one","twenty two", "twenty three","twenty four", 
      "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine","thirty", "thirty one", 
      "thirty two", "thirty three", "thirty four"
    ];
  
    let hourWord = numbersToWords[hours % 12];
    let minuteWord;
  
    if (minutes === 0) {
      minuteWord = "o’clock";
      if (hours === 0) {
        return "midnight";
      } else if (hours === 12) {
        return "noon";
      }
    
    } 
    else if (minutes <=9){
      minuteWord = "oh "+ minuteWords[minutes]}
    else if (minutes <= 30) {
      minuteWord = minuteWords[minutes];
    } else {
      minuteWord = "thirty " + minuteWords[minutes % 10];
    }
  
    return `${hourWord} ${minuteWord} ${ampm}`;
  }
  
  // Test cases
  const testCases = [
    "00:00", "00:12", "01:00", "06:01", "06:10",
    "06:18", "06:30", "10:34", "12:00", "12:09", "23:23"
  ];
  
  testCases.forEach(time => {
    console.log(`${time} -> ${timeToWords(time)}`);
  });

  module.exports = { timeToWords };
  