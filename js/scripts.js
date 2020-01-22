$(document).ready(function() {
  $("form").submit(function(event) {
    var sentence= $("#wordplay").val();
    var words= sentence.split(' ');
    console.log(words[2]);
    event.preventDefault();

    var longwords= []
    words.forEach(function(word) {
      if (word.length>2) {
        longwords.push(word);
        console.log(longwords)
      }
    });
  });
});
