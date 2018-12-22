"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EnemyShip = (function () {
    function EnemyShip() {
    }
    EnemyShip.prototype.getName = function () {
        return this.name;
    };
    EnemyShip.prototype.setName = function (newName) {
        this.name = newName;
    };
    EnemyShip.prototype.getDamage = function () {
        return this.amtDamage;
    };
    EnemyShip.prototype.setDamage = function (newDamage) {
        this.amtDamage = newDamage;
    };
    EnemyShip.prototype.followHeroShip = function () {
        console.log(this.getName() + ' is following the hero');
    };
    EnemyShip.prototype.displayEnemyShip = function () {
        console.log(this.getName() + ' is on the screen');
    };
    EnemyShip.prototype.enemyShipShoots = function () {
        console.log(this.getName() + ' attacks and does ' + this.getDamage());
    };
    return EnemyShip;
}());
exports.default = EnemyShip;
