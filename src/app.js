const yargs = require('yargs');

const input = yargs.argv;
// console.log(yargs.argv.actor);
// console.log(yargs.argv.filmTitle);

if (input.actor) {
    console.log(`${input.actor} is in the film ${input.filmTitle}`)
}