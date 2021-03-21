import {Car} from './car';
import {Motocicle} from './motocicle';
import {Scooter} from './scooter';
import {Bus} from './bus';
import {Bicycle} from './bicycle';
import {Walker} from './walker';
import {Vehicle} from './vehicle';

/**
 * clase street donde miramos que vehiculos hay en esa calle
 */
export class Street {
    constructor(private streetName: string, private location: string, private vehicle: Vehicles[]) {}

    //getters
    public getStreetName() {
        return this.streetName;
    }
    
    public getLocation() {
        return this.location;
    }

    //setters
    public setStreetName(streetName: string) {
        this.streetName = streetName;
    }

    public setLocation(location: string) {
        this.location = location;
    }

    /**
     * funcion donde mostramos en fomrato tabla los vehiculos
     */
    public showVehicles() {
        console.table(this.vehicle);
    }

    /**
     * funcion donde miramos cuantos vehiculos d cada tipo hay
     */
    public allVehicles() {

    let car: number = 0;
    let motocicle: number = 0;
    let scooter: number = 0;
    let walker: number = 0;
    let bus: number = 0;
    let bicycle: number = 0;
    

    this.vehicle.forEach((array) => {
        if (array instanceof Car) {
          car++;
        }
        if (array instanceof Motocicle) {
          motocicle++;
        }
        if (array instanceof Scooter) {
          scooter++;
        }
        if (array instanceof Walker) {
          walker++;
        }
        if (array instanceof Bus) {
          bus++;
        }
        if (array instanceof Bicycle) {
          bicycle++;
        }
    });
    }

    /**
     * funcion donde miramos a que velocidad va el vehiculo
     */
    public speed() {
        let aux: Vehicle;
        let aux2: number;
        for (let i: number = 1; i < this.vehicle.length; i++) {
            aux2 = i - 1;
            aux = this.vehicle[i];
            while ((this.vehicle[aux2].speed >= aux.speed) && (aux2 > 0)) {
                this.vehicle[aux2 + 1] = this.vehicle[aux2];
                aux2 = aux2 - 1;
            }
            this.vehicle[aux2 + 1] = aux;
        }
    }
    
}