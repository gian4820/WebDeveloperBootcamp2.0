const jokes = require ("give-me-a-joke");
const colors  = require ("colors");



jokes.getRandomDadJoke(function(joke2){
    console.log(joke2.rainbow);
});


