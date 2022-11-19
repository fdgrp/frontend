import { ICar } from "../../../models/ICar";

export interface CarsState {
    cars: ICar[];
}

export enum CarsActionEnum {
    SET_CARS = "SET_CARS",
}



export interface SetCarsAction {
    type: CarsActionEnum.SET_CARS;
    payload: ICar[];
}

export type CarsAction =
    SetCarsAction
