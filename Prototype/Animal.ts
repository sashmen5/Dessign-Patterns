import {Clonable} from "./Clonable";

export abstract class Animal extends Clonable {
    public clone: () => Animal;
}

