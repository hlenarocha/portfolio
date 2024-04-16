function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


var quotes = [
  "<html>\"<em>Nothing is impossible.</em> The word itself says 'I'm possible!'\" <br>— Audrey Hepburn</html>",
  "<html>\"<em>The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty.</em>\" <br>- Winston Churchill</html>",
  "<html>\"<em>The bad news is time flies. The good news is you're the pilot.</em>\" <br>– Michael Altshuler</html>",
  "<html>\"<em>It's no use going back to yesterday because I was a different person then.</em>\" <br>– Alice, Alice In Wonderland</html>",
  "<html>\"<em>Learn as if you will live forever, live like you will die tomorrow.</em>\" <br>— Mahatma Gandhi</html>",
  "<html>\"<em>All our dreams can come true if we have the courage to pursue them.</em>\" <br>- Walt Disney</html>",
  "<html>\"<em>Perfection is not attainable, but if we chase perfection we can catch excellence.</em>\" <br>— Vince Lombardi</html>",
  "<html>\"<em>The best way to get started is to quit talking and begin doing.</em>\" <br>― Walt Disney</html>",
  "<html>\"<em>Don't Let Yesterday Take Up Too Much Of Today.</em>\" <br>– Will Rogers</html>",
  "<html>\"<em>Doing the best at this moment puts you in the best place for the next moment.</em>\" <br>― Oprah Winfrey</html>",
  "<html>\"<em>Believe you can and you're halfway there</em>.\" <br>— Theodore Roosevelt</html>",
  "<html>\"<em>The only way to do great work is to love what you do.</em>\" <br>— Steve Jobs</html>"

]



function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.querySelector(".quote-display").innerHTML = quotes[randomNumber];

}

window.onload(newQuote());