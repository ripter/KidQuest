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
         * Returns the active items in the active scene
         */
        activeItems: function() {
            return activeScene.items;
        },
        /**
         * Sets the active scene
         */
        setActiveScene: function(scene_name) {
            console.log('scene_name', scene_name, 'scene', scenes[scene_name]);
            if (undefined == scenes[scene_name]) {
                throw "Scene was invalid";
            }
            activeScene = scenes[scene_name];
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
            if (undefined != activeScene.items) {
                i = activeScene.items.length;
                while(i--) {
                    item = activeScene.items[i];
                    canvas.drawImage(items[item.name].img, item.x, item.y, item.height, item.width);
                }
            }
        }
    }
});
