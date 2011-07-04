/**
 * Input handling
 */
define(['game', 'items', 'events', 'underscore-min'],function(game, items, events) {
    var canvas = document.getElementById('c'),
        offsetX = canvas.offsetLeft,
        offsetY = canvas.offsetTop;

    /**
     * Find the item clicked on
     */
    canvas.onclick = function(evt) {
        var mouseX = evt.clientX - offsetX,
            mouseY = evt.clientY - offsetY;

        // find the item clicked on
        var item = _(game.activeItems()).select(function(item) {
            return item.x <= mouseX
                && item.y <= mouseY
                && (item.x + item.width) >= mouseX 
                && (item.y + item.height) >= mouseY;
        });

        if (item.length > 0) {
            console.log('clicked item', item[0], items[item[0].name], items);
            // get the full item from the item JSON
            item = items[item[0].name];
            events[item.click.name](item, item.click.arguments);
        }
    }
});
