// Q1. Create a variable called `denzel` - that can't be redeclared - and assign it the string 'please denzel, help me'
const denzel = "please denzel, help me";

// Q2. Use the variable `actor` to create a new variable called `inspirational` that is assigned the string "Is Denzel Washington an inspirational actor?"
const actor = 'Denzel Washington';

const inspirational = `Is ${actor} an inspirational actor?`;

// Q3  Create an object called `family` and give it the following properties:
// family has been `married` on "1983" (Number)
// family is not `presidentOfTheUnitedStates` (boolean)
// family has `children` called "John David", "Katia", "Olivia" and "Malcolm" (array of strings)
const family = {
  married: 1983,
  presidentOfTheUnitedStates: false,
  children: ["John David", "Katia", "Olivia", "Malcolm"]
};

// Q4. Change
// * the `name` stage to "A Raisin in the Sun"
// * the `year` stage to "2014"
// by using the dot notation
const stage = {
  'name': 'Fences',
  'year': '2010'
};

stage.name = "A Raisin in the Sun";
stage.year = "2014";

// Q5. Change the `movie` "glory" to "Training Day" using square bracket notation
const awards = {
  'movie': 'glory'
};

awards["movie"] = "Training Day";

// Q6. Create an object called "earlywork"
// The key should be the movie name and the value the release year
// Movies are
// * Carbon Copy (1981)
// * A Soldier Story (1984)
// * Power (1986)
// * Cry Freedom (1987)
// * For Queen and Countryy (1988)

const earlywork = {
  "Carbon Copy": 1981,
  "A Soldier Story": 1984,
  "Power": 1986,
  "Cry Freedom": 1987,
  "For Queen and Countryy": 1988
};

// Q7. Return a new array from `debaters` with all item in uppercase
const debaters = ['we do', 'what we have to do', 'in order to do', 'what we want to do'];

const debatersUpper = debaters.map(x => x.toUpperCase());

// Q8. Using this array.
// Do the following 5 steps
const directors = ['spikelee', 'ridleyscott', 'zemeckis'];

// 1. add "tonyscott" value to the end of `directors` array
directors.push("tonyscott");

// 2. remove "spikelee" value and store it in a variable called firstDirector
const firstDirector = directors.shift();

// 3. add "himself" value to the start of `directors` array
directors.unshift("himself");

// 4. remove "ridleyscott" value from the array and store it in a variable called secondDirector
const secondDirector = directors.splice(1, 1)[0];

// 5. let 'zemeckis' in the array but put a copy of it on a variable called thirdDirector
const thirdDirector = directors[1];


// Q9. Write the function `duplicate` that return the expected result
console.log(duplicate(['Happily', 'Ever', 'After', 'Fairy', 'Tales', 'for', 'Every', 'Child']));
// ❯ ['Happily', 'Ever', 'After', 'Fairy', 'Tales', 'for', 'Every', 'Child', 'Happily', 'Ever', 'After', 'Fairy', 'Tales', 'for', 'Every', 'Child']
const duplicate = array => {
  array.map(x => array.push(x));
  return array;
}

// Q10. Refactor the current ES5-style function `police` in ES6-style.
const police = names => {
  const results = [];

  for(const name of names) {
    results.push(name + 'I am happy');
  }
  return results;
};

const quotes = ['When I success my exams i am:  ', 'If have a good mark in Web App '];

console.log(police(quotes));
 // ❯ ['When I success my exams i am... I am happy', 'If have a good mark in Web App I am happy '];


// Q12. Related to the https://www.tvmaze.com/people/66167/denzel-washington link
// How many http requests are performed to render the page?

// There is 40 requests

// Q13. Related to the following api call with "curl"
// ❯ curl "http://api.tvmaze.com/people/6616"
// Could you describe and explain the response?

// It returns the informations about an actor and its infos it stocks in a json

// Q14. Refactor the following codebase with a promise notation
const promise1 = new Promise((filePath) => {

});

fs.readFile(filePath, function(err, data) {
  if (err) {
    // handle the error, the return is important here
    // so execution stops here
    return console.log(err)
  }
  // use the data object
  console.log(data)
})


// Q16. Give me at least 3 memorable websites that engage to continue (because of nice UX/UI AND avoid to give me facebook, airbnb etc...)
//https://yuka.io the application especialy
//https://www.reserveamerica.com
//https://www.lemonde.fr


// Q17. Describe an ESILV project that you worked on that you’re proud of?
//The PING, it was a really complete project, we had to work on a "real project", a website who be usefull for the next presidential election

// Q18. Describe an ESILV project that you worked on that you’re not so proud of?
// My WebApp project, this year was difficult for me and i didn't make it  not because it was not interesting but just because i didn't knew this langage, but i had to learn it for  the
// catching up exam

// Q19. What are some things you like about the developer tools you use?
// When there is autocompletion, when it's quite easy to use

// Q20. Last question: could you explain me - in your terms - why the title of the course is "Web Application Architecture(s)" and not "Web Application Architecture"?
// It's like mathematics there is many discipline inside, it's very varied
