// Global game Variables
var canvas;
var stage: createjs.Stage;
var assets: createjs.LoadQueue;

// Game Objects 

function Preload() {
    assets = new createjs.LoadQueue(); // create a new preloader
    assets.installPlugin(createjs.Sound); // need plugin for sounds
    assets.on("complete", init, this); // when assets finished preloading - then init function

    assets.loadManifest([
        { id: "cloud", src: "assets/images/cloud.png" },
        { id: "island", src: "assets/images/island.png" },
        { id: "ocean", src: "assets/images/ocean.gif" },
        { id: "plane", src: "assets/images/plane.png" }
    ]);

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



    stage.update(); // Refreshes our stage
}







// Our Game Kicks off in here
function main() {


    
}