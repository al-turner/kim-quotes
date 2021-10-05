const vueApp = new Vue({
  el: "#app",
  mounted() {
    this.myQuotes = quotes
  },
  data: {
    quote: "Hello Detective...",
    newText: false,
    usedQuotes: [],
    myQuotes: []
  },
  methods: {
    newQuote: function () {
      if (this.usedQuotes.length < this.myQuotes.length) {
        let randomQuoteNo = this.randomInt();
        if (this.usedQuotes.includes(randomQuoteNo)) {
          do {
            randomQuoteNo = this.randomInt();
          } while (this.usedQuotes.includes(randomQuoteNo));
        }
        this.usedQuotes.push(randomQuoteNo);
        return this.myQuotes[randomQuoteNo];
      } else {
        this.usedQuotes = [];
        return "Are you going to make me repeat myself?";
      }
    },
    displayQuote: function() {
      this.quote = this.newQuote();
    },
    randomInt: function() {
      return Math.floor(Math.random() * this.myQuotes.length);
    }
  },
});
