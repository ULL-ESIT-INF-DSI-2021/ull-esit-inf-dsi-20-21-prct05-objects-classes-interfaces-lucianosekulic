import {Vehicles} from './vehicle';

/**
 * clase scooter hija de vehicle
 */
export class Scooter extends Vehicles {
    constructor(speed: number, type: string) {
        super(speed, type);
      }
}