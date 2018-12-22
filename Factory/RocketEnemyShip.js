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
var RocketEnemyShip = (function (_super) {
    __extends(RocketEnemyShip, _super);
    function RocketEnemyShip() {
        var _this = _super.call(this) || this;
        _this.setName('Rocket Enemy Ship');
        _this.setDamage(10);
        return _this;
    }
    return RocketEnemyShip;
}(EnemyShip_1.default));
exports.default = RocketEnemyShip;
