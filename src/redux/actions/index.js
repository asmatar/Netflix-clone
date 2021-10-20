
export const LOGIN = 'LOGIN';
export const login = (payload) => {
    return {
        type: 'LOGIN',
        uid: payload.useAuth.iud,
        email: payload.useAuth.email
    }
}