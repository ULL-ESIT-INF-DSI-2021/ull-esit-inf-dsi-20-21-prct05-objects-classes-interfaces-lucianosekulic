import {Vehicles} from './vehicle';

/**
 * clase bus hija de vehicle
 */
export class Bus extends Vehicles {
    constructor(speed: number, type: string) {
        super(speed, type);
      }
}