import { Dispatch } from "redux";
import { authAPI } from "../api/api";

export type initialStateAuthType = {
  messages: [];
  fieldsErrors: [];
  resultCode: number;
  isAuth: boolean;
  data: {
    id: number;
    login: string;
    email: string;
  };
};

const initialState: initialStateAuthType = {} as initialStateAuthType;

export const AuthReducer = (state = initialState, action: AuthActionsType) => {
  switch (action.type) {
    case "SET-USER-DATA":
      return { ...state, data: { ...action.payload }, isAuth: true };
    default:
      return state;
  }
};

type AuthActionsType = ReturnType<typeof setAuthUserData>;

export const setAuthUserData = (id: number, login: string, email: string) => {
  return {
    type: "SET-USER-DATA",
    payload: { id, login, email },
  } as const;
};

export const getAuthUserData = () => {
  return (dispatch: Dispatch<AuthActionsType>) => {
    authAPI.me().then((r) => {
      if (r.data.resultCode === 0) {
        let { id, login, email } = r.data.data;
        dispatch(setAuthUserData(id, login, email));
      }
    });
  };
};
