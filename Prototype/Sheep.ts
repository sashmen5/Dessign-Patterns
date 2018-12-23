import {Animal} from "./Animal";

export class Sheep extends Animal {
    constructor() {
        super();
        console.log('Sheep is Made');
    }

    makeCopy = () => {
        console.log('Sheep is Being Made');
        let sheepObject: Sheep;
        sheepObject = super.clone() as Sheep;
        return sheepObject;
    }

    public toString() {
        return 'Dolly is my Hero!';
    }
}