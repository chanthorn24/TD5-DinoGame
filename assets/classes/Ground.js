class Ground {
    shape = null;
    size = null;
    width = 20;
    height = 30;
    positionX = null;
    positionY = null;
    speed = 30;
    frameIndex = 0;

    constructor(gameContext) {
        this.gameContext = gameContext;
        this.shape = new Image();
        this.shape.src = "assets/images/ground.png";
        this.positionX = 0;
        this.positionY = 340;

        this.shape.onload = (() => {
            this.gameContext.ctx.drawImage(this.shape, 0, 0, 200, 200, 10, 10, 75, 75);
        })
    }
    move = (() => {
        if (this.frameIndex > 9) {
            this.frameIndex = 0;
        }
        if (this.positionX == -1500) {
            this.positionX = 0;
        }

        setTimeout(() => {
            if (this.positionX > -1500) {
                this.positionX = this.positionX - this.speed;
                // console.log(this.positionX);
                // this.gameContext.ctx.clearRect(0, 0, this.gameContext.canvas.width, this.gameContext.canvas.height);

                this.gameContext.ctx.drawImage(
                    this.shape,
                    this.frameIndex * 1200, 0, 1200, 200, // Source image
                    this.positionX, this.positionY, 3050, 150 // Destination
                );
                requestAnimationFrame(this.move)
            }
        }, 100);
    })
}