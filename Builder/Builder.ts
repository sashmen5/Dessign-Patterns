interface RobotPlan {
    setRobotHead(head: string): void;
    setRobotTorso(torso: string): void;
    setRobotArms(arms: string): void;
    setRobotLegs(legs: string): void;
}

interface RobotBuilder {
    buildRobotHead(): void;
    buildRobotTorso(): void;
    buildRobotArms(): void;
    buildRobotLegs(): void;
    getRobot(): Robot;
}

class Robot implements RobotPlan{
    private robotHead: string;
    private robotTorso: string;
    private robotArms: string;
    private robotLegs: string;

    public setRobotArms(arms: string): void {
        this.robotArms  = arms;
    }

    public getRobotArms(): string {
        return this.robotArms;
    }

    public setRobotHead(head: string): void {
        this.robotHead = head;
    }

    public getRobotHead(): string {
        return this.robotHead;
    }

    public setRobotLegs(legs: string): void {
        this.robotLegs = legs;
    }

    public getRobotLegs(): string {
        return this.robotLegs;
    }

    public setRobotTorso(torso: string): void {
        this.robotTorso = torso;
    }

    public getRobotTorso(): string {
        return this.robotTorso;
    }
}


class OldRobotBuilder implements RobotBuilder {

    private  robot: Robot;

    constructor() {
        this.robot = new Robot();
    }

    buildRobotArms(): void {
        this.robot.setRobotArms('Blowtorch Arms');
    }

    buildRobotHead(): void {
        this.robot.setRobotHead('Tin Head');
    }

    buildRobotLegs(): void {
        this.robot.setRobotLegs('Roller Skates');
    }

    buildRobotTorso(): void {
        this.robot.setRobotTorso('Tin Torso');
    }

    getRobot(): Robot {
        return this.robot;
    }
}

class RobotEngineer {
    private robotBuilder: RobotBuilder;

    constructor(robotBuilder: RobotBuilder) {
        this.robotBuilder = robotBuilder;
    }

    public getRobot(): Robot {
        return this.robotBuilder.getRobot();
    }

    public makeRobot() {
        this.robotBuilder.buildRobotHead();
        this.robotBuilder.buildRobotTorso();
        this.robotBuilder.buildRobotLegs();
        this.robotBuilder.buildRobotArms();
    }
}
