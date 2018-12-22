import EnemyShip from './EnemyShip';

class UFOEnemyShip extends  EnemyShip {
    constructor() {
        super();
        this.setName('UFO Enemy Ship');
        this.setDamage(20);
    }
}

export default UFOEnemyShip;