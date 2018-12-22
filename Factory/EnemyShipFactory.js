"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UFOEnemyShip_1 = require("./UFOEnemyShip");
var BigUFOEnemyShip_1 = require("./BigUFOEnemyShip");
var RocketEnemyShip_1 = require("./RocketEnemyShip");
var EnemyShipFactory = (function () {
    function EnemyShipFactory() {
    }
    EnemyShipFactory.prototype.makeEnemyShip = function (newShipType) {
        if (newShipType === 'U') {
            return new UFOEnemyShip_1.default();
        }
        if (newShipType === 'D') {
            return new BigUFOEnemyShip_1.default();
        }
        if (newShipType === 'R') {
            return new RocketEnemyShip_1.default();
        }
    };
    return EnemyShipFactory;
}());
exports.default = EnemyShipFactory;
