/**
 * FPS module
 */
define(function() {
    var count = 0,
        time = 0,
        text = 0;

    return {
        showFPS: function(context, dt) {
            count++;
            time += dt;

            //Display it
            context.fillStyle = '#000';
            context.font = '9px monospace';
            context.fillText('FPS: ' + text, 10, 20);

            if (time > 1000) {
                text = count;
                count = time = 0;
            }
        }
    };
});
