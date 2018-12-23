"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Animal_1 = require("./Animal");
var Sheep = (function (_super) {
    __extends(Sheep, _super);
    function Sheep() {
        var _this = _super.call(this) || this;
        _this.makeCopy = function () {
            console.log('Sheep is Being Made');
            var sheepObject;
            sheepObject = _super.prototype.clone.call(_this);
            return sheepObject;
        };
        console.log('Sheep is Made');
        return _this;
    }
    Sheep.prototype.toString = function () {
        return 'Dolly is my Hero!';
    };
    return Sheep;
}(Animal_1.Animal));
exports.Sheep = Sheep;
