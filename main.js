ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'game.levels.level1',
	'game.levels.level2',
	'game.levels.level3',
	'game.levels.level4',
	'game.levels.level5',
	'game.levels.level6',
	'game.levels.level7',
	'game.levels.level8',
	'game.levels.level9',
	'game.levels.level10',
	'game.levels.level11',
	'game.levels.map'
	,'impact.debug.debug'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	gravity: 300,
	lives: 3,
	mapX: 104,
	mapY: 354,
	init: function() {
		ig.input.bind(ig.KEY.LEFT_ARROW, 'left');
		ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
		ig.input.bind(ig.KEY.UP_ARROW, 'jump');
		ig.input.bind(ig.KEY.DOWN_ARROW, 'down');
		ig.input.bind(ig.KEY.SPACE, 'slice');
		ig.input.bind(ig.KEY.SHIFT, 'shift');
		this.loadLevel(LevelLevel1)
	},
	
	update: function() {
    	// screen follows the player
    	var player = this.getEntitiesByType( EntityPlayer )[0];
    	if( player ) {
    		this.screen.x = player.pos.x - ig.system.width/2;
    		this.screen.y = player.pos.y - ig.system.height/2;
    		if(player.pos.x > ig.game.collisionMap.width*ig.game.collisionMap.tilesize-ig.system.width/2) {
    			this.screen.x = ig.game.collisionMap.width*ig.game.collisionMap.tilesize-ig.system.width;
    		} else if (player.pos.x < ig.system.width/2) 
		    {
		    	this.screen.x = 0;
		    }

		    if(player.pos.y > (ig.game.collisionMap.height*ig.game.collisionMap.tilesize-ig.system.height/2)) {
		    	this.screen.y = ig.game.collisionMap.height*ig.game.collisionMap.tilesize-ig.system.height;
		    } else if (player.pos.y < ig.system.height/2) {
		    	this.screen.y = 0;
		    }
		    if (player.pos.y > (ig.game.collisionMap.height*ig.game.collisionMap.tilesize)) {
		    	player.kill();
		    }
    	}
    	// Update all entities and BackgroundMaps
    	this.parent();
    },
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 320, 224, 2 );

});
