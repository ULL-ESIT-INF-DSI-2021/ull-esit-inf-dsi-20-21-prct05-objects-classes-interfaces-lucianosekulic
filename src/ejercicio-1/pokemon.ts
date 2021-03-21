/**
 * clase pokemon donde le ponemos las estadisticas requeridas para el combate
 */
export class Pokemon {
  
    private basicData = {
      attack: 0,
      defense: 0,
      speed: 0,
      hp: 0,
    }
  
    constructor(private name: string, private weigth: number, private size: number, private type: string, basicData: number[]) {
      this.basicData.attack = basicData[0];
      this.basicData.defense = basicData[1];
      this.basicData.speed = basicData[2];
      this.basicData.hp = basicData[3];
    }
    //getters
    public getName() {
      return this.name;
    }
  
    public getWeigth() {
      return this.weigth;
    }
  
    public getSize() {
      return this.size;
    }
  
    public getType() {
      return this.type;
    }
  
    public getBasicData() {
      return this.basicData;
    }
    //setters
    public setName(name: string) {
      this.name = name; 
    }
  
    public setWeigth(weigth: number) {
      this.weigth = weigth;
    }
  
    public setSize(size: number) {
      this.size = size;
    }
  
    public setType(type: string) {
      this.type = type;
    }
  
    public setHp(life: number) {
      this.basicData.hp = life;
    }
}