import { DO_LOGIN } from '../actions/login'

export default function(state = [], action) {
    console.log('Types is :' + action.type);
    switch (action.type) {
        case DO_LOGIN:
            return {...action.payload, ...state};
        default:
            break;
    }
    return state;
}