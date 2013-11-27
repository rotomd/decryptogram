//==========================================================================================
//  decrypt.js
//      Returns all possible word matchings for
//      a single crypto word and its matches.
//==========================================================================================
(function(){
    "use strict";
    var
        wordlist = require("wordlist"),
        _ = require("underscore")._,
        //alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
        factorial = _.memoize(function(i){ return (i > 1 ? i * factorial(--i) : i); }),
        getLetters = function(inputLetters, alphabet, match, matches){
            match = match || {};
            matches = matches || [];

            _.times(alphabet.length, function(i){
                var
                    word,
                    letter = alphabet.splice(0, 1);

                if (inputLetters.length > 1){
                    match[inputLetters.splice(0,1)] = letter;
                    getLetters(inputLetters, alphabet, match, matches);
                }else{
                    match[inputLetters[0]] = letter;
                    matches.push(match);
                }
            });

            return matches;
        },
        parse = function(word){
            var
                inputLetters = _.uniq(s),
                combinations = factorial(alphabet.length) / factorial(alphabet.length - inputLetters.length),
                matches = [];

            console.log("Parsing " + word + ", " + combinations " total combinations");
            wordlist.init("en", function(){
                var

                    location = 0;

                _.times(26, function(rootIndex){
                    var
                        alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
                        letterPicks = {};
                });
            });
        };

    exports.parse = parse;
}());