// Javascript for Database sign in
var div = document.querySelector('#news');
var button = document.querySelector('#button');

var database = [
  {
    username: "jon",
    password: "supersecret"
  },
  {
    username: "sally",
    password: "123"
  },
  {
    username: "sam",
    password: "777"
  }
];

var newsfeed = [
  {
    username: "Bobby",
    timeline: "Learning javascipt is hard work!"
  },
  {
    username: "Sally",
    timeline: "Javascript is sooooo cool!"
  },
  {
    username: "Michael",
    timeline: "It's a nice day out!"
  }
];

function isUserValid(username, password) {
  for (var i=0; i < database.length; i++) {
    if (database[i].username === username &&
      (database[i].password === password)) {
      return true;
      } 
    }
    return false;
  }

function signIn(username, password) {
  if (isUserValid(username, password)) {
    showFeed();
  } else{
    alert("Sorry, wrong username and password");
  }
}

function showFeed() {
  for (var i=0; i < newsfeed.length; i++) {
    var name = newsfeed[i].username;
    var status = newsfeed[i].timeline;

    var paragraph = document.createElement('p');
    paragraph.innerHTML = name + ": " + status;
    div.appendChild(paragraph);

  }

}

button.addEventListener("click", function () {
    var userNamePrompt = prompt("What\'s your username?");
    var passwordPrompt = prompt("what\'s your password?");
    signIn(userNamePrompt, passwordPrompt);
});

