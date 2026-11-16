import { isValid } from './braces.js';

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
console.log(isValid(""));
console.log(isValid("((("));
console.log(isValid(")))"));
