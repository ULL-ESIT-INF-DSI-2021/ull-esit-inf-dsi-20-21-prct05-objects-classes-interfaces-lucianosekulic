import {Vehicles} from './vehicle';

/**
 * clase motocicle hija de vehicle
 */
export class Motocicle extends Vehicles {
    constructor(speed: number, type: string) {
        super(speed, type);
      }
}