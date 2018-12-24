interface Subject {
    registerObserver(o: Observer);
    removeObserver(o: Observer);
    notifyObservers();
}


interface Observer {
    update(temperature: number);
}

class WeatherStation implements Subject{
    private temperature: number;
    private observers: Observer[] = [];
    setTemperature(temp: number): void {
        console.log('WeatherStation: new temperature measurement: ' + temp);
        this.temperature = temp;
        this.notifyObservers();
    }

    registerObserver(o: Observer) {
        this.observers.push(o);
    }

    removeObserver(o: Observer) {
        let index = this.observers.indexOf(o);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers() {
        for (const observer of this.observers) {
            observer.update(this.temperature);
        }
    }
}

class TemperatureDisplay implements Observer {
    private subject: Subject;
    constructor(weatherStation: Subject) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }

    update(temperature: number) {
        console.log('TemperatureDisplay: I need to update mu display.');
    }
}

class Fan implements Observer {
    private subject: Subject;
    constructor(weatherStation: Subject) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }

    update(temperature: number) {
        if (temperature > 25) {
            console.log('Fan: It is hot here, turning myself on...');
            // Here some real logic
        } else {
            console.log('Fan: It is nice and cool, turning myself off...');
            // Here some real logic
        }
    }
}

const weatherStation = new WeatherStation();
const tempDisplay = new TemperatureDisplay(weatherStation);
const fan = new Fan(weatherStation);


weatherStation.setTemperature(30);

setTimeout(() => {
    weatherStation.setTemperature(20);
}, 1300);

