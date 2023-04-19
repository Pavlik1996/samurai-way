import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  createStore,
} from "redux";
import { profileReducer } from "./profile-reducer";
import { dialogsReducer } from "./dialogs-reducer";
import { usersReducer } from "./users-reducer";
import { AuthReducer } from "./auth-reducer";
import thunkMiddleware, { ThunkAction, ThunkDispatch } from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import { ActionTypes } from "./store";
import { Appreducer } from "./app-reducer";
import { useDispatch } from "react-redux";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  // sidebar: sidebarReducer
  auth: AuthReducer,
  form: formReducer,
  app: Appreducer
});



export type AppStateType = ReturnType<typeof reducers>;

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export type AppDispatch = ThunkDispatch<RootState, unknown, ActionTypes>

export const useAppDispatch = () => useDispatch<AppDispatch>();


// export type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionTypes>

export type RootState = ReturnType<typeof store.getState>


//@ts-ignore
window.store = store;
