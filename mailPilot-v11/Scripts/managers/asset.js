var managers;
(function (managers) {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "loading", src: "assets/images/loading.gif" },
        { id: "sky", src: "assets/images/background.png" },
        { id: "engine", src: "assets/sounds/background_1.mp3" },
        { id: "playBGM", src: "assets/sounds/playBGM.mp3" },
        { id: "thunder", src: "assets/sounds/shot2.wav" },
        { id: "yay", src: "assets/sounds/Powerup.wav" },
        { id: "shot", src: "assets/sounds/shot.wav" },
        { id: "bossBGM", src: "assets/sounds/bossBGM.mp3" },
        { id: "win", src: "assets/sounds/win.mp3" },
        { id: "lose", src: "assets/sounds/lose.mp3" },
        { id: "game-over", src: "assets/sounds/game-over.wav" }
    ];
    var spriteSheetData = {
        "images": ["assets/images/atlas1.png"],
        "frames": [
            [5, 3, 193, 402],
            [212, 6, 410, 90],
            [226, 102, 348, 90],
            [267, 200, 332, 90],
            [226, 294, 348, 90],
            [5, 409, 103, 62],
            [123, 409, 103, 62],
            [507, 409, 103, 62],
            [238, 411, 74, 62],
            [320, 411, 74, 62],
            [406, 436, 21, 26],
            [442, 408, 55, 53],
            [626, 16, 160, 64],
            [626, 92, 180, 123],
            [626, 226, 258, 242]
        ],
        "animations": {
            "actor": [0],
            "instructionsButton": [1],
            "playButton": [2],
            "tryAgainButton": [3],
            "backButton": [4],
            "attackBird1": [5],
            "attackBird2": [6],
            "helpBird": [7],
            "bonus1": [8],
            "bonus2": [9],
            "heart": [10],
            "poo": [11],
            "1shot": [12],
            "3shot": [13],
            "boss": [14]
        }
    };
    // SpriteSheet Data Object
    var shipData = {
        "images": ["assets/images/ourShip.png"],
        "frames": [
            [10, 7, 240, 118],
            [9, 132, 239, 118],
            [8, 261, 240, 118]
        ],
        "animations": {
            "ship": {
                frames: [0, 1, 2],
                speed: 0.2
            }
        }
    };
    // Asset Manager Class
    var Assets = (function () {
        function Assets() {
        }
        Assets.init = function () {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.atlas = new createjs.SpriteSheet(spriteSheetData);
            this.shipAtlas = new createjs.SpriteSheet(shipData);
        };
        return Assets;
    })();
    managers.Assets = Assets;
})(managers || (managers = {}));
//# sourceMappingURL=asset.js.map