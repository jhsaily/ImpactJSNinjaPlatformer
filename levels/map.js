ig.module( 'game.levels.map' )
.requires( 'impact.image','game.entities.player' )
.defines(function(){
LevelMap=/*JSON[*/{"entities":[{"type":"EntityPlayer","x":104,"y":354}],"layer":[{"name":"BG","width":17,"height":17,"linkWithCollision":false,"visible":1,"tilesetName":"media/tilestodown.png","repeat":false,"preRender":false,"distance":"1","tilesize":32,"foreground":false,"data":[[1,1,1,1,1,1,1,1,1,1,1,2,2,2,1,17,17],[1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,17],[1,2,1,1,1,1,2,2,2,2,2,2,2,2,2,2,1],[1,2,1,2,2,2,2,1,1,1,1,2,1,1,1,2,17],[1,2,1,2,1,1,1,1,1,1,1,2,1,1,1,2,17],[1,2,1,2,1,2,2,2,2,2,2,2,2,2,2,2,17],[1,2,1,2,1,2,1,1,1,1,1,2,1,1,1,2,17],[1,2,1,2,1,2,17,1,1,1,1,2,1,1,1,2,17],[1,2,2,2,1,2,17,17,17,1,1,2,1,1,1,2,17],[1,17,1,2,1,2,1,17,17,17,1,2,2,2,2,2,17],[17,17,1,2,1,2,1,17,17,17,1,1,1,1,1,2,17],[17,17,17,2,1,17,17,17,17,17,17,1,2,2,2,2,17],[17,17,17,2,17,17,17,17,1,1,1,1,2,1,1,17,17],[17,17,17,17,17,17,17,2,2,2,2,2,2,1,17,17,17],[17,17,17,2,17,17,17,17,17,2,1,17,17,17,17,17,17],[17,17,1,2,2,17,2,17,17,17,17,17,17,17,17,17,17],[17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17]]},{"name":"MAP","width":17,"height":17,"linkWithCollision":false,"visible":1,"tilesetName":"media/tilestodown.png","repeat":false,"preRender":false,"distance":"1","tilesize":32,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,4,0,4,4,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,4,0,4,4,4,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"collision","width":17,"height":17,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":32,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0],[1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1],[1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1],[1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1],[1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1],[1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1],[1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1],[0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1],[0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1],[0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1],[0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0],[0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0]]},{"name":"HIDDEN","width":17,"height":17,"linkWithCollision":false,"visible":1,"tilesetName":"media/tilestodown.png","repeat":false,"preRender":false,"distance":"1","tilesize":32,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,11,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0],[0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,7,0,0,6,0,0,0,5,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"CITIES","width":17,"height":17,"linkWithCollision":false,"visible":1,"tilesetName":"media/tilestodown.png","repeat":false,"preRender":false,"distance":"1","tilesize":32,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,21,0,0,0,0,0,0,0,0,0,21,0,0,0,0,0],[0,0,0,21,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,21,0,0,21,0,0,0,21,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,21,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,21,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,21,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,21,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,21,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}]}/*]JSON*/;
LevelMapResources=[new ig.Image('media/tilestodown.png'), new ig.Image('media/tilestodown.png'), new ig.Image('media/tilestodown.png'), new ig.Image('media/tilestodown.png')];
});