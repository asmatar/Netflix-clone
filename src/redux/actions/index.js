
import { auth } from '../../firebase';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
// export const login = (payload) => {
//     return {
//         type: 'LOGIN',
//         uid: payload.iud,
//         email: payload.email
//     }
// }

// login 4 : implémentation setPalad which goes into the reducer
export const logout = () => {
    console.log('dans logout action',)
    return {
        type: 'LOGOUT'
    }
}

export const login = (payload) => {
    console.log('dans login action', payload)
    return {
        type: 'LOGIN',
        // email: payload.email,
        // uid: payload.uid
        // payload: payload
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
            console.log('2 je rentre dans getUserAuth',userAuth)
            if (userAuth) {
                console.log('3 juste aavant dispatch login')
                dispatch(login(userAuth));
            } else {
                dispatch(logout())
            }
        })
    }
}
