/// <reference path="constants.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="managers/bulletcollision.ts" />
/// <reference path="managers/bosscollision.ts" />
/// <reference path="managers/bulletbosscollision.ts" />
/// <reference path="objects/bullet.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="objects/cloud.ts" />
/// <reference path="objects/island.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="objects/ocean.ts" />
/// <reference path="objects/plane.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/boss.ts" />
/// <reference path="objects/superbullet.ts" />
/// <reference path="objects/bossscoreboard.ts" />
/// <reference path="objects/poo.ts" />
/// <reference path="states/gameover.ts" />
/// <reference path="states/menu.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/instruction.ts" />
/// <reference path="states/bossstage.ts" />
/// <reference path="states/win.ts" />
// Mail Pilot Version 11 - Added basic state machine structure - Added Button and Label classes
// Changed online repo
var canvas;
var stage;
var game;
var ocean;
var plane;
var island;
//var bullet: objects.Bullet;
var bullet;
var isBullet;
var clouds = []; // Clouds array;
var poos = []; // poo array;
var scoreboard;
var bossScore;
var bossBird;
var collision;
var bossCollision;
var bulletCollision;
var bulletBossCollision;
var tryAgain;
var playButton;
var msgButton;
var backButton;
var currentState;
var currentStateFunction;
// Preload function - Loads Assets and initializes game;
function preload() {
    managers.Assets.init();
    managers.Assets.loader.addEventListener("complete", init);
}
// init called after Assets have been loaded.
function init() {
    canvas = document.getElementById('canvas');
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(30);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    optimizeForMobile();
    currentState = constants.MENU_STATE;
    isBullet = constants.IS_BULLET;
    changeState(currentState);
}
// Add touch support for mobile devices
function optimizeForMobile() {
    if (createjs.Touch.isSupported()) {
        createjs.Touch.enable(stage);
    }
}
// Game Loop
function gameLoop(event) {
    currentStateFunction();
    stage.update();
}
function changeState(state) {
    switch (state) {
        case constants.MENU_STATE:
            // instantiate menu screen
            currentStateFunction = states.menuState;
            states.menu();
            break;
        case constants.PLAY_STATE:
            // instantiate play screen
            currentStateFunction = states.playState;
            states.play();
            break;
        case constants.GAME_OVER_STATE:
            currentStateFunction = states.gameOverState;
            // instantiate game over screen
            states.gameOver();
            break;
        case constants.MSG_STATE:
            currentStateFunction = states.instructionState;
            // instruction screen
            states.instruction();
            break;
        case constants.BOSS_STATE:
            currentStateFunction = states.bossState;
            // instruction screen
            states.boss();
            break;
        case constants.WIN_STATE:
            currentStateFunction = states.winState;
            // instruction screen
            states.win();
            break;
    }
}
//# sourceMappingURL=game.js.map