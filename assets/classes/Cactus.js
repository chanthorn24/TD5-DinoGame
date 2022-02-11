class Cactus {
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
        this.shape.src = "assets/images/cactus.png";
        this.positionX = this.gameContext.canvas.width;
        this.positionY = 300;

        this.shape.onload = (() => {
            this.gameContext.ctx.drawImage(this.shape, 0, 0, 200, 200, 10, 10, 75, 75);
        })
    }
    move = (() => {
        if (this.frameIndex > 9) {
            this.frameIndex = 0;
        }
        if (this.positionX == -294) {
            this.positionX = 306;
        }

        setTimeout(() => {
            if (this.positionX > -290) {
                this.positionX = this.positionX - this.speed;

                this.gameContext.ctx.clearRect(0, 0, this.gameContext.canvas.width, this.gameContext.canvas.height);
                console.log(this.positionX);
                this.gameContext.ctx.drawImage(
                    this.shape,
                    this.frameIndex * 200, 0, 200, 200, // Source image
                    this.positionX, this.positionY, 150, 150 // Destination
                );
                console.log(this.positionX);

                this.gameContext.ctx.drawImage(
                    this.shape,
                    this.frameIndex * 200, 0, 200, 200, // Source image
                    this.positionX + 307, this.positionY, 150, 150 // Destination
                );
                this.gameContext.ctx.drawImage(
                    this.shape,
                    this.frameIndex * 200, 0, 200, 200, // Source image
                    this.positionX + 700, this.positionY, 150, 150 // Destination
                );
                this.gameContext.ctx.drawImage(
                    this.shape,
                    this.frameIndex * 200, 0, 200, 200, // Source image
                    this.positionX + 1200, this.positionY, 150, 150 // Destination
                );
                this.gameContext.ctx.drawImage(
                    this.shape,
                    this.frameIndex * 200, 0, 200, 200, // Source image
                    this.positionX + 1700, this.positionY, 150, 150 // Destination
                );
                requestAnimationFrame(this.move)

                // let dino = new Dinosaur();
                // console.log(dino.positionX);
                // this.frameIndex++; // the same as: this.frameIndex = this.frameIndex + 1;
            }
        }, 100);
    })
}