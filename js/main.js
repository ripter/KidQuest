require(['game', 'fps', 'input'], function(game, fps) {
    require.ready(function() {
        var canvas = document.getElementById('c'),
            context = canvas.getContext('2d'),
            interval_id,
            frame = 0,
            dt = 0,
            last_frame = +new Date();
        
        

        // load the game images
        game.loadImages();
        // set the first scene
        game.setActiveScene('homeBedroomMC');


        // use the onEachFrame if it exists, or use the fallback if it doesn't
        (function() {
          var onEachFrame;
          if (window.webkitRequestAnimationFrame) {
            onEachFrame = function(cb) {
              var _cb = function() { cb(); webkitRequestAnimationFrame(_cb); }
              _cb();
            };
          } else if (window.mozRequestAnimationFrame) {
            onEachFrame = function(cb) {
              var _cb = function() { cb(); mozRequestAnimationFrame(_cb); }
              _cb();
            };
          } else {
            onEachFrame = function(cb) {
              setInterval(cb, 1000 / 60);
            }
          }
          
          window.onEachFrame = onEachFrame;
        })();

        

        // The Game Loop
        window.onEachFrame(function() {
            //Get the Delta Time
            frame = +new Date();
            dt = frame - last_frame;
            last_frame = frame;
            

            // update the objects
            game.update(dt);

            // draw the game!
            game.draw(context);


            // show the fps
            fps.showFPS(context, dt);
        });
        
                
    });
});
