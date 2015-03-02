module objects {
    // PLANE CLASS
    export class Island extends createjs.Bitmap {
        // PUBLIC INSTANCE VARIABLES
        width: number;
        height: number;
        dy: number = 5;

        // CONSTRUCTOR
        constructor() {
            super(assets.getResult("island"));


            this.width = this.getBounds().width;
            this.height = this.getBounds().height;


            this.reset();

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

        }

        // PUBLIC METHODS
        public update() {
            this.y += this.dy;

            // check if island has left the bottom of the screen
            if (this.y >= (480 + this.height)) {
                this.reset();
            }
        }

        // Reset position of island to the top
        public reset() {
            this.y = -this.height;
            this.x = Math.floor(Math.random() * 640);
        }

    }

} 