/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
Array of quotes including source, citation and year
***/
const quotes =  [
  {
    quote: "Defining myself, as opposed to being defined by others, is one of the most difficult challenges I face." ,
    source: "Carol Moseley-Braun, politician and lawyer" ,
    citation: "AZQuotes.com. Wind and Fly LTD, 2020. 30 January 2020. https://www.azquotes.com/quote/523549",
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
    citation: '"New Again: Destiny’s Child" Interview with Suzanne Hodges and Lorraine Bracco, www.interviewmagazine.com"',
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
    citation: "Philosophy and opinions of Marcus Garvey: or, Africa for the Africans‎",
    year: 1967
  }
];

/***
Pulls a random quote from quotes array
***/
const getRandomQuote = (array) => {
  let randomNumber = Math.floor(Math.random() * array.length)
  return array[randomNumber];
}

/***
Prints quote to page when the 'show another quote" button is clicked
***/

const printQuote = () => {
  const randomQuote = getRandomQuote(quotes);
  let html = '';
  html += `
  <p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}`
  if (randomQuote.citation) {
    html += `<span class="citation">${randomQuote.citation}</span>`
  } if (randomQuote.year) {
    html += `<span class="year">${randomQuote.year}</span>`
  }
  html += `</p>`;
  document.getElementById('quote-box').innerHTML = html;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

