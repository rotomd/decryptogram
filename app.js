//==========================================================================================
//  app.js
//      Main entry point for the decrypt app.
//==========================================================================================
(function(){
    "use strict";

    var        
        vector,
        wordlist = require("wordlist"),
        _ = require("underscore")._,
        decrypt = require("./decrypt.js"),
        alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
        args = process.argv;


    // just for testing.. will be removed later
    var
        inputWord = "zfmebopzobbk";
        //inputWord = "xyyx"; 

    console.log("Loading dictionary");
    wordlist.addLanguage("en", "./wordlists/", function(){
        console.log("Dictionary loaded");
        console.log("getting matches for " + inputWord);
        decrypt.parse(inputWord, wordlist);
    });
}());