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
            this.x = point.x;
            this.y = point.y;
        },
        /**
         * Moves the player to the point
         */
        moveTo: function(point) {
            this.destX = point.x;
            this.destY = point.y;
            this.isMovingX = true;
            this.isMovingY = true;
        },
        loadImages: function() {
            this.img = document.createElement('img');
            this.img.src = 'img/mobs/girl_pink.png';
        },
        /**
         * Draws the player on the context
         */
        draw: function(context) {
            context.drawImage(this.img, this.x, this.y, 76, 89);
        },
        /**
         * Update the player
         */
        update: function() {
            if (this.isMovingX) {

                // are we close to the destination?
                if (this.x <= (this.destX + 10)
                        && (this.x >= (this.destX - 10))) {
                    this.isMovingX = false;
                }
                
                // move the player
                if (this.destX > this.x) { this.x += 10; }
                else if (this.destX < this.x) { this.x -= 10}
            }

            if (this.isMovingY) {
                // are we close to the destination?
                if (this.y <= (this.destY + 10)
                        && (this.y >= (this.destY - 10))) {
                    this.isMovingY = false;
                }
                
                // move the player
                if (this.destY > this.y) { this.y += 10; }
                else if (this.destY < this.y) { this.y -= 10}

            }
        }
    }
});
