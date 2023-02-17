import { Dispatch } from "redux";
import { authAPI } from "../api/api";

export type initialStateAuthType = {
  data: {
    id: number;
    login: string;
    email: string;
  };
  resultCode: number;
  isAuth: boolean;
};

const initialState: initialStateAuthType = {} as initialStateAuthType;

export const AuthReducer = (state = initialState, action: AuthActionsType) => {
  switch (action.type) {
    case "SET-USER-DATA":
      return { ...state, ...action.payload, isAuth: true };
    default:
      return state;
  }
};

type AuthActionsType = ReturnType<typeof setAuthUserDataSucsess>;

export const setAuthUserDataSucsess = (
  id: number,
  login: string,
  email: string
) => {
  return {
    type: "SET-USER-DATA",
    payload: { id, login, email },
  } as const;
};

export const setAuthUserData = () => {
  return (dispatch: Dispatch<AuthActionsType>) => {
    authAPI.autheMe().then((r) => {
      if (r.resultCode === 0) {
        let { id, login, email } = r.data;
        dispatch(setAuthUserDataSucsess(id, login, email));
      }
    });
  };
};
