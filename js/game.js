/**
 * Game object
 */
define(['scenes'], function(scenes) {
    var activeScene = scenes.homeBedroomMC;

    return {
        /**
         * Loads all game related images
         */
        loadImages: function() {
            var prop;
            for(prop in scenes) {
                scenes[prop].img = document.createElement('img');
                scenes[prop].img.src = scenes[prop].src;
            }
        },
        /**
         * Draws the active scene, which then draws any elements in that scene
         */
        draw: function(canvas) {
            //console.log(activeScene);
            // draw the background
            canvas.drawImage(activeScene.img, 0, 0);
        }
    }
});
