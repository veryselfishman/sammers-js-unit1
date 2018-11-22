/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random --Movie-- Quote Generator
by Sammers

Hoping to Exceed Expectations!
******************************************/

// Some classic quotes from classic films (extra properties for extra credit :-) )

let quotes = [
  {
    quote: 'Nine million terrorists in the world and I gotta kill the one with smaller feet than my sister.',
    source: 'John McClane',
    actor: 'Bruce Willis',
    film: 'Die Hard',
    year: 1988,
  },
  {
    quote: 'If it bleeds, we can kill it',
    source: 'Dutch',
    actor: 'Arnold Schwarzenegger',
    film: 'Predator',
    year: 1987,
  },
  {
    quote: 'Welcome to the party, pal.',
    source: 'John McClane',
    actor: 'Bruce Willis',
    film: 'Die Hard',
    year: 1988,
  },
  {
    quote: 'They drew first blood, not me.',
    source: 'John Rambo',
    actor: 'Sylvester Stallone',
    film: 'First Blood',
    year: 1982,
  },
  {
    quote: 'Zed&rsquo;s dead baby, Zed&rsquo;s dead.',
    source: 'Butch Coolidge',
    actor: 'Bruce Willis',
    film: 'Pulp Fiction',
    year: 1994,
  },
  {
    quote: 'It&rsquo;s a very mean and nasty place and I don&rsquo;t care how tough you are it will beat you to your knees and keep you there permanently if you let it. You, me, or nobody is gonna hit as hard as life. But it ain&rsquo;t about how hard ya hit. It&rsquo;s about how hard you can get hit and keep moving forward.',
    source: 'Rocky Balboa',
    actor: 'Sylvester Stallone',
    film: 'Rocky Balboa',
    year: 2006
  },
  {
    quote: 'It&rsquo;s not a tumour!',
    source: 'John Kimble',
    actor: 'Arnold Schwarzenegger',
    film: 'Kindergarten Cop',
    year: 1990,
  },
  {
    quote: 'Come with me if you want to live',
    source: 'T100',
    actor: 'Arnold Schwarzenegger',
    film: 'T2: Judgement Day',
    year: 1991,
  },
]



// function that pulls a random object from the array in parenthesis
function getRandomQuote() {
  //work out how many quotes there are
  let max = quotes.length - 1;
  //generate a random number between 0 and total number of quotes less 1
  let randomNum = Math.round(Math.random()*max);
  //locate quote from array and return it.
  return quotes[randomNum];
}

// function random colour Generator
// Max random number is 155 so colour is not too light for text to be hard to read
function randomColour() {
  let rgb = [];
  for(let i=1; i<4;i++) {
    rgb.push(Math.round(Math.random()*155));
  }
  return 'rgb(' + rgb.join(', ') + ')';
}


//printQuote Function
function printQuote() {
  let quote = getRandomQuote(quotes);
  let content = '';
  //if the quote is long then add an extra class to the p.quote element that makes the font smaller
  let quoteClass = 'quote';
  if(quote.quote.length > 50) {
    quoteClass += ' quote-long';
  }
  content = '<p class="' + quoteClass + '">' + quote.quote + '</p>';
  content += '<p class="source">' + quote.source;
  //If the quote is from a film, add the citation
  if(quote.film) {
    content += '<span class="citation">' + quote.film + '</span>';
  }
  //If the release year is present, add it to the citation
  if(quote.year) {
    content += '<span class="year">' + quote.year + '</span>';
  }
  content += '</p>';
  // Replace element
  document.getElementById('quote-box').innerHTML=content;

  /***
    Extra Credit - random background colour
    property courtesy of W3schools.com
  ***/
  document.body.style.backgroundColor = randomColour();

  // Just for fun - add background image from actor object
  // Replace spaces with dashes courtesy of Stackoverflow:
  // https://stackoverflow.com/questions/1983648/replace-spaces-with-dashes-and-make-all-letters-lower-case
  let img = quote.actor.replace(/\s+/g, '-').toLowerCase();
  document.body.style.backgroundImage = "url('img/" + img + ".png')";

}

// Run the function to replace the quote in index.html
printQuote();





/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
