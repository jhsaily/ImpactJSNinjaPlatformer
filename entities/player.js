ig.module(
    'game.entities.player'
)
.requires(
    'impact.entity'
)
.defines(function(){
    EntityPlayer = ig.Entity.extend({
        animSheet: new ig.AnimationSheet('media/player.png', 40, 32),
        size: {x:15, y: 30},
        offset: {x: 24, y: 2},
        flip: false,
        maxVel: {x: 200, y: 800},
        friction: {x: 900, y: 0},
        accelGround: 900,
        accelAir: 300,
        jump: 150,
        type: ig.Entity.TYPE.A,
        checkAgainst: ig.Entity.TYPE.B,
        collides: ig.Entity.COLLIDES.PASSIVE,
        health: 1,
        startPosition: null,
        counter: 0,
        startPosition: null,
        gravityFactor: 1,
        spawn: true,


        init: function (x,y,settings) {
            this.parent(x,y,settings);
            this.addAnim('idle', 0.1, [0,1]);
            this.addAnim('wallStuck', 1, [22]);
            this.addAnim('run', 0.1, [2,3,4]);
            this.addAnim('jump', 0.1, [8,9]);
            this.addAnim('fall', 1, [10]);
            this.addAnim('duck',0.1,[14,15]);
            this.addAnim('standSlice',0.1,[5,6,7,5]);
            this.addAnim('duckSlice',0.1,[16,17,18,16]);
            this.addAnim('jumpSlice',0.1,[11,12,13,11]);
            this.addAnim('runSlice',0.1,[19,20,21]);
            this.addAnim('walk', 0.5, [2,3,4]);
            this.startPosition = {x:x,y:y};
        },

        update: function() {
            if (this.gravityFactor == 0 && this.spawn) {
                this.pos.x = ig.game.mapX;
                this.pos.y = ig.game.mapY;
                this.spawn = false;
                ig.game.lives = 3;
            }
            var accel = this.standing ? this.accelGround : this.accelAir;
            if (this.lives == 0) {
                ig.game.loadLevelDeferred(LevelMap);
            }
            if (ig.input.state('shift')) {
                //this.kill();
            }
            var map = ig.game.getMapByName('MAP');
            if (map != null) {
                this.gravityFactor = 0;
            } else {
                this.gravityFactor = 1;
            }

            if (ig.input.state('left') && this.gravityFactor != 0) {
                this.accel.x = -accel;
                this.flip = false;
            } else if(ig.input.state('right')&& this.gravityFactor != 0) {
                this.accel.x = accel;
                this.flip = true;
            }
            else {
                this.accel.x = 0;
            }

            if (this.standing && ig.input.pressed('jump') && this.gravityFactor != 0) {
                this.vel.y = -this.jump;
            }
            if ((this.vel.y < 0 || this.vel.y > 0) && ig.input.state('slice') && this.gravityFactor != 0) {
                this.currentAnim = this.anims.jumpSlice;
                ig.game.spawnEntity( 'EntitySwordProjectile', this.pos.x, this.pos.y, {flip:!this.flip, duck:false} );
            } else if (this.vel.y < 0 && this.gravityFactor != 0) {
                this.currentAnim = this.anims.jump;
            } else if (this.vel.y > 0 && this.gravityFactor != 0) {
                this.currentAnim = this.anims.fall;
            } else if (this.vel.x != 0 && ig.input.state('slice') && this.gravityFactor != 0){
                this.currentAnim = this.anims.runSlice;
                ig.game.spawnEntity( 'EntitySwordProjectile', this.pos.x, this.pos.y, {flip:!this.flip, duck:false} );
            } else if (this.vel.x != 0){
                this.currentAnim = this.anims.run;
            } else if(ig.input.state('slice') && ig.input.state('down') && this.gravityFactor != 0) {
                this.currentAnim = this.anims.duckSlice;
                ig.game.spawnEntity( 'EntitySwordProjectile', this.pos.x, this.pos.y, {flip:!this.flip, duck:true} );
            } else if(ig.input.state('down') && this.gravityFactor != 0) {
                this.currentAnim = this.anims.duck;
            } else if(ig.input.state('slice') && this.gravityFactor != 0) {
                this.currentAnim = this.anims.standSlice;
                ig.game.spawnEntity( 'EntitySwordProjectile', this.pos.x, this.pos.y, {flip:!this.flip, duck:false} );
            } else {
                this.currentAnim = this.anims.idle;
            }

            if (this.gravityFactor == 0 && !this.spawn) {
                this.friction.y = 900;
                this.maxVel.y = 200;
                this.accelAir = 900;
                if (ig.input.state('left')) {
                    ig.game.mapX = this.pos.x;
                    ig.game.mapY = this.pos.y;
                    this.accel.x = -accel;
                    this.flip = false;
                } else if(ig.input.state('right')) {
                    ig.game.mapX = this.pos.x;
                    ig.game.mapY = this.pos.y;
                    this.accel.x = accel;
                    this.flip = true;
                }
                if (ig.input.state('jump')) {
                    this.accel.y = -accel;
                    ig.game.mapX = this.pos.x;
                    ig.game.mapY = this.pos.y;
                } else if (ig.input.state('down')) {
                    this.accel.y = accel;
                    ig.game.mapX = this.pos.x;
                    ig.game.mapY = this.pos.y;
                } else {
                    this.accel.y = 0;
                }

                if (this.vel.y != 0) {
                    this.currentAnim = this.anims.run;
                }

                if (ig.input.pressed('slice')) {
                    var city = ig.game.getMapByName('HIDDEN');
                    var tile = city.getTile(this.pos.x,this.pos.y);
                    if (tile == 1) {
                        ig.game.loadLevelDeferred(LevelLevel1);
                    } else if (tile == 2) {
                        ig.game.loadLevelDeferred(LevelLevel2);
                    } else if (tile == 3) {
                        ig.game.loadLevelDeferred(LevelLevel3);
                    } else if (tile == 4) {
                        ig.game.loadLevelDeferred(LevelLevel4);
                    } else if (tile == 5) {
                        ig.game.loadLevelDeferred(LevelLevel5);
                    } else if (tile == 6) {
                        ig.game.loadLevelDeferred(LevelLevel6);
                    } else if (tile == 7) {
                        ig.game.loadLevelDeferred(LevelLevel7);
                    } else if (tile == 8) {
                        ig.game.loadLevelDeferred(LevelLevel8);
                    } else if (tile == 9) {
                        ig.game.loadLevelDeferred(LevelLevel9);
                    } else if (tile == 10) {
                        ig.game.loadLevelDeferred(LevelLevel10);
                    } else if (tile == 11) {
                        ig.game.loadLevelDeferred(LevelLevel11);
                    }
                }
            } else {
                this.friction.y = 0;
                this.maxVel.y = 800;
                this.accelAir = 300;
            }

            if (this.flip){
                this.offset.x = 0;
            } else {
                this.offset.x = 25;
            }

            this.currentAnim.flip.x = this.flip;

            if (this.pos.x > ig.game.collisionMap.width*ig.game.collisionMap.tilesize) {
                ig.game.loadLevelDeferred(LevelMap);
            }
            this.parent();
        },
        handleMovementTrace: function( res ) {
            var accel = this.standing ? this.accelGround : this.accelAir;
            if( res.collision.x && this.accel.x != 0 && this.vel.y > 0 && !res.collision.y && this.gravityFactor != 0) {
                this.vel.y = 0;
                this.currentAnim = this.anims.wallStuck;
                this.currentAnim.flip.x = this.flip;
                if (!ig.input.state('jump')) {
                    this.counter = 0;
                } else if (ig.input.state('jump') && this.counter == 0) {
                    this.vel.y = -this.jump;
                    this.counter++;
                }
            } else {
                this.counter++;
            }

            if (res.collision.y && this.vel.y > 335) {
                this.kill();
            }

            // Continue resolving the collision as normal
            this.parent(res); 
        },
        check: function( other ) {
            other.receiveDamage( 1, this );
        },
        kill: function() {
            ig.game.lives -= 1;
            if (ig.game.lives == 0) {
                ig.game.lives = 3;
                ig.game.loadLevelDeferred(LevelMap);
            }
            this.parent();
            var x = this.startPosition.x;
            var y = this.startPosition.y;
            ig.game.spawnEntity(EntityDeathExplosion, this.pos.x, this.pos.y+25, {callBack:function(){ig.game.spawnEntity( EntityPlayer, x, y)}} );
        },
    });

    EntitySwordProjectile = ig.Entity.extend({
        size: {x: 20, y: 10},
        maxVel: {x: 200, y: 800},
        type: ig.Entity.TYPE.NONE,
        checkAgainst: ig.Entity.TYPE.B,
        collides: ig.Entity.COLLIDES.PASSIVE,
        counter: 0,
        flip: false,
        duck: 0,

        init: function( x, y, settings ) {
            this.flip = settings.flip;
            if (settings.duck) {
                this.duck = 10;
            }
            this.parent( x + (settings.flip ? -4 : 8) , y + this.duck, settings );
            this.vel.x = this.accel.x = (settings.flip ? -this.maxVel.x : this.maxVel.x);
        },
        update: function() {
            var player = ig.game.getEntitiesByType( EntityPlayer )[0];
            if (player != null){
                this.pos.y = player.pos.y + this.duck;
                if (this.flip){
                    this.pos.x = player.pos.x-25;
                } else {
                    this.pos.x = player.pos.x+18;
                }
            } else {
                this.kill();
            }
            if (this.counter > 10) {
                this.kill();
            }
            this.counter++;
            this.parent();
        },
        handleMovementTrace: function( res ) {
            this.parent( res );
            if( res.collision.x || res.collision.y ){
                this.kill();
            }
        },
        check: function( other ) {
            other.receiveDamage( 3, this );
            this.kill();
        }
    });

    EntityDeathExplosion = ig.Entity.extend({
        lifetime: 1,
        callBack: null,
        particles: 100,
        init: function( x, y, settings ) {
            this.parent( x, y, settings );
                for(var i = 0; i < this.particles; i++)
                    ig.game.spawnEntity(EntityDeathExplosionParticle, x, y, {colorOffset: settings.colorOffset ? settings.colorOffset : 0});
                this.idleTimer = new ig.Timer();
            },
            update: function() {
                if( this.idleTimer.delta() > this.lifetime ) {
                    this.kill();
                    if(this.callBack)
                        this.callBack();
                    return;
                }
            }
    });
    EntityDeathExplosionParticle = ig.Entity.extend({
        size: {x: 2, y: 2},
        maxVel: {x: 300, y: 400},
        lifetime: 3,
        fadetime: 1,
        bounciness: 0,
        vel: {x: 300, y: 400},
        friction: {x:100, y: 0},
        collides: ig.Entity.COLLIDES.LITE,
        colorOffset: 0,
        totalColors: 7,
        animSheet: new ig.AnimationSheet( 'media/blood.png', 2, 2 ),
        init: function( x, y, settings ) {
            this.parent( x, y, settings );
            var frameID = Math.round(Math.random()*this.totalColors) + (this.colorOffset * (this.totalColors+1));
            this.addAnim( 'idle', 0.2, [frameID] );
            this.vel.x = (Math.random() * 2 - 1) * 300;
            this.vel.y = (Math.random() * 2 - 1) * 400;
            this.idleTimer = new ig.Timer();
        },
        update: function() {
            if( this.idleTimer.delta() > this.lifetime ) {
                this.kill();
                return;
            }
            this.currentAnim.alpha = this.idleTimer.delta().map(
                this.lifetime - this.fadetime, this.lifetime,
                1, 0
            );
            this.parent();
        }
    });
});