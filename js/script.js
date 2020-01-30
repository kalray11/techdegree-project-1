/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes =  [
  {
    quote: "Defining myself, as opposed to being defined by others, is one of the most difficult challenges I face." ,
    source: "Carol Moseley-Braun, politician and lawyer" ,
    citation: "AZQuotes.com. Wind and Fly LTD, 2020. 30 January 2020. https://www.azquotes.com/quote/523549",
    year: 2020
  },
  {
    quote: "Never be limited by other people’s limited imaginations.",
    source: "Dr. Mae Jemison, first African-American female astronaut",
    citation: "Annual Biomedical Research Conference for Minority Students",
    year: 2009
  },
  {
    quote: "If everything was perfect, you would never learn and you would never grow.",
    source: "Beyonce Knowles",
    citation: '"New Again: Destiny’s Child". Interview with Suzanne Hodges and Lorraine Bracco, www.interviewmagazine.com."',
    year: 2013
  },
  {
    quote: "As long as we are not ourselves, we will try to be what other people are.",
    source: "Malidoma Patrice Somé ",
    citation: "Of Water and the Spirit: Ritual, Magic, and Initiation in the Life of an African Shaman",
    year: 1995
  },
  {
    quote: "If you have no confidence in self, you are twice defeated in the race of life.",
    source: "Marcus Garvey",
    citation: "hilosophy and opinions of Marcus Garvey: or, Africa for the Africans‎",
    year: 1967
  }
];


/***
 * `getRandomQuote` function
***/
const getRandomQuote = (array) => {
  let randomNumber = Math.floor(Math.random() * array.length)
  return array[randomNumber];
}

/***
 * `printQuote` function
***/
let html = '';
let printQuote = () => {
  let randomQuote = getRandomQuote(quotes);
  html += '<p class="quote">' + randomQuote.quote + '</p>';
  html += '<p class="source">' + randomQuote.source; 
  html += '</p>';
  return html;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('quote-box').innerHTML = printQuote;
document.getElementById('load-quote').addEventListener("click", printQuote, false);

