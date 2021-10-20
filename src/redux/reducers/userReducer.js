import {
    LOGIN
    // , LOGOUT 
} from '../actions/index';


const InitialState = {
    user: null,
};

const userReducer = (state= InitialState, action) => {
    console.log(InitialState)
    // login 5 . take the action we've imported and change the state
    switch (action.type){
        case LOGIN:
        return {
            ...state,
            user: action.payload
        }
        // case LOGOUT:
        //     return {
        //         ...state,
        //         user: null
        //     }
        default:
            return state
    }
}

export default userReducer;