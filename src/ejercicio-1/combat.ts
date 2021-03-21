import {Pokemon} from './pokemon';

/**
 * clase combat donde 2 pokemons combaten entre ellos
 */
export class Combat {
  constructor(private pokemon1: Pokemon, private pokemon2: Pokemon) {}

  //getters
  public getPokemon1() {
    return this.pokemon1;
  }

  public getPokemon2() {
    return this.pokemon2;
  }

  //setters
  public setPokemon1(pokemon1: Pokemon) {
    this.pokemon1 = pokemon1;
  }

  public setPokemon2(pokemon2: Pokemon) {
    this.pokemon1 = pokemon2;
  }

  /**
   * Funcion donde miramos que daño se hacen los pokemons
   * @param attacker 
   * @returns damage
   */
  public damagePokemon(attacker: number) {

    let damage: number = 0;
    let effectiveness: number = 0;
     
        switch (this.pokemon1.getType()) {
          case "water":
            if (this.pokemon2.getType() == "fire") {
              effectiveness = 2;
            }
            if ((this.pokemon2.getType() == "electric") || (this.pokemon2.getType() == "grass")) {
              effectiveness = 0.5;
            }
   
            break;
         
          case "fire":
            if (this.pokemon2.getType() == "grass") {
              effectiveness = 2;
            }
            if (this.pokemon2.getType() == "water") {
              effectiveness = 0.5;
            }
            if (this.pokemon2.getType() == "electric") {
              effectiveness = 1;
            }  
          break;
         
          case "grass":
            if (this.pokemon2.getType() == "water") {
              effectiveness = 2;
            }
   
            if (this.pokemon2.getType() == "electric") {
              effectiveness = 1;
            }
   
            if (this.pokemon2.getType() == "fire") {
              effectiveness = 0.5;
            }
   
            break;
   
          case "electric":
            if (this.pokemon2.getType() == "water") {
              effectiveness = 2;
            }
   
            if ((this.pokemon2.getType() == "fire") || (this.pokemon2.getType() == "grass")) {
              effectiveness = 1;
            }
   
            break;
        }
      
      if (attacker == 1) {
        damage = 50 * (this.pokemon1.getBasicData().attack / this.pokemon2.getBasicData().defense) * effectiveness;
      }
      else {
        if (effectiveness == 2) {
          effectiveness = 0.5;
        }
        if (effectiveness == 0.5) {
          effectiveness = 2;
        }
        damage = 50 * (this.pokemon2.getBasicData().attack / this.pokemon1.getBasicData().defense) * effectiveness;
      }
      return damage;
  }

  /**
   * Funcion llamada start donde empezamos la batalla entre 2 pokemons
   * @returns 
   */
  public start() {
    let attacker: number = 1;
    console.log(`${this.pokemon1.getName()} vs ${this.pokemon2.getName()}`);
    console.log(`HP de ${this.pokemon1.getName()} es: ${this.pokemon1.getBasicData().hp}`);
    console.log(`HP de ${this.pokemon2.getName()} es: ${this.pokemon2.getBasicData().hp}`);

    while ((this.pokemon1.getBasicData().hp > 0) && (this.pokemon2.getBasicData().hp > 0)) {
      if (attacker == 1) {

        this.pokemon2.setHp((this.pokemon2.getBasicData().hp - this.damagePokemon(attacker)));
        console.log(`${this.pokemon1.getName()} le quedan ${this.pokemon1.getBasicData().hp} puntos de vida`);
        console.log(`${this.pokemon2.getName()} le quedan ${this.pokemon2.getBasicData().hp} puntos de vida`);
        attacker = 0;
      }
      else {
        this.pokemon1.setHp((this.pokemon1.getBasicData().hp - this.damagePokemon(attacker)));
        console.log(`${this.pokemon1.getName()} le quedan ${this.pokemon1.getBasicData().hp} puntos de vida`);
        console.log(`${this.pokemon2.getName()} le quedan ${this.pokemon2.getBasicData().hp} puntos de vida`);
      }

      if (this.pokemon2.getBasicData().hp < 0) {
        console.log(`El pokemon ${this.pokemon2.getName()} ha ganado la batalla`);
        return this.pokemon2.getName;
      }
      else {
        console.log(`El pokemon ${this.pokemon1.getName()} ha ganado la batalla`);
        return this.pokemon1.getName;
      }
    }
  }
}