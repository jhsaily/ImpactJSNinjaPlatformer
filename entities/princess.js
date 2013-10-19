ig.module(
    'game.entities.princess'
)
.requires(
    'impact.entity'
)
.defines(function(){

EntityPrincess = ig.Entity.extend({
    animSheet: new ig.AnimationSheet( 'media/princess.png', 29, 60 ),
    size: {x: 18, y:58},
    offset: {x: 6, y: -1},
    maxVel: {x: 100, y: 100},
    flip: false,
    friction: {x: 150, y: 0},
    speed: 100,
    type: ig.Entity.TYPE.B,
    checkAgainst: ig.Entity.TYPE.A,
    collides: ig.Entity.COLLIDES.PASSIVE,
    init: function( x, y, settings ) {
        this.parent( x, y, settings );
        this.addAnim('walk', .07, [0,1,2,3,4,5,6,7]);
    },
    update: function() {
        if( !ig.game.collisionMap.getTile(
            this.pos.x + (this.flip ? +4 : this.size.x -4),
                this.pos.y + this.size.y+1
            )
        ) {
            this.flip = !this.flip;
        }
        var xdir = this.flip ? -1 : 1;
        this.vel.x = this.speed * xdir;
        this.currentAnim.flip.x = this.flip;
        this.parent();
    },
    handleMovementTrace: function( res ) {
        this.parent( res );
        if( res.collision.x ) {
            this.flip = !this.flip;
        }
    },
    check: function( other ) {
        other.receiveDamage( 10, this );
    },
    receiveDamage: function(value){
        this.parent(value);
        if(this.health > 0)
            ig.game.spawnEntity(EntityDeathExplosion, this.pos.x, this.pos.y, {particles: 2, colorOffset: 0});
    },
    kill: function(){
        this.parent();
        ig.game.spawnEntity(EntityDeathExplosion, this.pos.x, this.pos.y, {colorOffset: 0});
    }
});
});