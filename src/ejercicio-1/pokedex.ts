import {Pokemon} from './pokemon';

/**
 * clase pokedex, donde guardamos los pokemons que vamos obteniendo
 */
export class Pokedex {
  constructor(private arrayPokemons: Pokemon[]) {}

  public getPokemon(){ /// devolvemos los pokemons de la pokedex
    return this.arrayPokemons;
  }

  public setPokemon(pokemon: Pokemon) { ///añadimos pokemons
    this.arrayPokemons.push(pokemon)
  }

  public showPokemons() {
    console.table(this.arrayPokemons, ["name", "weight", "size", "type"]);
  }

  
}