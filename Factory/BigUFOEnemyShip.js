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
var UFOEnemyShip_1 = require("./UFOEnemyShip");
var BigUFOEnemyShip = (function (_super) {
    __extends(BigUFOEnemyShip, _super);
    function BigUFOEnemyShip() {
        var _this = _super.call(this) || this;
        _this.setName('Big UFO Enemy Ship');
        _this.setDamage(40);
        return _this;
    }
    return BigUFOEnemyShip;
}(UFOEnemyShip_1.default));
exports.default = BigUFOEnemyShip;