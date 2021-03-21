import {Vehicles} from './vehicle';

export class Walker extends Vehicles {
    constructor(speed: number, type: string) {
        super(speed, type);
      }
}