abstract class EnemyShip {
    private name: string;
    private amtDamage: number;

    public getName(): string {
        return this.name;
    }

    public setName(newName: string): void {
        this.name = newName;
    }

    public getDamage(): number{
        return this.amtDamage;
    }

    public setDamage(newDamage: number): void {
        this.amtDamage = newDamage;
    }

    public followHeroShip(): void {
        console.log(this.getName() + ' is following the hero');
    }

    public displayEnemyShip(): void {
        console.log(this.getName() + ' is on the screen');
    }

    public enemyShipShoots(): void {
        console.log(this.getName() + ' attacks and does ' + this.getDamage());
    }
}

export default EnemyShip;