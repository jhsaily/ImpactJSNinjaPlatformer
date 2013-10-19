ig.module( 'game.levels.level7' )
.requires( 'impact.image','game.entities.player','game.entities.princess' )
.defines(function(){
LevelLevel7=/*JSON[*/{"entities":[{"type":"EntityPlayer","x":16,"y":186},{"type":"EntityPrincess","x":186,"y":107},{"type":"EntityPrincess","x":338,"y":87},{"type":"EntityPrincess","x":526,"y":139},{"type":"EntityPrincess","x":666,"y":131},{"type":"EntityPrincess","x":810,"y":111}],"layer":[{"name":"BG","width":30,"height":8,"linkWithCollision":false,"visible":true,"tilesetName":"media/background.png","repeat":false,"preRender":false,"distance":"1","tilesize":32,"foreground":false,"data":[[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],[7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]]},{"name":"MG","width":30,"height":8,"linkWithCollision":true,"visible":true,"tilesetName":"media/background.png","repeat":false,"preRender":false,"distance":"1","tilesize":32,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,21],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,21,22,22,23,0,0,0,0,0,0,0,0,0,0,0,21,22,22,23,0],[0,0,0,0,0,21,22,22,23,0,0,0,0,0,0,21,22,22,23,0,21,22,22,23,0,0,0,0,0,0],[21,22,22,23,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"collision","width":30,"height":8,"linkWithCollision":false,"visible":true,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":32,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0],[0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"FG","width":30,"height":8,"linkWithCollision":false,"visible":true,"tilesetName":"media/background.png","repeat":false,"preRender":false,"distance":"1","tilesize":32,"foreground":true,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,17,18,18,19,0,0,0,0,0,0,0,0,0,0,0,17,18,18,19,33],[0,0,0,0,0,17,18,18,19,0,0,0,0,0,0,17,18,18,19,0,17,18,18,19,0,0,0,0,0,37],[17,18,18,19,0,0,0,0,0,0,33,34,33,34,0,0,0,0,0,0,0,0,0,0,0,33,34,33,34,37],[0,0,0,0,0,33,34,33,34,0,37,38,37,38,0,33,34,33,34,0,33,34,33,34,0,37,38,37,38,37]]}]}/*]JSON*/;
LevelLevel7Resources=[new ig.Image('media/background.png'), new ig.Image('media/background.png'), new ig.Image('media/background.png')];
});