import * as AuthActions from './auth.actions';

const initialState:State={
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
}

export interface State{
    token: string | null,
    isAuthenticated: boolean | any,
    loading: boolean,
    user: any    
}

export function AuthReducer(state=initialState,action){
    const { type, payload } = action;
    switch(type){
        case AuthActions.REGISTER_SUCCESS:
        case AuthActions.LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                token:payload.token,
                isAuthenticated: true,
                loading: false
            }

        case AuthActions.REGISTER_FAIL:
        case AuthActions.LOGIN_FAIL:
        case AuthActions.LOGOUT:
            localStorage.removeItem('token');
            return{
                ...state,
                token:null,
                isAuthenticated:false,
                loading:false
            }

        case AuthActions.LOAD_USER:
            console.log("@@@@@@@@@@@@@@@@@@@@LOADUSER---->")
            console.log(payload);
            return{
                ...state,
                isAuthenticated:true,
                loading:false,
                user:payload
            }

        default:
            return state

    }
}