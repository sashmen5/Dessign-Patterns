"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CloneFactory_1 = require("./CloneFactory");
var Sheep_1 = require("./Sheep");
var animalMaker = new CloneFactory_1.CloneFactory();
var sally = new Sheep_1.Sheep();
var clonedSally = animalMaker.getClone(sally);
