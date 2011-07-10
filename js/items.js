/**
 * Items in the game
 */
define({
    outside: {
        src: 'img/items/Icon.4_44.png',
        click: {
            name: 'changeScene',
            arguments: 'homeBedroomParents'
        }
    },
    mcBedRoomDoor: {
        src: 'img/items/door.png',
        height: 76,
        width: 89,
        click: {
            name: 'changeScene',
            arguments: 'homeBedroomMC'
        }
    },
    hallwayDoor: {
        src: 'img/items/door.png',
        height: 76,
        width: 89,
        click: {
            name: 'changeScene',
            arguments: 'homeHallway'
        }
    }
});
