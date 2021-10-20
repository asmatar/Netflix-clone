import { LOGIN, LOGOUT } from '../actions/index';

const InitialState = {
    user: null,
};

const userReducer = (state= InitialState, action) => {
    console.log('0 state de base',InitialState)
    // login 5 . take the action we've imported and change the state
    switch (action.type){
        case LOGIN:
            console.log('dans reducer', action.payload)
            // console.log('dans reducer', action.user)
            // console.log('dans reducer', action.user._delegate)
            // console.log('dans reducer', action.user._delegate.email)
        return {
            ...state,
            // email: action.email,
            // uid : action.uid
            user: action.payload
            //  {
                // email: action.payload.email,
                // uid: action.payload.uid
            // }
        }
        case LOGOUT:
            return {
                ...state,
                user: null
            }
        default:
            return state
    }
}

export default userReducer;