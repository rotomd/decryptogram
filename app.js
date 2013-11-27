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
        alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
        args = process.argv;

    _.each(args, function(item, i){
        if (item === "-solve" && i < args.length){
            vector = args[i+1];
        }
    });

    console.log(vector);
    if (vector){
        vector = vector.toLowerCase();
        wordlist.init("en", function(){

        });
    }
}());