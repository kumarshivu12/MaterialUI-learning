import { Increment,Decrement } from "../Constant";

const initialState=0;
export const changeCount=(state=initialState,action)=>{
    switch (action.type) {
        case Increment:
            return state+action.payLoad;            
        case Decrement:
            return state-action.payLoad;            
        default:
            return state;
    }
}