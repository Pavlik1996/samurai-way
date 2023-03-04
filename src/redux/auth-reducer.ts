import { Dispatch } from "redux";
import { stopSubmit } from "redux-form";
import { ThunkAction } from "redux-thunk";
import { authAPI } from "../api/api";
import { AppThunk, TypedDispatch } from "./redux-store";

export type stateAuthType = {
  messages: [];
  fieldsErrors: [];
  resultCode: number;
  isAuth: boolean;
  data: {
    id: any;
    login: string | null;
    email: string | null;
  };
};

type DataType = {
  id: any;
  login: string | null;
  email: string | null;
}

const initialState: stateAuthType = {} as stateAuthType;

export const AuthReducer = (
  state = initialState,
  action: AuthActionsType
): stateAuthType => {
  switch (action.type) {
    case "SET-USER-DATA":
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
type dispatchType = ReturnType<typeof getAuthUserData>;

export const setAuthUserData = (
  id: number | null,
  login: string | null,
  email: string | null,
  isAuth: boolean
) => {
  return {
    type: "SET-USER-DATA",
    payload: { id, login, email, isAuth },
  } as const;
};

export const getAuthUserData = () => (dispatch: Dispatch<AuthActionsType>) => {
  return authAPI.me().then((r) => {
    if (r.data.resultCode === 0) {
      let { id, login, email } = r.data.data;
      dispatch(setAuthUserData(id, login, email, true));
    }
  });
};


export const login =
  (email: string, password: string, rememberMe: boolean) =>
    (dispatch: TypedDispatch<dispatchType>) => {
      authAPI.login(email, password, rememberMe).then((r) => {
        if (r.data.resultCode === 0) {
          dispatch(getAuthUserData());
        } else {
          let message =
            r.data.messages.length > 0 ? r.data.messages[0] : "Some error";
          dispatch(stopSubmit("login", { _error: message })); // ACTIONCREATOR from redux-form
        }
      });
    };

export const logOut =
  () => (dispatch: Dispatch<ReturnType<typeof setAuthUserData>>) => {
    authAPI.logOut().then((r) => {
      if (r.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  };
