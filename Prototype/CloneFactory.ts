import {Animal} from "./Animal";

export class CloneFactory {
    public getClone(animalSample: Animal): Animal {
        return animalSample.clone();
    }
}