import { HIDE_ALERT, SHOW_ALERT } from "../actionTypes";

// const handlers = {
//     [HIDE_ALERT] : () => null,
//     [SHOW_ALERT] : (state, action) => action.payload,
//     DEFAULT : (state) => state
// }


export const alertReducer = (state, action) => {
    // const handler = handlers[action.type] || handler.DEFAULT;

    // handler(state, action);
    switch(action.type){
        case HIDE_ALERT:
            return null;
        case SHOW_ALERT:
            return {...action.payload}
        default: 
            return state;
    }
}