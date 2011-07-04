/**
 * Events from clicking on items
 */
define(['game'], function(game) {

    return {
        /**
         * Changes the scene
         */
        changeScene: function(item, arg) {
            // simple change of scene
            console.log('arg', arg);
            game.setActiveScene(arg);
        }
    };
});
