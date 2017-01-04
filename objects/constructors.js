(function () {
    "use strict";
    /*global define */
    /*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
    
    function Player(name, score, rank) {
        this.name = name;
        this.score = score;
        this.rank = rank;
    }
    
    Player.prototype.logInfo = function () {
        console.log("I am: ", this.name);
    };
    
    Player.prototype.promote = function () {
        this.rank++;
        console.log("My new rank is: ", this.rank);
    };
    
    var fred = new Player("Fred", 10000, 5);
    fred.logInfo();
    fred.promote();
    
    var bob = new Player("Bob", 50, 1);
    bob.logInfo();
    bob.promote();
}());