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
var HomeTheaterFacade = (function () {
    function HomeTheaterFacade(bluray, amp, lights, tv, popcornMaker) {
        this.bluray = bluray;
        this.amp = amp;
        this.lights = lights;
        this.tv = tv;
        this.popcornMaker = popcornMaker;
    }
    HomeTheaterFacade.prototype.watchMovie = function () {
        this.popcornMaker.turnOn();
        this.popcornMaker.pop();
        this.lights.dim();
        this.tv.turnOn();
        this.amp.on();
        this.amp.setSource('bluray');
        this.amp.setVolume(11);
        this.bluray.on();
        this.bluray.play();
    };
    HomeTheaterFacade.prototype.endMovie = function () {
        this.popcornMaker.turnOff();
        this.amp.turnOff();
        this.tv.turnOff();
        this.bluray.turnOff();
    };
    return HomeTheaterFacade;
}());
