import { VehicleBase } from "./vehicleBase";

export interface Vehicle extends VehicleBase{
    liftingCapacity: number;
    numberOfSeats: number;
}