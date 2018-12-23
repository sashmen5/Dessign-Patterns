import {CloneFactory} from "./CloneFactory";
import {Sheep} from "./Sheep";

const animalMaker = new CloneFactory();
const sally: Sheep = new Sheep();
const clonedSally: Sheep = animalMaker.getClone(sally) as Sheep;
