var Robot = (function () {
    function Robot() {
    }
    Robot.prototype.setRobotArms = function (arms) {
        this.robotArms = arms;
    };
    Robot.prototype.getRobotArms = function () {
        return this.robotArms;
    };
    Robot.prototype.setRobotHead = function (head) {
        this.robotHead = head;
    };
    Robot.prototype.getRobotHead = function () {
        return this.robotHead;
    };
    Robot.prototype.setRobotLegs = function (legs) {
        this.robotLegs = legs;
    };
    Robot.prototype.getRobotLegs = function () {
        return this.robotLegs;
    };
    Robot.prototype.setRobotTorso = function (torso) {
        this.robotTorso = torso;
    };
    Robot.prototype.getRobotTorso = function () {
        return this.robotTorso;
    };
    return Robot;
}());
var OldRobotBuilder = (function () {
    function OldRobotBuilder() {
        this.robot = new Robot();
    }
    OldRobotBuilder.prototype.buildRobotArms = function () {
        this.robot.setRobotArms('Blowtorch Arms');
    };
    OldRobotBuilder.prototype.buildRobotHead = function () {
        this.robot.setRobotHead('Tin Head');
    };
    OldRobotBuilder.prototype.buildRobotLegs = function () {
        this.robot.setRobotLegs('Roller Skates');
    };
    OldRobotBuilder.prototype.buildRobotTorso = function () {
        this.robot.setRobotTorso('Tin Torso');
    };
    OldRobotBuilder.prototype.getRobot = function () {
        return this.robot;
    };
    return OldRobotBuilder;
}());
var RobotEngineer = (function () {
    function RobotEngineer(robotBuilder) {
        this.robotBuilder = robotBuilder;
    }
    RobotEngineer.prototype.getRobot = function () {
        return this.robotBuilder.getRobot();
    };
    RobotEngineer.prototype.makeRobot = function () {
        this.robotBuilder.buildRobotHead();
        this.robotBuilder.buildRobotTorso();
        this.robotBuilder.buildRobotLegs();
        this.robotBuilder.buildRobotArms();
    };
    return RobotEngineer;
}());
var oldStyleRobot = new OldRobotBuilder();
var robotEngineer = new RobotEngineer(oldStyleRobot);
robotEngineer.makeRobot();
var firstRobot = robotEngineer.getRobot();
var secondRobot = robotEngineer.getRobot();
console.log('Robot built');
console.log('Robot Head Type ' + firstRobot.getRobotHead());
console.log('Robot Arms Type ' + firstRobot.getRobotArms());
console.log('Robot Torso Type ' + firstRobot.getRobotTorso());
console.log('Robot Legs Type ' + firstRobot.getRobotLegs());
/* Be carefully! In this example we build only one robot */
if (secondRobot === firstRobot) {
    console.log('Same Robot');
}
