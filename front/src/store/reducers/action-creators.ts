import { AuthActionCreators } from "./auth/action-creators";
import { CarsActionCreators } from "./cars/action-creators";
import { PromptActionCreators } from "./prompt/action-creators";

export const allActionCreators = {
    ...AuthActionCreators,
    ...PromptActionCreators,
    ...CarsActionCreators
}