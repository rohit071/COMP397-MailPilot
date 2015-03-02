module objects {
export class Plane extends createjs.Bitmap {
        constructor() {
            super(assets.getResult("plane"));

            this.y = 430;
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;

        }

        public update() {
            this.x = stage.mouseX;
        }

    }




} 