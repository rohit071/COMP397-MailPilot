﻿/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/scoreboard.ts" />
var states;
(function (states) {
    // MENU STATE CLASS
    var Menu = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Menu() {
            this.play = false;
            this.help = false;
            // Instantiate Game Container
            this.game = new createjs.Container();

            //Ocean object
            this.ocean = new objects.Ocean();
            this.game.addChild(this.ocean);

            //Game Over Label
            this.mailPilotLabel = new objects.Label(320, 40, "Showering Bombs");
            this.mailPilotLabel.font = "60px Consolas";
            this.mailPilotLabel.regX = this.mailPilotLabel.getMeasuredWidth() * 0.5;
            this.mailPilotLabel.regY = this.mailPilotLabel.getMeasuredLineHeight() * 0.5;
            this.game.addChild(this.mailPilotLabel);

            //Play Button
            this.playButton = new objects.Button(320, 280, "playButton");
            this.playButton.on("click", this.playClicked, this);

            this.game.addChild(this.playButton);

            //Help Button
            this.helpButton = new objects.Button(320, 350, "helpButton");
            this.helpButton.on("click", this.helpClicked, this);

            this.game.addChild(this.helpButton);

            // Add Game Container to Stage
            stage.addChild(this.game);
        }
        Menu.prototype.playClicked = function () {
            this.play = true;
        };

        Menu.prototype.helpClicked = function () {
            this.help = true;
        };

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Menu.prototype.update = function () {
            this.ocean.update();

            if (this.play) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.PLAY_STATE;
                stateChanged = true;
            }
            if (this.help) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.HELP_STATE;
                stateChanged = true;
            }

            stage.update(); // Refreshes our stage
        };
        return Menu;
    })();
    states.Menu = Menu;
})(states || (states = {})); // States Module
//# sourceMappingURL=menu.js.map
