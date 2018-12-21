var BlurayPlayer = (function () {
    function BlurayPlayer() {
    }
    BlurayPlayer.prototype.on = function () {
        console.log('Bluray player turning on...');
    };
    BlurayPlayer.prototype.turnOff = function () {
        console.log('bluray turning off...');
    };
    BlurayPlayer.prototype.play = function () {
        console.log('Playing bluray disc...');
    };
    return BlurayPlayer;
}());
var Amplifier = (function () {
    function Amplifier() {
    }
    Amplifier.prototype.on = function () {
        console.log('Amp player turning on...');
    };
    Amplifier.prototype.turnOff = function () {
        console.log('Amp turning off...');
    };
    Amplifier.prototype.setSource = function (source) {
        console.log('Setting source to ' + source);
    };
    Amplifier.prototype.setVolume = function (volumeLevel) {
        console.log('Setting volume to ' + volumeLevel);
    };
    return Amplifier;
}());
var Lights = (function () {
    function Lights() {
    }
    Lights.prototype.dim = function () {
        console.log('Lights are dimming...');
    };
    return Lights;
}());
var PopcornMaker = (function () {
    function PopcornMaker() {
    }
    PopcornMaker.prototype.turnOn = function () {
        console.log('Popcorn maker turning on...');
    };
    PopcornMaker.prototype.turnOff = function () {
        console.log('Popcorn maker turning off...');
    };
    PopcornMaker.prototype.pop = function () {
        console.log('Popping corn!');
    };
    return PopcornMaker;
}());
var TV = (function () {
    function TV() {
    }
    TV.prototype.turnOn = function () {
        console.log('Tv turning on...');
    };
    TV.prototype.turnOff = function () {
        console.log('Tv turning off...');
    };
    return TV;
}());
