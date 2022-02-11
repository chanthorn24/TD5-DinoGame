class Game {
    // Properties
    playerName = null;
    dinosaur = null;
    score = null;
    speed = 10;
    level = 1;
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    // Methods
    start() {
        // Receive player name and save it.
        let playerName = document.getElementById("player_name").value;
        if (playerName) {
            this.playerName = playerName;
            console.log('Game is starting!!', this);
        } else {
            alert('Player name is required!!');
        }

        // Remove starting container from canvas
        let startingContainer = document.getElementById("starting-container");
        startingContainer.style.display = "none";


        let cactus = new Cactus(this);
        cactus.move();


        let ground = new Ground(this);
        ground.move();
        // Initinalize dinosaur object and display it on the screen
        let dinosaur = new Dinosaur(this);
        dinosaur.move();

        document.addEventListener("keydown", function(event) {
            dinosaur.jump();
        });


    }
    pause() {
        console.log('Pause the game');
    }
}