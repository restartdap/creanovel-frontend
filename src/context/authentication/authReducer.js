const AuthReducer = (state, action) => {

    const types = {
        REGISTRO_SUCCESS: 'REGISTRO_SUCCESS',
        REGISTRO_ERROR: 'REGISTRO_ERROR',
        LOGIN_SUCCESS: 'LOGIN_SUCCESS',
        LOGIN_ERROR: 'LOGIN_ERROR',
        GET_USUARIO: 'GET_USUARIO',
        CLOSE_SESSION: "CLOSE_SESSION"
    }

    switch (action.type) {
        case types.REGISTRO_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                autenticado: true,
                message: null
            };
        case types.REGISTRO_ERROR:
            localStorage.removeItem("token");
            return {
                ...state,
                token: null,
                autenticado: false,
                message: action.payload
            };
        case types.GET_USUARIO:
            return {
                ...state,
                usuario: action.payload
            };
        case types.LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                autenticado: true,
                message: null
            };
        case types.LOGIN_ERROR:
            localStorage.removeItem("token");
            return {
                ...state,
                token: null,
                autenticado: false,
                message: action.payload
            };
        case types.CLOSE_SESSION:
            return {
            }
        default:
            return state;
    }
}

export default AuthReducer;