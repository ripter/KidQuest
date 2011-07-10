/**
 * The Player
 */
define(function() {
    var x,y,img, destX, destY,
        isMovingX = false, isMovingY = false;

    
    return {
        /**
         * Sets the players position on the screen
         * @param point an object with x,y properties.
         */
        setPosition: function(point) {
            x = point.x;
            y = point.y;
        },
        /**
         * Moves the player to the point
         */
        moveTo: function(point) {
            destX = point.x;
            destY = point.y;
            isMovingX = true;
            isMovingY = true;
        },
        loadImages: function() {
            img = document.createElement('img');
            img.src = 'img/mobs/girl_pink.png';
        },
        /**
         * returns true if the player is moving
         */
        isMoving: function() {
            return isMovingX || isMovingY;
        },
        /**
         * Draws the player on the context
         */
        draw: function(context) {
            context.drawImage(img, x, y, 76, 89);
        },
        /**
         * Update the player
         */
        update: function() {
            if (isMovingX) {

                // are we close to the destination?
                if (x <= (destX + 10)
                        && (x >= (destX - 10))) {
                    isMovingX = false;
                }
                
                // move the player
                if (destX > x) { x += 10; }
                else if (destX < x) { x -= 10}
            }

            if (isMovingY) {
                // are we close to the destination?
                if (y <= (destY + 10)
                        && (y >= (destY - 10))) {
                    isMovingY = false;
                }
                
                // move the player
                if (destY > y) { y += 10; }
                else if (destY < y) { y -= 10}

            }
        }
    }
});
