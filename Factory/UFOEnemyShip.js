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
var EnemyShip_1 = require("./EnemyShip");
var UFOEnemyShip = (function (_super) {
    __extends(UFOEnemyShip, _super);
    function UFOEnemyShip() {
        var _this = _super.call(this) || this;
        _this.setName('UFO Enemy Ship');
        _this.setDamage(20);
        return _this;
    }
    return UFOEnemyShip;
}(EnemyShip_1.default));
exports.default = UFOEnemyShip;
