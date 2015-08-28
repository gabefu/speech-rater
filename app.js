
// data variables
//var text = "";
//var words = [];
var data = {
  text:"",
  words:[]
}

// turns text into an array... disabled $('document').ready(initClick)

//var initClick = function() {
//  $('button').click(function() {
//    data.text = $('textarea').val();
//    data.words = $('textarea').val();
//    data.words = data.words.replace(/\n/g, " ");
//    data.words = data.words.split(" ");
//    console.log(data.words);
//  });
//};

var initClickalt = function() {
  $('button').click(function() {
    var currentText = $('textarea').val();
    var americaCount = currentText.split("america").length -1;
    var americaCaps = currentText.split("America").length -1;
    var totAmericas = americaCount + americaCaps;
    if (totAmericas > 2) {
      alert("u is real patriot")
    } else {
      alert("I dont even know what country u in dawg!")
    }
    if (currentText.length > 140) {
      alert("...and you long-winded bro!")
    }
  });
};

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

//$('document').ready(initClick);
$('document').ready(initClickalt);
