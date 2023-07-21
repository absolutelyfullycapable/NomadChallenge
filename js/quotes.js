const quotes = [
  {
    quotes: "With great power comes great responsibility.",
    author: "Spiderman",
  },
  {
    quotes: "It's still you inside of it.",
    author: "Betty Ross",
  },
  {
    quotes: "Hope is the greatest of the gifts well receive.",
    author: "Belle",
  },
  {
    quotes: "Because when I look at you, I can feel it. And I look at you and I'm home.",
    author: "Dory",
  },
  {
    quotes: "My dream wouldn't be complete without you in it.",
    author: "Princess Tiana",
  },
  {
    quotes: "Love is putting someone else's needs before yours.",
    author: "Olaf",
  },
  {
    quotes: "Whatever gift awaits will be just as special as you.",
    author: "Encanto",
  },
  {
    quotes: "You control your destiny. You don't need magic to do it.",
    author: "Merida",
  },
  {
    quotes: "The very things that hold you down are going to lift you up.",
    author: "Dumbo",
  },
  {
    quotes: "If you keep on believing the dream that you wish will come true.",
    author: "Cinderella",
  }
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;
