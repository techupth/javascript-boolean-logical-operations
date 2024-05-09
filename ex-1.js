// Exercise #1: Event Conditions
// Start coding here
let isOver18 = true ;
let hasCriminalBlacklist = false;
let isAllow = true;

isAllow = ((isOver18 && hasCriminalBlacklist) || isAllow);
console.log(isAllow);
