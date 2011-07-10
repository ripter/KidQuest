/**
 * Input handling
 */
define(['game', 'items', 'events', 'player', 'underscore-min'],function(game, items, events, player) {
    var canvas = document.getElementById('c'),
        offsetX = canvas.offsetLeft,
        offsetY = canvas.offsetTop;

    /**
     * Find the item clicked on
     */
    canvas.onclick = function(evt) {
        var mouseX = evt.clientX - offsetX,
            mouseY = evt.clientY - offsetY;

        // move the player to the location
        player.moveTo({x: mouseX, y: mouseY});

        // find the item clicked on
        var item = _(game.activeItems()).select(function(item) {
            return item.x <= mouseX
                && item.y <= mouseY
                && (item.x + items[item.name].width) >= mouseX 
                && (item.y + items[item.name].height) >= mouseY;
        });

        if (item.length > 0) {
            // get the full item from the item JSON
            item = items[item[0].name];
            events[item.click.name](item, item.click.arguments);
        }
    }
});
