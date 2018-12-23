"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CloneFactory = (function () {
    function CloneFactory() {
    }
    CloneFactory.prototype.getClone = function (animalSample) {
        return animalSample.clone();
    };
    return CloneFactory;
}());
exports.CloneFactory = CloneFactory;
