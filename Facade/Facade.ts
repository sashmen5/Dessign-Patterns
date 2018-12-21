class BlurayPlayer {
    on() {
        console.log('Bluray player turning on...')
    }

    turnOff() {
        console.log('bluray turning off...');
    }

    play() {
        console.log('Playing bluray disc...');
    }
}

class Amplifier {
    on() {
        console.log('Amp player turning on...');
    }

    turnOff() {
        console.log('Amp turning off...');
    }

    setSource(source: string) {
        console.log('Setting source to ' + source);
    }

    setVolume(volumeLevel: number) {
        console.log('Setting volume to ' + volumeLevel);
    }
}

class Lights {
    dim() {
        console.log('Lights are dimming...');
    }
}

class PopcornMaker {
    turnOn() {
        console.log('Popcorn maker turning on...');
    }

    turnOff() {
        console.log('Popcorn maker turning off...');
    }

    pop() {
        console.log('Popping corn!');
    }
}

class TV {
    turnOn() {
        console.log('Tv turning on...');
    }

    turnOff() {
        console.log('Tv turning off...');
    }
}

