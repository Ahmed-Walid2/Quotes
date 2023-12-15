var quotesList = [
  {
    quote:
      " “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ",
    name: " ― Albert Einstein ",
    img: `<img src="imgs/albert.jpg" alt="albert" class="rounded-circle img-fluid" />
    `,
  },
  {
    quote: " “Always forgive your enemies; nothing annoys them so much.” ",
    name: " ― Oscar Wilde ",
    img: `<img src="imgs/oscar.jpg" alt="oscar" class="rounded-circle img-fluid" />
    `,
  },
  {
    quote: " “So many books, so little time.” ",
    name: " ― Frank Zappa ",
    img: `<img src="imgs/frank.jpg" alt="frank" class="rounded-circle img-fluid" />
    `,
  },
  {
    quote:
      " “You know you're in love when you can't fall asleep because reality is finally better than your dreams.” ",
    name: " ― Dr. Seuss ",
    img: `<img src="imgs/dr.jpg" alt="dr. seuss" class="rounded-circle img-fluid" />
    `,
  },
  {
    quote: " “If you tell the truth, you don't have to remember anything.” ",
    name: " ― Mark Twain  ",
    img: `<img src="imgs/mark.jpg" alt="mark" class="rounded-circle img-fluid" />
    `,
  },
  {
    quote: " “Without music, life would be a mistake.” ",
    name: " ― Friedrich Nietzsche ",
    img: `<img src="imgs/fried.jpg" alt="Friedrich Nietzsche" class="rounded-circle img-fluid" />
    `,
  },
];

var index = 1;

function addQuote() {
  var randomQuote;
  do {
    randomQuote = Math.floor(Math.random() * quotesList.length);
  } while (randomQuote == index);
  index = randomQuote;

  document.getElementById("quotecontent").innerHTML =
    quotesList[randomQuote].quote;
  document.getElementById("name").innerHTML = quotesList[randomQuote].name;
  document.getElementById("img").innerHTML = quotesList[randomQuote].img;
}
