require(['underscore-min','game'], function(underscore, game) {
    require.ready(function() {
        var canvas = document.getElementById('c'),
            context = canvas.getContext('2d'),
            interval_id,
            frame = 0,
            dt = 0,
            last_frame = +new Date(),
            fps = {count: 0, time: 0, text:''};
        
        
        /**
         * Calculates and Displays the Frames per Second
         * @param {CanvasRenderingContext2D} context The Context to draw on.
         * @param {Number} dt the delta time since the last frame.
         */
        function FPS(context, dt) {
            //Increment the counts
            fps.count++;
            fps.time += dt;
            //Display it
            context.fillStyle = '#000';
            context.font = '9px monospace';
            context.fillText('FPS: ' + fps.text, 10, 20);

            //Calculate the next FPS
            if (fps.time > 1000) {
                fps.text = fps.count;
                fps.count = 0;
                fps.time = 0;
            }
        }


        // load the game images
        game.loadImages();


        // The Game Loop
        interval_id = setInterval(function() {
            //Get the Delta Time
            frame = +new Date();
            dt = frame - last_frame;
            last_frame = frame;
            

            // draw the game!
            game.draw(context);


            
            FPS(context, dt);
        }, 34);
        
                
    });
});
