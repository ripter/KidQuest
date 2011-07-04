/**
 * Input handling
 */
define(['game', 'underscore-min'],function(game) {
    var canvas = document.getElementById('c'),
        offsetX = canvas.offsetLeft,
        offsetY = canvas.offsetTop;

    /**
     * Handles Keydown Events
     */
    document.onkeydown = function(evt) {
        console.log('keydown', evt);
    }

    canvas.onclick = function(evt) {
        var mouseX = evt.clientX - offsetX,
            mouseY = evt.clientY - offsetY;

        console.log('click', evt, mouseX, mouseY, 'canvas', this);
        // find the item clicked on
        var item = _(game.activeItems()).select(function(item) {
            return item.x <= mouseX
                && item.y <= mouseY
                && (item.x + item.width) >= mouseX 
                && (item.y + item.height) >= mouseY;
        });

        console.log('clicked item', item);
    }
});
