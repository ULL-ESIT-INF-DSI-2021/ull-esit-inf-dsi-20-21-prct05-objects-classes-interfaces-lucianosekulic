import {Vehicles} from './vehicle';

/**
 * clase bicicleta hija de vehicle
 */
export class Bicycle extends Vehicles {
    constructor(speed: number, type: string) {
        super(speed, type);
      }
}