import { Action } from "@ngrx/store";

export const REGISTER_SUCCESS = "[REGISTER] Register_Success";
export const REGISTER_FAIL = "[REGISTER] Register_Fail";

export const LOGIN_SUCCESS = '[LOGIN] Login_Success';
export const LOGIN_FAIL = '[LOGIN] Login_Fail';

export const LOGOUT = '[LOGOUT] Logout';

export const LOAD_USER = '[USER] Load User';


export class RegisterSuccess implements Action {
    readonly type: string = REGISTER_SUCCESS;
    constructor(private payload: any) { }

}
export class RegisterFail implements Action {
    readonly type: string = REGISTER_FAIL;
    constructor() { }

} export class LoginSuccess implements Action {
    readonly type: string = LOGIN_SUCCESS;
    constructor(private payload: any) { }

} export class LoginFail implements Action {
    readonly type: string = LOGIN_FAIL;
    constructor() { }

} export class Logout implements Action {
    readonly type: string = LOGOUT;
    constructor() { }

}

export class LoadUser implements Action {
    readonly type: string = LOAD_USER;
    constructor(public payload:any) { }
}
