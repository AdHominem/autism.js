"use strict";

// not really a functor since it's not generic!
function stringFunctor(value, fn) {
    return value.split("").map((char) => String.fromCharCode(fn(char.charCodeAt(0)))).join("");
}

console.log(stringFunctor("ABC", (value) => value + 1));
