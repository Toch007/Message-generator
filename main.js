// First define array of inspirational quotes 
const quotes = [
  "Believe you can and you're halfway there.",
  "The only way to do great work is to love what you do.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "The journey of a thousand miles begins with a single step.",
  "In the middle of difficulty lies opportunity.",
  "The best way to predict the future is to create it.",
];

// Then declare an array of authors to match the quotes
const authors = [
  "Theodore Roosevelt",
  "Steve Jobs",
  "Eleanor Roosevelt",
  "Winston Churchill",
  "Lao Tzu",
  "Albert Einstein",
  "Peter Drucker",
];

// Also an array of themes to that goes inline with the quotes
const themes = [
  "Perseverance",
  "Hard work",
  "Creativity",
  "Success",
  "Opportunity",
  "Growth",
  "Wisdom",
];

// Create a function to generate Random Index
const randomIndex = (array) => Math.floor(Math.random() * array.length);

// Create a function for Generating Random Inspirational Messages 
const generateMessage = () => {
  //generate random indices for quotes.
  const index = randomIndex(quotes);
  

  // use random indices to select quote, authors and themes using array indexing in a manner that the selection is uniformed
  const quote = quotes[index];
  const author = authors[index];
  const theme = themes[index];
  
  return `Theme for the day: ${theme}\n\n"${quote}"\n- ${author}`

}
console.log(generateMessage())
