import { IUserAction, IUserModel } from "../../../Interface/user.interface";
import { userActiontypes } from "../../ActionTypes/userActionTypes";

const userReducer = (state:IUserModel,action:IUserAction):IUserModel => {
    switch (action.type) {
        case userActiontypes.REGISTER_USER:
            return {
                ...action.payload
            }
    
        default:
            return state;
    }
}
export default userReducer;