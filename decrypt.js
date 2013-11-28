//==========================================================================================
//  decrypt.js
//      Returns all possible word matchings for
//      a single crypto word and its matches.
//==========================================================================================
(function(){
    "use strict";
    var
        _ = require("underscore")._,
        alphabetMasterList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
        factorial = _.memoize(function(i){ return (i > 1 ? i * factorial(--i) : i); }),
        counter = 0,
        wordsFound = 0,
        getLetters = function(alphabet, uniqVector, vector, wordlist, length, word, matches){
            word = word || "";
            length = isNaN(length) ? uniqVector.length : length;
            matches = matches || [];

            _.times(length, function(index){
                var
                    itemsLeft = length - (index + 1);

                _.times(alphabet.length, function(abcIndex){
                    var
                        match, testWord,
                        alpha = _.clone(alphabet),
                        currentWord = _.clone(word);

                    currentWord += alpha.splice(abcIndex, 1)[0];
                    if (currentWord.length === uniqVector.length){
                        counter++;
                        match = {};
                        testWord = vector;
                        _.each(uniqVector, function(letter, i){
                            var
                                regEx = new RegExp(letter, "g");

                            match[letter] = currentWord[i];
                            testWord = testWord.replace(regEx, currentWord[i]);
                        });
                        match.word = testWord;
                        console.log(currentWord + ", " + testWord);
                        if (wordlist.checkWord("en", testWord)){
                            console.log("Valid Word > " + testWord);
                            matches.push(match);
                            wordsFound++;
                        }
                    }
                    getLetters(alpha, uniqVector, vector, wordlist, itemsLeft, currentWord, matches);
                });
            });

            return matches;
        },
        parse = function(word, wordlist){
            var
                inputLetters = _.uniq(word),
                combinations = factorial(alphabetMasterList.length) / factorial(alphabetMasterList.length - inputLetters.length),
                matches;

            console.log("Parsing " + word + ", " + combinations + " total combinations");
            matches = getLetters(alphabetMasterList, inputLetters, word, wordlist);
            console.log("Created " + counter + " combinations, found " + wordsFound + " valid words");
            console.log("matches: ");
            console.log(matches);

            return matches;
        };

    exports.parse = parse;
}());