import EnemyShipFactory from "./EnemyShipFactory";

const enemyShipFactory = new EnemyShipFactory();
let enemy = enemyShipFactory.makeEnemyShip('D');
enemy.displayEnemyShip();
console.log('===================');
enemy = enemyShipFactory.makeEnemyShip('U');
enemy.displayEnemyShip();
console.log('===================');
enemy = enemyShipFactory.makeEnemyShip('R');
enemy.displayEnemyShip();