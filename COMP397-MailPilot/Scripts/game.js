/// <reference path="typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="objects/plane.ts" />
/// <reference path="objects/island.ts" />
// Global game Variables
var canvas;
var stage;
var assets;
// Game Objects 
var plane;
var island;
var manifest = [
    { id: "cloud", src: "assets/images/cloud.png" },
    { id: "island", src: "assets/images/island.png" },
    { id: "ocean", src: "assets/images/ocean.gif" },
    { id: "plane", src: "assets/images/plane.png" }
];
function Preload() {
    assets = new createjs.LoadQueue(); // create a new preloader
    assets.installPlugin(createjs.Sound); // need plugin for sounds
    assets.on("complete", init, this); // when assets finished preloading - then init function
    assets.loadManifest(manifest);
}
function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); // Enable mouse events
    createjs.Ticker.setFPS(60); // 60 frames per second
    createjs.Ticker.addEventListener("tick", gameLoop);
    main();
}
function gameLoop() {
    plane.update();
    island.update();
    stage.update(); // Refreshes our stage
}
// Our Game Kicks off in here
function main() {
    //Island object
    island = new objects.Island();
    stage.addChild(island);
    //Plane object
    plane = new objects.Plane();
    stage.addChild(plane);
}
//# sourceMappingURL=game.js.map