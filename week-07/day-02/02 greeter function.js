'use strict';
// - Create variable named `al` and assign the value `Greenfox` to it
// - Create a function called `greet` that greets it's input parameter
//     - Greeting is printing e.g. `Greetings, dear Greenfox`
//     - Prepare for the special case when no parameters are given
// - Greet `al`

const al = 'Greenfox';

function greet(welcome) {
  welcome != undefined ? console.log(`Greeting, dear ${welcome}`) :
  console.log('Give some parameter!!!!');
}

greet(al);
greet();