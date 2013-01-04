/*!
Deck JS - deck.remotes
Copyright (c) 2013 Philip Nuzhnyi
*/

(function($, deck, undefined) {
    var $d = $(document),
    remotesLibPath = 'https://raw.github.com/Remotes/Remotes/master/dist/remotes.ne.min.js';
    
    Modernizr.load([
        {
            load: remotesLibPath,
            complete: function () {
                new Remotes("preview")
                    .on("swipe-left", function(e){ $[deck]('next'); })
                    .on("swipe-right", function(e){ $[deck]('prev'); })
                    .on("tap", function(e){ $[deck]('next'); });
            }
        }
    ]);

})(jQuery, 'deck');

