import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";
import {authAPI, ResultCode} from "../api/api";
import {AppDispatch} from "./redux-store";
import {FormDataType} from "../components/Login/Login";

type DataType = {
    id: number | null;
    login: string | null;
    email: string | null;
}

export type stateProfileType = {
    data: DataType,
    isAuth: boolean
}

const initialState: stateProfileType = {
    data: {
        email: null,
        id: null,
        login: null
    },
    isAuth: false
};

export const AuthReducer = (state = initialState, action: AuthActionsType): stateProfileType => {
    switch (action.type) {
        case "samurai-network/auth/SET-USER-DATA":
            return {
                ...state,
                data: {
                    login: action.payload.login,
                    id: action.payload.id,
                    email: action.payload.email,
                },
                isAuth: action.payload.isAuth,
            };
        default:
            return state;
    }
};

export type AuthActionsType = ReturnType<typeof setAuthUserData>;

export const setAuthUserData = (
    id: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean
) => {
    return {
        type: "samurai-network/auth/SET-USER-DATA",
        payload: {id, login, email, isAuth},
    } as const;
};

export const getAuthUserData = () => async (dispatch: Dispatch<AuthActionsType>) => {
    const r = await authAPI.me();
    if (r.data.resultCode === ResultCode.OK) {
        let {id, login, email} = r.data.data;
        dispatch(setAuthUserData(id, login, email, true));
    }
};


export const login =
    (data: FormDataType) => async (dispatch: AppDispatch) => {

        const r = await authAPI.login(data);
        if (r.data.resultCode === ResultCode.OK) {
             dispatch(getAuthUserData());
        } else {
            let message =
                r.data.messages.length > 0 ? r.data.messages[0] : "Some error";
            dispatch(stopSubmit("login", {_error: message})); // ACTIONCREATOR from redux-form
        }
    }


export const logOut = () => async (dispatch: Dispatch<ReturnType<typeof setAuthUserData>>) => {
    const r = await authAPI.logOut()
    if (r.data.resultCode === ResultCode.OK) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};
