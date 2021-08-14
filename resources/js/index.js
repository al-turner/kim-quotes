let quoteHolder = document.getElementById("quoteHolder");
let dialogue = document.getElementById("dialogue");
let quoteSelector = document.getElementById("quoteSelector");
let usedQuotes = [];

const randomInt = () => Math.floor(Math.random() * myQuotes.length);

newQuote = () => {
  if (usedQuotes.length < myQuotes.length) {
    let randomQuoteNo = randomInt();
    if (usedQuotes.includes(randomQuoteNo)) {
      do {
        randomQuoteNo = randomInt();
      } while (usedQuotes.includes(randomQuoteNo));
    }
    usedQuotes.push(randomQuoteNo);
    return myQuotes[randomQuoteNo];
  } else return undefined;
};

function displayQuote(quote) {
  dialogue.classList.add("text-load");
  if (quote != undefined) {
    quoteHolder.innerHTML = quote;
  } else quoteHolder.innerHTML = "I have nothing else to say...";
}

quoteSelector.addEventListener(
  "click",
  function () {
    displayQuote(newQuote());
  },
  false
);
dialogue.addEventListener(
  "animationend",
  function () {
    dialogue.classList.remove("text-load");
  },
  false
);
