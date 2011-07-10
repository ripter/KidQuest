/**
 * The Player
 */
define(function() {
    var x,y,img, destX, destY,
        isMoving = false;

    
    return {
        /**
         * Sets the players position on the screen
         * @param point an object with x,y properties.
         */
        setPosition: function(point) {
            this.x = point.x;
            this.y = point.y;
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
            if (this.isMoving) {

                console.log('player update', this.x, this.destX);
                if ((this.x - this.destX) > 0) {
                    if (this.destX > this.x) { this.x++; }
                    else { this.x--; }

                    this.x++;
                }
            }
        }
    }
});
