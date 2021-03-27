(function() {
    const quotes = [
      {
        quote:
          "All our dreams can come true, if we have the courage to pursue them.",
        author: "Walt Disney"
      },
      {
        quote:
          "The secret of getting ahead is getting started.",
        author: "Mark Twain"
      },
      {
        quote:
          "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese Proverb"
      },
      {
        quote: "If people are doubting how far you can go, go so far that you can’t hear them anymore.",
        author: "Michele Ruiz"
      },
      {
        quote:
          "We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes – understanding that failure is not the opposite of success, it’s part of success.",
        author: "Arianna Huffington"
      },
      {
        quote:
          "Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.",
        author: "Mary Kay Ash"
      }
    ];
  
    const btn = document.getElementById("generate-btn");
  
    btn.addEventListener("click", function() {
      let random = Math.floor(Math.random() * quotes.length);
      console.log(random);
  
      document.getElementById("quote").textContent = quotes[random].quote;
      document.querySelector(".author").textContent = quotes[random].author;
    });
  })();