import UFOEnemyShip from './UFOEnemyShip';

class BigUFOEnemyShip extends UFOEnemyShip {
    constructor() {
        super();
        this.setName('Big UFO Enemy Ship');
        this.setDamage(40);
    }
}

export default BigUFOEnemyShip;