import EnemyShip from "./EnemyShip";
import UFOEnemyShip from "./UFOEnemyShip";
import BigUFOEnemyShip from "./BigUFOEnemyShip";
import RocketEnemyShip from "./RocketEnemyShip";

class EnemyShipFactory {
    public makeEnemyShip(newShipType: string): EnemyShip {
        if (newShipType === 'U') {
            return new UFOEnemyShip();
        }

        if (newShipType === 'D') {
            return new BigUFOEnemyShip();
        }

        if (newShipType === 'R') {
            return new RocketEnemyShip();
        }
    }
}

export default EnemyShipFactory;