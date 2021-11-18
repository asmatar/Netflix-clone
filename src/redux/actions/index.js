
import { auth } from '../../firebase';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

// login 4 : implémentation setPalad which goes into the reducer
export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}

export const login = (payload) => {
    return {
        type: 'LOGIN',
        payload: {
            email: payload.email,
            uid : payload.uid
        }
    }
}
// function n the useEffect
export function getUserAuth () {
    return (dispatch) => {
        auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                dispatch(login(userAuth));
            } else {
                dispatch(logout())
            }
        })
    }
}
