import EnemyShip from './EnemyShip';

class RocketEnemyShip extends  EnemyShip {
    constructor() {
        super();
        this.setName('Rocket Enemy Ship');
        this.setDamage(10);
    }
}

export default RocketEnemyShip;