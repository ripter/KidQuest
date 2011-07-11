/**
 * The Menu System
 */
define([], function() {
    var img;

    return {
        /**
         * Loads image
         */
        loadImages: function() {
            img = document.createElement('img');
            img.src = 'img/menu.png'; 
 
        },
        /**
         * Draws the menu
         */
        draw: function(context) {
            context.drawImage(img, 0, 704, 1024, 64); 
        }
    }
});
