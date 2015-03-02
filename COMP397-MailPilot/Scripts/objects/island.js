var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // PLANE CLASS
    var Island = (function (_super) {
        __extends(Island, _super);
        // CONSTRUCTOR
        function Island() {
            _super.call(this, assets.getResult("island"));
            this.dy = 5;

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.reset();

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
        }
        // PUBLIC METHODS
        Island.prototype.update = function () {
            this.y += this.dy;

            // check if island has left the bottom of the screen
            if (this.y >= (480 + this.height)) {
                this.reset();
            }
        };

        // Reset position of island to the top
        Island.prototype.reset = function () {
            this.y = -this.height;
            this.x = Math.floor(Math.random() * 640);
        };
        return Island;
    })(createjs.Bitmap);
    objects.Island = Island;
})(objects || (objects = {}));
//# sourceMappingURL=island.js.map
