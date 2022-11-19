import { ICar } from "../../../models/ICar";
import { CarsActionEnum, SetCarsAction } from "./types";

export const CarsActionCreators = {
    setCars: (cars: ICar[]): SetCarsAction => ({type: CarsActionEnum.SET_CARS, payload: cars}),
}