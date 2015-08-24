
// data variables
//var text = "";
//var words = [];
var data = {
  text:"",
  words:[]
}
var initClick = function() {
  $('button').click(function() {
    data.text = $('textarea').val();
    data.words = $('textarea').val();
    data.words = data.words.replace(/\n/g, " ");
    data.words = data.words.split(" ");
    console.log(data.words);
  });
};


// TODO: when user clicks a button,
// handle the click event with a function
// that turns the textarea's contents into
// the 2 variables above, so other functionality
// can rely on those 2 variables existing.

// when given a string and a list, returns
// number of occurrences of word in list:
//   countWord( "america",["america"]);
//   => 1
var countWord = function(word, list) {
  var count = 0;

  return count;
};

var rate_patriotism = function(){
  var america_count = countWord("word", []);
  if (america_count > 3) {
    console.log("u is real patriot")
  } else {
    console.log("u is viet cong");
  }
}

$('document').ready(initClick);
