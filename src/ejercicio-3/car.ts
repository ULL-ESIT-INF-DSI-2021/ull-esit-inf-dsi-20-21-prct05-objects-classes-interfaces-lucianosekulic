import {Vehicle} from './vehicle';

/**
 * clase car hija de vehicle
 */
export class Car extends Vehicle {
    constructor(speed: number, type: string) {
        super(speed, type);
      }
}