import { IUser } from "../../../models/IUser";
import { CarsAction, CarsActionEnum, CarsState } from "./types";



const initialState = {
    cars: [],
    user: {} as IUser
}

export default function carsReducer(state = initialState, action: CarsAction): CarsState {
    switch (action.type) {
        case CarsActionEnum.SET_CARS:
            return {...state, cars: action.payload}

        default:
            return state;
    }
}