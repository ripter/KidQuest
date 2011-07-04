/**
 * Game object
 */
define(['scenes','items'], function(scenes, items) {
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
            for(prop in items) {
                items[prop].img = document.createElement('img');
                items[prop].img.src = items[prop].src;
            }
        },
        /**
         * Draws the active scene, which then draws any elements in that scene
         */
        draw: function(canvas) {
            var i = 0,
                item;

            //console.log(activeScene);
            // draw the background
            canvas.drawImage(activeScene.img, 0, 0);
            // draw all of the items
            i = activeScene.items.length;
            while(i--) {
                item = activeScene.items[i];
                canvas.drawImage(items[item.name].img, item.x, item.y, item.height, item.width);
            }
        }
    }
});
